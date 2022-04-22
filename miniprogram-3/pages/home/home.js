// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcArr:["../home/pic/book1.jpg",
    "../home/pic/book2.jpg",
    "../home/pic/book3jpg"],
    bool:true,
    Aplay: true,
    banners: [],
              menus: [
                { "src": "../home/pic/搜索--1.png", "name": "搜索" },
                { "src": "../home/pic/礼物.png", "name": "活动" },
                {"src":"../home/pic/社区.png","name":"社区"}
              ],
  lbtimage:[    //淡入淡出轮播图，遍历循环的图片数组
         {src:"../home/pic/1.jpg",num:0},
         {src:"../home/pic/2.jpg",num:1},
         {src:"../home/pic/3.jpg",num:0}
               ]

  },

 onReady: function () {
  
 //利用定时器调用函数，
  
 
  
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
  },


  // requestData: function () {
  //   var that = this;
  //   wx.request({
  //     url: 'http://www.baidu.com/app/getIndexInfo',
  //     success: function (res) {
  //       that.setData({
  //         banners: res.data.pictureList,
  //         'books[0].books': res.data.goodBookList,//注意加引号
  //         'books[1].books': res.data.hotBookList,
  //         'books[2].books': res.data.newBookList,
  //       });
  //     },

  //     fail: function (err) {
  //       console.log(err);
  //     }
  //   });
  // },
  // toDetail:function(event){
  //     var book = event.currentTarget.dataset.book;
  //     wx.navigateTo({
  //        url: 'pages/sousuo/sousuo.wxml',//+JSON.stringify(book),
  //     })
  // },
  toHotPush: function(event){
    var index=event.currentTarget.dataset.index;
    if (index==0){
      wx.reLaunch({
        url: '../sousuo/sousuo',
      })
  }else{
    wx.showToast({
      title: '暂无此功能!',
      duration: 1000,
        })
      }},

     
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