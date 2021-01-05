// miniprogram/pages/sheets/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    db: '',
    owner: '皓月当空',
    // ownerAvatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
    ownerAvatar: '../../../../images/avatar.jpg',
    tips: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options);
    var dbname = options.db;
    console.log(dbname);
    this.setData({db: dbname});
    var parentID = options.pid;
    wx.setNavigationBarTitle({title: options.title});

    var app = getApp();
    var db = app.globalData.db;
    var that = this;
    db.collection(dbname).where({
      type: 'tips',
      'parentID': parentID
    }).get({
      success: function (res) {
        console.log(res.data);
        that.setData({tips: res.data});
      }
    });
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

  // 用户自定义
  onDoTranslate: function (event) {
    console.log("let me do it");
    console.log(event.detail);
  }
})