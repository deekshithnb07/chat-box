import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPic';

const botName = 'Sky-Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hello I'm  ${botName}`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;