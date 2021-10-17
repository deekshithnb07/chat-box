import React from "react";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // options action
  handleOptions = () => {
    const message = this.createChatBotMessage(
      "here you go !",
      {
        widget: "flights",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  // contact action
  handleContact = () => {
    const message = this.createChatBotMessage(
      "Call 1999 for Any Issues.",
      {
        widget: "contact",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  // price action
  handlePrice = () =>{
    const message = this.createChatBotMessage(
      "click on the button to get price",
      {
        widget: "link",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );
    this.addMessageToState(message);
  }

  // available action
  handleAvailable = () =>{
    const message = this.createChatBotMessage(
      "click on the button to check available flights",
      {
        widget: "link",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );
    this.addMessageToState(message);
  }

  // thanks action
  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, ware mask and stay safe!");

    this.addMessageToState(message);
  };

  // handling message to set state
  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
