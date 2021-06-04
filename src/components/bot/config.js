import { createChatBotMessage } from "react-chatbot-kit";

const botName = "MoneyBot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#87af72",
    },
    chatButton: {
      backgroundColor: "#6a805c",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Olá eu sou o ${botName}. Como posso te ajudar?`
    ),
  ],
};

export default config;
