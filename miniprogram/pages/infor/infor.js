/**
 * FundCharts
 * 折线图LineCharts
 */

const FundCharts = require('../../FundCharts.min.js'); // 注意拷FundCharts.min.js
const FundChartsToolTips = require('../../FundCharts-tooltips.js'); // 注意拷FundCharts-tooltips.js

const {
  BasicToolTip,
  ArrowToolTip
} = FundChartsToolTips;

const LineChart = FundCharts.line;

let line1 = null,
  line2 = null,
  line3 = null;

Page({
  data: {
    // line 1 values
    line1Time: '--',
    line1Sy: '--',

    // line 2 values
    line2Time1: '--',
    line2Sy1: '--',
    line2Time2: '--',
    line2Sy2: '--',
    line2Time3: '--',
    line2Sy3: '--',
    xaxis: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    data: [4, 3, 4, 2, 1, 2, 3, 4, 5, 3, 4],
    dzyears: ['2019', '2020', '2021', '2022'],
    dztimes: ['1', '4', '2', '7'],
    disaster: [
      '地震灾害',
      '气象灾害',
      '洪涝灾害',
      '污染灾害'
    ],
    charts: [
      '折线图',
      '饼状图',
      '雷达图'
    ],
    years: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    placeholder: '选择数据',
    placeholder4: '选择图表',
    placeholder1: '四川',
    placeholder11: '贵州',
    provinces: ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆"],
    placeholder2: '2013',
    placeholder3: '2023',
    addIcon: '+',
    hideMorePro: true,
    province1index: '',
    province2index: '',
    time1index: '',
    time2index: '',

  },

  onReady() {
    this.drawLine()
  },
  change: function () {
    this.setData({
      xaxis: ['2019', '2020', '2021', '2022'],
      data: ['1', '4', '2', '7']
    })
    this.drawLine()

  },
  disasterChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      disasterindex: e.detail.value,
      placeholder: ''
    })
  },

  chartChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      chartsindex: e.detail.value,
      placeholder4: ''
    })
  },
  province1Change: function (e) {

    this.setData({
      province1index: e.detail.value,
      placeholder1: ''
    })
    if (this.data.province1index == this.data.province2index) {
      console.log('省份选择不可重复，携带值为', e.detail.value)
      wx.showToast({
        title: '省份选择不可重复',
        icon: "error"
      })
      this.setData({
        province1index:'22',
        placeholder1: ''
      })
    } else {
      this.setData({
        province1index: e.detail.value,
        placeholder1: ''
      })
      console.log('省份选择成功，携带值为', e.detail.value)
    }
  },
  province2Change: function (e) {
    this.setData({
      province2index: e.detail.value,
      placeholder11: ''
    })
    if (this.data.province1index == this.data.province2index) {
      console.log('省份选择不可重复，携带值为', e.detail.value)
      wx.showToast({
        title: '省份选择不可重复',
        icon: 'error'
      })
      this.setData({
        province2index: '23',
        placeholder11: ''
      })
    } else {
      this.setData({
        province2index: e.detail.value,
        placeholder11: ''
      })
      console.log('省份选择成功，携带值为', e.detail.value)
    }
  },
  time1Change: function (e) {

    this.setData({
      time1index: e.detail.value,
      placeholder2: ''
    })
    if (this.data.time1index <= this.data.time2index) {
      this.setData({
        time1index: '0',
        placeholder2: ''
      })
      wx.showToast({
        title: '时间选择有误，请重新选择',
        icon: 'error'
      })

      console.log('时间选择有误，携带值为', e.detail.value)
    } else {
      this.setData({
        time1index: e.detail.value,
        placeholder2: ''
      })

      console.log('时间选择成功，携带值为', e.detail.value)
    }

  },
  time2Change: function (e) {

    this.setData({
      time2index: e.detail.value,
      placeholder3: ''
    })
    if (this.data.time2index == 0 || this.data.time1index <= this.data.time2index) {
      if (this.data.time2index == 0) {
        this.setData({
          time2index: "10",
          placeholder3: ''
        })
      } else {
        this.setData({
          time2index: '',
          placeholder3: ''
        })
      }
      wx.showToast({
        title: '时间选择有误，请重新选择',
        icon: 'error'
      })

      console.log('时间选择有误，携带值为', e.detail.value)
    } else {
      this.setData({
        time2index: e.detail.value,
        placeholder3: ''
      })

      console.log('时间选择成功，携带值为', e.detail.value)
    }

  },
  addProvince: function () {
    if (this.data.hideMorePro) {
      this.setData({
        hideMorePro: false,
        addIcon: '-'
      })
    } else {
      this.setData({
        hideMorePro: true,
        addIcon: '+'
      })
    }

  },
  /**
   * 画折线图、面积图
   */
  drawLine() {

    // line chart 5
    let line5 = new LineChart({
      id: 'chartline5',
      width: 375,
      height: 212,
      chartTop: 1,
      xaxis: this.data.xaxis,
      data: this.data.data,

      grid: {
        showGrid: true,
        color: '#aaa',
        xTickLength: 11
      },
      handleTextX: (ctx, xArr) => { // 处理x轴文字
        // 增加x轴刻度
        let _chartWidth = line5._chart.width - line5.opts.chartLeft - line5.opts.chartRight;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '10px Arial';
        ctx.fillStyle = '#333';

        for (let i in xArr) {
          ctx.fillText(xArr[i], (_chartWidth / (xArr.length - 1) * i) + line5.opts.chartLeft, line5._chart.height - 10);
        }
      },

      onAnimation(process) {
        let ctx = line5.ctx,
          chartLeft = line5.opts.chartLeft,
          datasets = line5.datasets[0];

        ctx.save()
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#fff';
        ctx.fillStyle = '#ffa61b';

        datasets.map(data => {
          ctx.beginPath();
          ctx.arc(data.x, data.y, 4 * process, 0, Math.PI * 2, true);
          ctx.closePath();

          ctx.fill();

          ctx.stroke();
          ctx.font = 13 * process + 'px Arial';
          ctx.textAlign = 'center';
          let x = data.x - 10 < chartLeft ? chartLeft + 10 : data.x;
          ctx.fillText(data.value, x, data.y - 10);
        });

        ctx.restore();
      }
    });
    line5.init();
  },


});