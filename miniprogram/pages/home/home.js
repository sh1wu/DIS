// pages/home/home.js
const app = getApp()
const db = wx.cloud.database()
var userlatitude = ''
var userlongitude = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    statusBarHeight: app.globalData.statusBarHeight,
    list: '',
    swiperimg: [
      'https://dis-1301530190.cos.ap-nanjing.myqcloud.com/bgimg/bg3.jpg',
      'https://dis-1301530190.cos.ap-nanjing.myqcloud.com/bgimg%2Fbg5.png',
      'https://dis-1301530190.cos.ap-nanjing.myqcloud.com/bgimg/bg2.jpg',
    ],
    toastBtn: 0,
    index: 10,
    newsindex:10,
    news:{}


  },

  markertap(e) {
    console.log(e.markerId)

    wx.showActionSheet({
      itemList: ["查看更多"],
      success: function (res) {
        wx.navigateTo({
          url: '/pages/shelter/shelter',
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
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
    const index=this.data.newsindex+5
    this.setData({
      newsindex:index
    })
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function ({
    from,
    target
  }) {
    console.log(from, target)
    return {
      title: '灾害信息系统',
      path: '/pages/home/home',
      success: (res) => {
        alert: '分享成功'
      }
    }


  },
  navToQx() { //跳转至发布页面
    wx.navigateTo({
      url: '/pages/qixiang/qixiang',
    })
  },
  navToDizhen() {
    wx.navigateTo({
      url: '/pages/dizhen/dizhen',
    })
  },

  navToFangzai() {
    wx.navigateTo({
      url: '/pages/fangzai/fangzai',
    })
  },
  navToGuide() {
    wx.navigateTo({
      url: '/pages/guide/guide',
    })
  },
  navToBinan() {
    wx.navigateTo({
      url: '/pages/pf/pf',
    })
  },
  navToShelter() {
    wx.navigateTo({
      url: '/pages/shelter/shelter',
    })
  },
  more() {
    wx.navigateTo({
      url: '/pages/shelter/shelter',
    })
  },
  navSwiper1(e) {
    getApp().globalData.postid = 'fa24ce1a61894ea404fea8d547884327'
    var url = e.currentTarget.dataset.url
    console.log(getApp().globalData.postid)
    wx.navigateTo({
      url: url,
    })
  },
  navSwiper2(e) {
    getApp().globalData.postid = "18ed0968619324c90585a6997700064e"
    var url = e.currentTarget.dataset.url
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
  navSwiper3(e) {
    getApp().globalData.postid = "0448022461b490a701c1dbca33e942b5"
    var url = e.currentTarget.dataset.url
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
  navSwiper4(e) {
    var url = '/pages/editfile/editfile'
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
  navSwiper5(e) {
    getApp().globalData.link = "http://www.ndrcc.org.cn/hyzh/8013.jhtml"
    var url = '/pages/dzdzzh/dzdzzh'
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
  navSwiper6(e) {
    getApp().globalData.link = "http://www.ndrcc.org.cn/sthjzh/379.jhtml"
    var url = '/pages/dzdzzh/dzdzzh'
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
  navSwiper7(e) {
    getApp().globalData.link = "http://www.ndrcc.org.cn/swzh/24454.jhtml"
    var url = '/pages/dzdzzh/dzdzzh'
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },





})