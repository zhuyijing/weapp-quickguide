async function translate(text) {
  var url = 'https://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=zh_CN&q=' + text;
  url = encodeURI(url);
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      success: function (res) {
        resolve(res);
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
}

export {
  translate
};