import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

export default ChatBox

function ChatBox(){
  const [open, setOpen] = useState(false);

    function handleChat(e){
      setOpen(!open);
      console.log(open);
    }

    return(
    <div className="chat-box">

      <i className="fas fa-robot" onClick={handleChat} id="btn" />
      {open === true ? 
      <div className="chatbot" >
       <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
      className="chat"
      /> 
      </div>
      
      : null}
      
    </div>
    );
}