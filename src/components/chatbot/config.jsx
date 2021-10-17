import { createChatBotMessage } from 'react-chatbot-kit';
import ContactLink from './contact';
import Flights from './flights';
import Link from './link';

const botName = "sky-bot"

const config = {
  initialMessages: [createChatBotMessage(`Hello I'm ${botName}`),
  createChatBotMessage(`how may I help you`,
  {
    withAvatar: false,
    delay: 500,
    widget: "flights"
  })
  ],  
  state: {},
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  
  customComponents: { botAvatar: (props) => <i className="fas fa-robot" /> },
  
  widgets: [
    {
      widgetName: "flights",
      widgetFunc: (props) => <Flights {...props} />,
      
    },
    {
      widgetName: "contacts",
      widgetFunc: (props) => <ContactLink />,
    },
    {
      widgetName: "link",
      widgetFunc: (props) => <Link />,
    },
  ]
};

export default config;