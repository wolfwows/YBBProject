// pages/lesson/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		active: false,
		id: 1,
		detail: "all",
		show: true,
		integralDetailList: [{
			id: 1,
			detail: 'income',
			source: "签到",
			score: 2,
			date: "2018-08-09  16:32"
		}, {
			id: 2,
			detail: 'income',
			source: "邀请好友",
			score: 6,
			date: "2018-08-09  16:32"

		}, {
			id: 3,
			detail: 'outlay',
			source: "签到",
			score: 2,
			date: "2018-08-09  16:32"

		}]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},
	switchCate: function (event) {
		if (this.data.id == event.currentTarget.dataset.id) {
			return false;
		}
		var that = this;
		this.setData({
			id: event.currentTarget.dataset.id,
			detail: event.currentTarget.dataset.detail
		});





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
