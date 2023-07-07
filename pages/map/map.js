// index.js
Page({
  data: {
    cameraContext: null,
    photoUrl: null
  },
  onLoad: function() {
    const cameraContext = wx.createCameraContext();
    this.setData({
      cameraContext: cameraContext
    });
  },
  takePhoto: function() {
    const cameraContext = this.data.cameraContext;
    cameraContext.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          photoUrl: res.tempImagePath
        });
      },
      fail: (err) => {
        console.error(err);
      }
    });
  },
  previewPhoto: function() {
    const photoUrl = this.data.photoUrl;
    if (photoUrl) {
      wx.previewImage({
        urls: [photoUrl]
      });
    }
  }
});
