// pages/ucenter/index/index.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		integral: 0,
		upmemberdate: 20,
		income: 0,
		items: [{
			icon: '../../../assets/images/icon-order.png',
			text: '我的订单',
			path: '/pages/ucenter/order/index'
    }, {
			icon: '../../../assets/images/icon-offline.png',
			text: '线下网点',
			path: '/pages/ucenter/offline/index'
    }, {
			icon: '../../../assets/images/icon-qrcode.png',
			text: '二维码扫描',
			path: '/pages/ucenter/qrcode/index'
    }]
	},
	// 事件处理函数
	bindViewTap: function () {
		wx.navigateTo({
			url: '/pages/ucenter/userinfo/index'
		})
	},
	navigateTo(e) {
		var that = this
		const path = e.currentTarget.dataset.path
		// console.log(path)
		wx.navigateTo({
			url: path
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},
	onReady: function () {

	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
