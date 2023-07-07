Page({
  data: {
    messages: [],
    inputValue: ''
  },
  handleInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  sendMessage() {
    const inputText = this.data.inputValue.trim();
    if (inputText) {
      const newMessage = { type: 'user', text: inputText };
      this.setData({
        messages: [...this.data.messages, newMessage],
        inputValue: ''
      });
      // 调用后台接口或处理逻辑来获取 ChatGPT 的回复
      this.getChatGPTResponse(inputText);
    }
  },
  getChatGPTResponse(inputText) {
    const response = 'ChatGPT 的回复T 的回复T 的回复T 的回复T 的回复T 的回复T 的回复T 的回复T 的回复T 的回复';
    const newMessage = { type: 'response', text: '...' }; // 初始时将回复的文字设为空
  
    this.setData({
      messages: [...this.data.messages, newMessage]
    });
  
    let index = 0;
    const timer = setInterval(() => {
      newMessage.text += response[index]; // 逐渐添加文字
      this.setData({
        messages: [...this.data.messages]
      });
      index++;
  
      if (index === response.length) {
        clearInterval(timer); // 文字添加完毕后清除定时器
      }
    }, 100); // 控制文字逐渐显示的速度
  }
  
});
