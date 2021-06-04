import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css"

import ActionProvider from "./components/bot/ActionProvider";
import MessageParser from "./components/bot/MessageParser";
import config from "./components/bot/config";

export default function App() {
  return (
    <div className="App">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
    </div>
  );
}
