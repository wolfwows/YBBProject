// pages/ucenter/qrcode/index.js
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		topicList: []
		// topicList: [{
		// 	imgUrl: '/assets/images/topic1.png'
		// }, {
		// 	imgUrl: '/assets/images/topic1.png'
		// }, {
		// 	imgUrl: '/assets/images/topic1.png'
		// }, {
		// 	imgUrl: '/assets/images/topic1.png'
		// }]
	},
	getIndexData: function () {
		let that = this;
		util.request(api.TopicList).then(function (res) {
			if (res.errno !== 0) {
				that.setData({
					topicList: res.result,
					// liveLessons: res.data.liveLessonList,
					// recommendLessons: res.data.recommendLessonList,
				})
			}
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getIndexData();
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
