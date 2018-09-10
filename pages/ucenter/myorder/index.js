// pages/lesson/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		active: false,
		id: 1,
		ispayed: "null",
		show: true,
		course: [{
			id: 1,
			order_code: '79239402341235324',
			order_time: '2018-08-10 15:12',
			link: '/pages/lesson/index',
			images_url: '/assets/images/live1.png',
			title: '幼儿英语训练班',
			teacher: '黄铮',
			teacher_desc: '全脑教育金牌讲师',
			student_num: '152',
			lesson_num: '9',
			price: 48,
			tip: 'singleclass',
			live_time: '7/26  10:25',
			lasted_learn_time: '6',
			ispayed: "true",
			integral: 30
		}, {
			id: 2,
			order_code: '79239402341235324',
			order_time: '2018-08-10 15:12',
			link: '/pages/lesson/index',
			images_url: '/assets/images/live1.png',
			title: '幼儿英语训练班',
			teacher: '黄铮',
			teacher_desc: '全脑教育金牌讲师',
			student_num: '152',
			lesson_num: '9',
			price: 48,
			live_time: '7/26  10:25',
			tip: 'topic',
			lasted_learn_time: '6',
			ispayed: "true",
			integral: 30

		}, {
			id: 3,
			order_code: '79239402341235324',
			order_time: '2018-08-10 15:12',
			link: '/pages/lesson/index',
			images_url: '/assets/images/live1.png',
			title: '国学冲刺班',
			teacher: '黄铮',
			teacher_desc: '全脑教育金牌讲师',
			student_num: '152',
			lesson_num: '9',
			price: 48,
			tip: 'topic',
			live_time: '7/26  10:25',
			lasted_learn_time: '6',
			ispayed: "false",
			integral: 50

		}]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		if (this.data.course.length != 0) {
			this.setData({
				show: false
			})
		}
	},
	switchCate: function (event) {
		if (this.data.id == event.currentTarget.dataset.id) {
			return false;
		}
		var that = this;
		this.setData({
			id: event.currentTarget.dataset.id,
			ispayed: event.currentTarget.dataset.ispayed
		});
		var len = this.data.course.length;
		var num = null;
		if (event.currentTarget.dataset.ispayed == "null") {
			this.setData({
				show: false
			})
		} else {
			for (var i = 0; i < len; i++) {
				if (this.data.course[i].ispayed == event.currentTarget.dataset.ispayed)
					num++
			}
			if (num == null) {
				this.setData({
					show: true
				})
			} else {
				this.setData({
					show: false
				})
			}
		}


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
