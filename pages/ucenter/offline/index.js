var util = require('../../../utils/util')
var formatLocation = util.formatLocation
// pages/ucenter/offline/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		location: null,
		storeList: [{
			id: 0,
			store_name: '脑力联盟总店',
			host: '王先生',
			tel: '13953312234',
			addr: '郑州市金水区文化路硅谷广场B座1108室',
			far: 5.6,
			longitude: "113.66578401062014",
			latitude: "34.79688026941351"
    }, {
			id: 1,
			store_name: '脑力联盟总店',
			host: '王先生',
			tel: '13953312234',
			addr: '郑州市金水区文化路硅谷广场B座1108室',
			far: 5.6,
			longitude: "113.66578401062014",
			latitude: "34.79688026941351"
    }, {
			id: 2,
			store_name: '脑力联盟总店',
			host: '王先生',
			tel: '13953312234',
			addr: '郑州市金水区文化路硅谷广场B座1108室',
			far: 5.6,
			longitude: "113.66578401062014",
			latitude: "34.79688026941351"

    }]
	},
	openLocation: function (e) {
		var i = e.currentTarget.dataset.id
		var value = this.data.storeList[i]
		wx.openLocation({
			longitude: Number(value.longitude),
			latitude: Number(value.latitude),
			name: value.store_name,
			address: value.addr
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		var that = this
		wx.getLocation({
			success: function (res) {
				console.log(res)
				that.setData({
					hasLocation: true,
					location: formatLocation(res.longitude, res.latitude)
				})
			}
		})

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})
