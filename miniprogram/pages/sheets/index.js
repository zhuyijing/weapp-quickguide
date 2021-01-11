// miniprogram/pages/sheets/index.js
import {
  Base64
} from 'js-base64';
import {
  translate
} from '../../api/translate';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    db: '',
    owner: '皓月当空',
    ownerAvatar: '../../../../images/avatar.jpg',
    tips: [],

    // notice bar
    notice: '翻译结果来自谷歌，对专业名词的翻译可能不准确，仅供参考，以英文为准！'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options);
    var dbname = options.db;
    console.log(dbname);
    this.setData({
      db: dbname
    });
    var parentID = options.pid;
    wx.setNavigationBarTitle({
      title: options.title
    });

    var app = getApp();
    var db = app.globalData.db;
    var that = this;
    db.collection(dbname).where({
      type: 'tips',
      'parentID': parentID
    }).get({
      success: function (res) {
        console.log(res.data);
        var tmpData = res.data;
        // 解码加密的代码段
        for (var i = 0; i < tmpData.length; i++) {
          if (tmpData[i].hasOwnProperty('base64Encoded') && tmpData[i].base64Encoded == '1') {
            tmpData[i].codeText = Base64.decode(tmpData[i].codeText);
            console.log(tmpData[i].codeText);
          }
        }
        that.setData({
          tips: tmpData
        });
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
    console.log(event.detail);
    var index = event.detail.index;
    var desc = this.data.tips[index].desc;
    var that = this;
    translate(desc).then(res => {
      var trans = res.data.sentences[0].trans;
      console.log(trans);
      var newTips = that.data.tips;
      newTips[index].descCN = trans;
      that.setData({
        tips: newTips
      });
    }).catch(err => {
      console.log(err)
    });
  }
})