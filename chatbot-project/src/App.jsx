import { useState} from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';

function App() {
          const [chatMessages, setChatMessages] = useState([]);
          //const [chatMessages, setChatMessages] = array; //array destructuring

          return (
            <div className="app-container">              
              <ChatMessages 
                chatMessages={chatMessages}
              />
              <ChatInput 
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
              />
            </div>
          );
        }

export default App
