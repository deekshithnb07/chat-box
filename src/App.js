import React from "react";
import ChatBox from "./components/chatbot/ChatBox";
import "./App.css";
import Home from "./components/page/home";
export default App;

function App(){
    return(
        <React.Fragment >
        <div className="App">
            <ChatBox />
            <Home />
        </div>
        </React.Fragment>
    )
}