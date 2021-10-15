import { createChatBotMessage } from 'react-chatbot-kit';
import ContactLink from '../contact';
import Flights from './flights';

const botName = "sky-bot"

const config = {
  initialMessages: [createChatBotMessage(`Hello I'm ${botName}`),
  createChatBotMessage(`how can I help you`),
  {
    withAvatar: false,
    delay: 500,
  }
],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  state: {},
  customComponents: { botAvatar: (props) => <i className="fas fa-robot" {...props} /> },
  widgets: [
    {
      widgetName: "flight",
      widgetFunc: (props) => <Flights {...props} />,
    },
    {
      widgetName: "contacts",
      widgetFunc: (props) => <ContactLink />,
    },
  ]
};

export default config;