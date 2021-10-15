import React from "react";

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

 
    handleContact = () => {
      const message = this.createChatbotMessage(
        "Call 1999 for Trilingual Health Assistance.",
        {
          widget: "emergencyContact",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      this.addMessageToState(message);
    };
  
}

export default ActionProvider;