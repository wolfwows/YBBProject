// 远程服务器用来存储信息
var api = require('../config/api.js');
// 日期格式化
function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}
// 获取地图的坐标，并进行字符串处理
function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
// 封装微信的request接口
function request(url, data = {}, method = "GET") {
	return new Promise(function (resolve, reject) {
		wx.request({
			url: url,
			data: data,
			method: method,
			header: {
				'Content-Type': 'application/json',
				'X-Nideshop-Token': wx.getStorageSync('token')
			},
			success: function (res) {
				console.log("success");
				if (res.statusCode == 200) {
					if (res.data.errno == 401) {
						//需要登录才能操作
						let code = null;
						return login().then((res) => {
							code = res.code;
							return getUserInfo();
						}).then((userInfo) => {


							request(api.AuthLoginByWeixin, {
								code: code,
								userInfo: userInfo
							}, 'POST').then(res => {
								if (res.errno === 0) {
									// 存储用户信息
									wx.setStorageSync('userInfo', res.data.userInfo);
									wx.setStorageSync('token', res.data.token);
									resolve(res);
								} else {
									reject(res);
								}
							}).catch((err) => {
								reject(err);
							});
						}).catch((err) => {
							reject(err);
						})
					} else {
						resolve(res.data);
					}
				} else {
					reject(res.errMsg);
				}
			},
			fail: function (err) {
				reject(err)
				console.log("failed");
			}
		})
	});
}
// 检查微信回话是否过期
function checkSession() {
	return new Promise(function (resolve, reject) {
		wx.checkSession({
			success: function () {
				resolve(true);
			},
			fail: function () {
				reject(false);
			}
		})
	});
}

// 调用微信登录
function login() {
	return new Promise(function (resolve, reject) {
		wx.login({
			success: function (res) {
				if (res.code) {
					// 登录远程服务器
					console.log(res);
					resolve(res);
				} else {
					reject(res);
				}
			},
			fail: function (err) {
				reject(err);
			}
		});
	});
}

// 获取用户信息
function getUserInfo() {
	return new Promise(function (resolve, reject) {
		wx.getUserInfo({
			withCredentials: true,
			success: function (res) {
				console.log(res);
				resolve(res);
			},
			fail: function (err) {
				reject(err);
			}
		})
	});
}
// 跳转到登录页面
function redirect(url) {
	// 判断页面是否需要登录
	if (false) {
		wx.redirectTo({
			url: '/pages/auth/login/index'
		});
		return false;
	} else {
		wx.redirectTo({
			url: url
		})
	}
}
module.exports = {
	formatTime,
	formatLocation,
	request,
	redirect,
	checkSession,
	login,
	getUserInfo,
}
