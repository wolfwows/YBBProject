// pages/lesson/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		active: false,
		course: [{
			id: 0,
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
			lasted_learn_time: '6'
		}, {
			id: 0,
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
			lasted_learn_time: '6'

		}, {
			id: 0,
			link: '/pages/lesson/index',
			images_url: '/assets/images/live1.png',
			title: '幼儿英语训练班',
			teacher: '黄铮',
			teacher_desc: '全脑教育金牌讲师',
			student_num: '152',
			lesson_num: '9',
			price: 48,
			tip: 'topic',
			live_time: '7/26  10:25',
			lasted_learn_time: '6'

		}]
	},
	paiedLesson: function () {
		var that = this;
		var active = this.data.active;
		if (active) {
			return;
		} else {

			this.setData({
				active: !this.data.active
			})
		}
	},
	studyLesson: function () {
		var that = this;
		var active = this.data.active;
		if (!active) {
			return;
		} else {
			this.setData({
				active: !this.data.active
			})
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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
