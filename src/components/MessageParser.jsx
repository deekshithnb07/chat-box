import React from "react";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
  
  if (
    message.includes("talk") ||
    message.includes("speak") ||
    message.includes("real person") ||
    message.includes("call") ||
    message.includes("emergency") ||
    message.includes("contact")
  ) {
    return this.actionProvider.handleContact();
  }

  
  }
}
export default MessageParser;