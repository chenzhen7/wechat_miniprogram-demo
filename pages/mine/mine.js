Page({
  data: {
    brand: '',
    model: '',
    system: '',
    screenWidth: '',
    screenHeight: ''
  },
  onLoad() {
    this.getPhoneInfo();
  },
  getPhoneInfo() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          brand: res.brand,
          model: res.model,
          system: res.system,
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight
        });
      }
    });
  }
});
