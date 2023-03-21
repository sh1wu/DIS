// pages/login/login.js
var app = getApp()
const db = wx.cloud.database()
const _ = db.command;
//自定义变量，存储用户输入的账号
let account = ''
//自定义手机号存储
let phoneNumber = ''
//自定义变量，存储用户输入的密码
let password = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    phone_number: "",
    login_password: "",
    error:''
  },


  //获取用户输入的账号、密码
  getAccount(e) {
    // console.log("用户输入的账号",e.detail.value);
    account = e.detail.value
  },
  getPhoneNumber(e) {
    // console.log("用户输入的账号",e.detail.value);
    phoneNumber = e.detail.value
  },
  getPassword(e) {
    // console.log("用户输入的密码",e.detail.value);
    password = e.detail.value
  },
  //点击跳转到注册页
  toSign() {
    var data = {
      account: account,
      phoneNumer: phoneNumber,
      password: password
    }
    //校验账号
    if (account.length < 4) {
      wx.showToast({
        title: '账号至少4位',
        icon: "none"
      })
      return
    }
    //检查账号是否重复
    db.collection('eas-user').where({
      account: account
    }).get({
      success: res => {
        wx.showToast({
          title: '账号已被注册',
          icon:"error"
        })
        const error=1
      },
    })
     let error=error
    if(error==1){
      return
    }
    //校验密码长度
    if (password.length < 6) {
      wx.showToast({
        title: '密码至少6位',
        icon: "none"
      })
      return
    }
    //校验密码长度
    if (phoneNumber.length < 11) {
      wx.showToast({
        title: '手机号输入不正确',
        icon: "none"
      })
      return
    }
    db.collection('eas-user').add({
      data: data,
      success: res => {
        wx.showToast({
          title: '注册成功',
        })
        setTimeout(() => {

          wx.switchTab({
            url: '../setting/setting',
          })
        }, 1000)
      },
      fail: e => {
        wx.showToast({
          title: '注册失败',
        })
        console.log(e)
      }

    })
  },

  //登录功能
  loadByAccount() {
    var data = {
      account: account,
      phoneNumer: phoneNumber,
      password: password
    }
    //校验账号
    if (account.length < 4) {
      wx.showToast({
        title: '账号至少4位',
        icon: "none"
      })
      return
    }

    //登录功能的实现
    db.collection("eas-user")
      .where({
        account: account
      })
      .get({})
      .then(res => {
        console.log("获取账号成功", res);
        getApp().globalData.userid=res.data[0]._id
        getApp().globalData.usergender=res.data[0].gender
        getApp().globalData.username=res.data[0].username
        getApp().globalData.profile=res.data[0].profile
        getApp().globalData.check=res.data[0].check
        getApp().globalData.userbirth=res.data[0].userbirth
        const id=getApp().globalData.userid
        console.log(id)
        //校验密码长度
        if (password.length < 6) {
          wx.showToast({
            title: '密码至少6位',
            icon: "none"
          })
          return
        }
        //校验密码是否等于数据库中的密码
        if (password == res.data[0].password) {
          console.log("登录成功", res);
          getApp().globalData.username = account
          wx.setStorageSync("judgelogin", account)
          //显示登录成功提示
          wx.showToast({
            title: '登录成功',
            icon: "success",
            duration: 2000,
            //提示2秒后自动跳转到首页
            success: function () {
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1,
                })
              }, 2000)
            }
          })
        } else {
          console.log("密码不正确，登录失败");
          wx.showToast({
            title: '密码不正确',
            icon: "none"
          })
        }
      })
      .catch(err => {
        console.log("获取账号失败", err);
        wx.showToast({
          title: '账号不存在',
          icon: "none"
        })
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toRegister:function(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  navigateBack:function(){
    wx.navigateBack({
      delta: 1,
    })
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
  //输入用户名
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  //输入手机号
  phone_number: function (e) {
    // console.log("==H==",res)
    this.setData({
      phone_number: e.detail.value
    })
    this.setData({
      count: e.detail.value
    })
    // console.log("==phone==",this.data.phone_number)
  },

  //输入密码
  register_password: function (e) {
    // console.log("password==",res)
    this.setData({
      register_password: e.detail.value
    })
    // console.log("password",this.data.login_password)
  },
  //上传信息至云数据库
  //注册账号
  register_submit: function (e) {
    var data = {
      id: Number(this.data.count) + 1,
      phone_numer: this.data.phone_number,
      register_password: this.data.register_password

    }
    if (data.register_password) {
      db.collection('eas-user').add({
        data: data,
        success: res => {
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          })
          setTimeout(() => {

            wx.switchTab({
              url: '../setting/setting',
            })
          }, 1000)
          wx.switchTab({
            url: '../setting/setting',
          })
        },
        fail: e => {
          wx.showToast({
            title: '登录错误',
            icon: 'error'
          })
          console.log(e)
        }
      })
    }
    if (this.data.userName.length == 0 || this.data.register_password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空！',
        icon: 'none'
      })
    }
  },

  login_submit: function () {
    let vm = this
    var data = {
      id: Number(this.data.count) + 1,
      phone_numer: this.data.phone_number,
      register_password: this.data.register_password

    }
    if (this.data.userName.length != 0 && this.data.register_password.length != 0) {
      vm.match()
    }
  },
  match: function () {

  }

})
// const db=wx.cloud.database().collection('eas_user')//初始化数据库