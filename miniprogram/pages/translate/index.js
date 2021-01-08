// miniprogram/pages/translate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice: '翻译结果不会经过审查将直接展示，请勿提交无关内容。感谢您的支持!',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我来翻译',
    });
    var dbname = options.db;
    var indexID = options.indexID;
    console.log(dbname, indexID);

    var app = getApp();
    var db = app.globalData.db;
    var that = this;
    db.collection(dbname).doc(indexID).get({
      success: function (res) {
        // res.data 包含该记录的数据
        console.log(res.data)
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

  }
})