//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		banner: [{
			id: 0,
			link: '/pages/lesson/index',
			image_url: '/assets/images/banner1.jpg'
		}, {
			id: 1,
			link: '/pages/lesson/index',
			image_url: '/assets/images/banner2.jpg'
		}, {
			id: 2,
			link: '/pages/lesson/index',
			image_url: '/assets/images/banner3.jpg'
		}],
		channel: [{
			id: 0,
			link: '/pages/lesson/index',
			icon_url: '/assets/images/channel1.png',
			name: '专题'
			}, {
			id: 1,
			link: '/pages/lesson/index',
			icon_url: '/assets/images/channel2.png',
			name: '分类'
			}, {
			id: 2,
			link: '/pages/lesson/index',
			icon_url: '/assets/images/channel3.png',
			name: '会员'
		}],
		live: [{
			id: 0,
			link: '/pages/lesson/index',
			images_url: '/assets/images/live1.png',
			title: '幼儿英语训练班',
			teacher: '黄铮',
			teacher_desc: '全脑教育金牌讲师',
			student_num: '152',
			lesson_num: '9',
			price: 48,
			live_time: '7/26  10:25'
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
			live_time: '7/26  10:25'
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
			live_time: '7/26  10:25'
		}],
		lesson: [{
			id: 0,
			link: '/pages/lesson/index',
			images_url: '/assets/images/lesson1.png',
			title: '幼儿英语训练班',
			price: 48,
			teacher: '黄铮',
			viewer: '152'
		}, {
			id: 0,
			link: '/pages/lesson/index',
			images_url: '/assets/images/lesson2.png',
			title: '课外互动班',
			price: null,
			teacher: '黄铮',
			viewer: '152'
		}, {
			id: 0,
			link: '/pages/lesson/index',
			images_url: '/assets/images/lesson3.png',
			title: '国学冲刺班',
			price: 48,
			teacher: '黄铮',
			viewer: '152'
		}, {
			id: 0,
			link: '/pages/lesson/index',
			images_url: '/assets/images/lesson4.png',
			title: '奥数强化班',
			price: null,
			teacher: '黄铮',
			viewer: '152'
		}]
	},
	//事件处理函数

	onLoad: function () {

	},

})
