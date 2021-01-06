// components/cheatcard/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dbName: {
      type: String,
      value: '',
    },
    indexID: {
      type: String,
      value: '',
    },
    desc: {
      type: String,
      value: 'what?',
    },
    descCN: {
      type: String,
      value: '',
    },
    codeText: {
      type: String,
      value: 'set -x',
    },
    source: {
      type: String,
      value: '0',
    },
    avatar: {
      type: String,
      value: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    contributor: {
      type: String,
      value: '皓月当空',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function () {
      console.log(this.properties.indexID);
      console.log(this.properties.dbName);
      var myEventDetail = {
        db: this.properties.dbName,
        indexID: this.properties.indexID
      };
      this.triggerEvent('doTranslate', myEventDetail);
    },

    tapcopy: function () {
      wx.setClipboardData({
        data: this.properties.codeText,
      })
    },
  }
})