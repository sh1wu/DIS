const app = getApp()

Page({


  data: {
    longitude: '',
    latitude: '',
    longitude1: '',
    latitude1: '',
    magnitude: '',
    epicenter: '',
    date: '',
    index: '',
    circles: [{
      latitude: '',
      longitude: '',
      fillColor: "#999999", //填充颜色
      color: "#0016ca", //描边的颜色
      radius: 20, //半径
      strokeWidth: 2 //描边的宽度
    }],
    markers: [{
      id: 1,
      latitude: '',
      longitude: '',
      width: '50',
      height: '50',
      iconPath: "../../images/redPoint.png",
      title: "哪里"
    }]

  },
  /**
   * 生命周期函数--监听页面加载
   */
  back: function () {
    wx.navigateBack({

    })

  },

  locate: function () {
    var longitude1 = this.data.longitude1
    var latitude1 = this.data.latitude1
    let MapContext = wx.createMapContext('Map', this)
    MapContext.moveToLocation({
      longitude: longitude1,
      latitude: latitude1,
      success:()=>{
        console.log('移动成功')
      }
    })
    console.log(this.data.longitude1)
  },

  onLoad: function (options) {
    var index = options.index
    var dzinfo = app.globalData.dzinfo[index]
    this.setData({
      longitude: dzinfo.longitude,
      latitude: dzinfo.latitude,
      longitude1: dzinfo.longitude,
      latitude1: dzinfo.latitude,
      epicenter: dzinfo.epicenter,
      magnitude: dzinfo.magnitude,
      date: dzinfo.date,
      circles: [{
        latitude: dzinfo.latitude,
        longitude: dzinfo.longitude,
        fillColor: "#F3D7CC9A", //填充颜色
        color: "#F3D7CC", //描边的颜色
        radius: 5000, //半径
        strokeWidth: 1, //描边的宽度
      }],

      markers: [{
        id: 1,
        longitude: dzinfo.longitude,
        latitude: dzinfo.latitude,
        width: 30,
        height: 30,
        iconPath: "../../images/redPoint.png",
        title: "哪里"

      }]
    })



  },

  onShow: function () {
    // 页面显示

  },
  onUnload: function () {

  }


})