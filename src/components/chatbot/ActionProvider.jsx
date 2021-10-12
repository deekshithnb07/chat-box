class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    handleDog() {
        const message = this.createChatbotMessage(
          "Here's a nice dog picture for you!",
          {
            widget: 'dogPicture',
          }
        );
    
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
  }
  
  export default ActionProvider;