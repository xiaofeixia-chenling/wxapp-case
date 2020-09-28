//app.js
App({
  onLaunch: function () {
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response)=>{
        Object.assign(this.globalData, response.data)
        //判断页面在异步获取数据之前就调用了还是之后调用,在获取数据后调用正常显示没问题,如果在获得数据之前页面就已经调用,要手动调用一下当前页面的onLoad()
        const currentPages = getCurrentPages()
        if(currentPages.length !== 0){
          currentPages[currentPages.length - 1].onLoad()
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})