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
    markers: [{
      id: 1,
      latitude: 30.653442,
      longitude: 104.065681,
      width: 50,
      height: 50,
      iconPath: "cloud://xly-qcqcr.786c-xly-qcqcr-1301530190/eas-image/location.png",
      title: "成都市天府广场"
    },
    {
      id: 2,
      latitude: 30.632293,
      longitude: 104.078448,
      width: 50,
      height: 50,
      iconPath: "cloud://xly-qcqcr.786c-xly-qcqcr-1301530190/eas-image/location.png",
      title: "四川大学望江校区"
    },
    {
      id: 3,
      latitude: 30.640482,
      longitude:104.130484,
      width: 50,
      height: 50,
      iconPath: "cloud://xly-qcqcr.786c-xly-qcqcr-1301530190/eas-image/location.png",
      title: "塔子山公园"
    },
    {
      id: 4,
      latitude: 30.70916,
      longitude:104.029881,
      width: 50,
      height: 50,
      iconPath: "cloud://xly-qcqcr.786c-xly-qcqcr-1301530190/eas-image/location.png",
      title: "金牛公园"
    },
    {
      id: 4,
      latitude: 30.711132,
      longitude:104.069873,
      width: 50,
      height: 50,
      iconPath: "cloud://xly-qcqcr.786c-xly-qcqcr-1301530190/eas-image/location.png",
      title: "应急避难所1"
    },
    
  ],

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
    const cont=db.collection('eas-shelter')
    cont.get({
      success:res=>{
        this.setData({
          list:res.data,
          
        })
        console.log(this.data.list[1].locate.latitude)
        for(var i=0;i<=this.data.list.length;i++){
          this.setData({
            markers: this.data.markers+[{
              id: i+2,
              latitude: this.data.list[i].locate.latitude,
              longitude: this.data.list[i].locate.longitude,
              width: 50,
              height: 50,
              iconPath: "cloud://xly-qcqcr.786c-xly-qcqcr-1301530190/eas-image/location.png",
              title: this.data.list[i].sheltername
            }
          ],
          })
          // var log=this.data.markers
          // console.log(log)
        }
        // console.log(1,this.data.markers)
      }
    })
    console.log(1)
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

  },
  navToQx() { //跳转至发布页面
    if (1) {
      wx.navigateTo({
        url: '/pages/covid/covid',
      })
    }
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
  navToJiuyuan() {
    wx.navigateTo({
      url: '/pages/phone/phone',
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





})