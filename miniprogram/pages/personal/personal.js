// pages/personal/personal.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    openid:'',
    username:'',
    imgSrc:''
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
    this.setData({
      username:app.globalData.username,
      imgSrc:app.globalData.profile
    })
    console.log(this.data.imgSrc)
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
  
  navigateToLogin:function(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  navigateToRegister:function(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  navigateToFeedback:function(){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  },
  navigateToComment:function(){
    wx.navigateTo({
      url: '/pages/comment/comment',
    })
  },
  navigateToGuanzhu:function(){
    wx.navigateTo({
      url: '/pages/guanzhu/guanzhu',
    })
  },
  navigateToPFile:function(){
    wx.navigateTo({
      url: '/pages/editfile/editfile',
    })
  },
  navigateToRank:function(){
    wx.navigateTo({
      url: '/pages/rank/rank',
    })
  },
  navigateToAboutus:function(){
    wx.navigateTo({
      url: '/pages/aboutus/aboutus',
    })
  },
  navigateToPolicy:function(){
    wx.navigateTo({
      url: '/pages/policy/policy',
    })
  }
})