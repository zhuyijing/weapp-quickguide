// miniprogram/pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'home',
    slides: [
      {
        src: "../../images/kubernetes.png"
      },
      {
        src: "../../images/Logo-Docker.jpg"
      },
      {
        src: "../../images/git.jpg"
      }
    ],
    projects: [
      {
        name: 'Kubernetes',
        db: 'kubernetes',
        icon: 'icon-kubernetes',
        path: '/pages/catalog/index'
      },
      {
        name: 'Docker',
        db: 'docker',
        icon: 'icon-docker',
        path: ''
      },
      {
        name: 'Git',
        db: 'git',
        icon: 'icon-git1',
        path: ''
      },
      {
        name: 'Markdown',
        db: 'markdown',
        icon: 'icon-markdown',
        path: ''
      },
      {
        name: 'Bash',
        db: 'bash',
        icon: 'icon-shell',
        path: ''
      },
      {
        name: 'Helm',
        db: 'mac',
        icon: 'icon-helm1',
        path: ''
      }
    ]
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

  /**
   * 
   * 用户自定义事件 
   */
  onChange: function (event) {
    this.setData({active: event.detail});
  }
})