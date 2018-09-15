// pages/ucenter/signin/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		days_array: [],
		signList: [1, 3],
		active: false,
		hidden: '',
		/**
		 * 年份
		 */
		year: {
			type: Number,
			value: new Date().getFullYear(),
			observer: '_yearChange'
		},

		/**
		 * 月份1~12
		 */
		month: {
			type: Number,
			value: new Date().getMonth() + 1,
			observer: '_monthChange'
		},

		/**
		 * 日期
		 */
		day: {
			type: Number,
			value: new Date().getDate(),
			observer: '_dayChange'
		},
		/**
		 * 日历范围起点
		 */
		startDate: {
			type: String,
			value: '1900-01',
			observer: '_setStartDate'
		},

		/**
		 * 日历范围终点
		 */
		endDate: {
			type: String,
			value: '2099-12',
			observer: '_setEndDate'
		},

		/**
		 * 是否显示标题
		 */
		header: {
			type: Boolean,
			value: true,
			observer: '_headerChange'
		},

		/**
		 * 是否显示下个月按钮
		 */
		next: {
			type: Boolean,
			value: true
		},

		/**
		 * 是否显示上个月按钮
		 */
		prev: {
			type: Boolean,
			value: true
		},

		/**
		 * 显示额外上下月份日期
		 */
		showMoreDays: {
			type: Boolean,
			value: false,
			observer: '_moreChange'
		},

		/**
		 * 是否显示周标题
		 */
		weeks: {
			type: Boolean,
			value: true,
			observer: '_showWeeksChange'
		},

		/**
		 * 周标题类型
		 */
		weeksType: {
			type: String,
			value: 'cn',
			weekTitle: ['日', '一', '二', '三', '四', '五', '六'],
			observer: '_weeksTypeChange'
		},

		/**
		 * 设置日期字体、背景颜色
		 */
		daysColor: {
			type: Array,
			value: [],
			observer: '_setDaysColor'
		},

		/**
		 * 单元格大小
		 */
		cellSize: {
			type: Number,
			value: 30,
			observer: '_setCellSize'
		},

		/**
		 * 设置日期背景效果
		 */
		activeType: {
			type: String,
			value: 'rounded',
			observer: '_setActiveType'
		}
	},
	setCalendarData: function (year, month) {
		const empty_days_count = new Date(year, month - 1, 1).getDay(); // 本月第一天是周几，0是星期日，6是星期六
		let empty_days = new Array;
		const prev_month = month - 1 == 0 ? 12 : month - 1; // 上个月的月份数
		const prev_year = month - 1 == 0 ? this.data.year - 1 : this.data.year;
		/**
		 * 上个月的日期
		 */
		for (let i = 0; i < empty_days_count; i++) {
			empty_days.push({
				state: 'inactive',
				day: -1,
				month: prev_month,
				year: prev_year,
				info: 'prev',
				color: '#c3c6d1',
				background: 'transparent'
			});
		}

		/**
		 * 下个月的日期
		 */
		const last_day = new Date(year, month, 0); // 本月最后一天
		const days_count = last_day.getDate(); // 本月最后一天是几号
		const last_date = last_day.getDay(); // 本月最后一天是星期几
		const next_month = month + 1 == 13 ? 1 : month + 1; // 下个月的月份数
		const next_year = month + 1 == 13 ? this.data.year + 1 : this.data.year;
		let empty_days_last = new Array;
		for (let i = 0; i < 6 - last_date; i++) {
			empty_days_last.push({
				state: 'inactive',
				day: -2,
				month: next_month,
				year: next_year,
				info: 'next',
				color: '#c3c6d1',
				background: 'transparent'
			});
		}


		/**
		 * 本月的日期
		 */
		console.log(last_day);
		let temp = new Array;
		for (let i = 1; i <= days_count; i++) {
			temp.push({
				state: 'inactive',
				day: i,
				month: month,
				year: year,
				info: 'current',
				color: '#4a4f74',
				background: 'transparent'
			});
			for (let j = 0; j <= this.data.signList.length; j++) {
				if (i == this.data.signList[j]) {
					temp.pop();
					temp.push({
						state: 'inactive',
						day: i,
						month: month,
						year: year,
						info: 'current',
						color: '#fff',
						background: '#fdb045'
					});
				}
			}

		}
		const days_range = temp;
		console.log(days_range); // 本月
		let days = empty_days.concat(days_range, empty_days_last); // 上个月 + 本月 + 下个月
		console.log(days);
		// 如果要显示前后月份的日期


		var days_array = new Array;
		let week = new Array;
		for (let i = 0; i < days.length; i++) {
			week.push(days[i]);
			if (i % 7 == 6) {
				days_array.push(week);
				week = new Array;
			}
		}

		if (week.length > 0) {
			days_array.push(week);
		}
		console.log(days_array);

		return days_array;
	},
	signIn: function () {
		this.setData({
			active: true
		});
		this.data.signList.push(Date.parse(new Date()) / 1000);
		console.log(this.data.signList);
	},
	hidden: function () {
		this.setData({
			hidden: "hidden"
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var thisyear = this.data.year.value;
		var thismonth = this.data.month.value;
		this.setData({
			days_array: this.setCalendarData(thisyear, thismonth)
		});
		console.log(this.data.day);

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
