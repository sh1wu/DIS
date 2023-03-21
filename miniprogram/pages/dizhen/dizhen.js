// pages/dizhen/dizhen.js
const app = getApp()



Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgcolor1: 'white',
    bgcolor2: '',
    hidden1: 0,
    hidden2: 1,
    showmore: 1,
    date1: '2013-01-01',
    date2: '2023-03-10',
    magnitude1: '3',
    magnitude2: '10',
    longitude1: '-180.0',
    longitude2: '180.0',
    latitude1: '-90.0',
    latitude2: '90.0',
    depth1: '0',
    depth2: '1000',
    region: ['全部', '', ''],
    customItem: '全部',
    dzInfoHidden: 1,
    epicenter: [],



  },

  list1: function () {
    this.setData({
      bgcolor1: "white",
      bgcolor2: '',
      hidden1: 0,
      hidden2: 1
    })
  },
  list2: function () {
    this.setData({
      bgcolor2: "white",
      bgcolor1: '',
      hidden1: 1,
      hidden2: 0,
    })
  },

  showMore: function () {
    if (this.data.showmore) {
      this.setData({
        showmore: 0
      })
      console.log("显示更多")
    } else {
      this.setData({
        showmore: 1
      })
      console.log("收起")

    }
  },
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  magnitudeInput1: function (e) {
    this.setData({
      magnitude1: e.detail.value
    })
  },
  magnitudeInput2: function (e) {
    this.setData({
      magnitude2: e.detail.value
    })
  },
  longitudeInput1: function (e) {
    this.setData({
      longitude1: e.detail.value
    })
  },
  longitudeInput2: function (e) {
    this.setData({
      longitude2: e.detail.value
    })
  },
  latitudeInput1: function (e) {
    this.setData({
      longitude1: e.detail.value
    })
  },
  latitudeInput2: function (e) {
    this.setData({
      longitude2: e.detail.value
    })
  },
  depthInput1: function (e) {
    this.setData({
      depth1: e.detail.value
    })
  },
  depthInput2: function (e) {
    this.setData({
      depth2: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  submit: function () {
    wx.request({
      url: 'https://service-jzd0rg8b-1301530190.sh.apigw.tencentcs.com/test/OperateMySQL',
      success: res => {
        this.setData({
          dzinfo: res.data,
          dzInfoHidden: 0,
          epicenter: res.data.epicenter
        })
        app.globalData.dzinfo = res.data //将返回的地震数据设为全局变量
        console.log("成功")
        console.log(res.data.length)
      },
      fail: res => {
        console.log("Fail")
        console.log(res)
      }
    })



  },
  moreInfo: function (e) {
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/dzinfo/dzinfo?index=' + index,
    })
    console.log('index', index)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},


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