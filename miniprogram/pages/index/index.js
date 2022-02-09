// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nickName: '', // 昵称
        avataUrl: '', // 打开url
        isCanDraw: false // 是否绘制
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            nickName: wx.getStorageSync('nickName') || '',
            avataUrl: wx.getStorageSync('avataUrl') || ''
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
    getUserInfo(e) {
        this.setData({
            nickName: e.detail.userInfo.nickName,
            avataUrl: e.detail.userInfo.avataUrl
        })
        wx.setStorageSync('nickName', e.detail.userInfo.nickName)
        wx.setStorageSync('avataUrl', e.detail.userInfo.avataUrl)
    },
    createShareImage() {
        this.setData({
            isCanDraw: !this.data.isCanDraw
        })
    },
    /**
     * 点击时间处理函数
     */
    onTap(e) {
        console.log(e.target)
    }
})