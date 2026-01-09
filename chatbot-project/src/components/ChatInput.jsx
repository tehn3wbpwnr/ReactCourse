import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
          const [inputText, setInputText] = useState('');
          const [isLoading, setIsLoading] = useState(false);

          function saveInputText(event) {
            setInputText(event.target.value);
          }

          async function sendMessage(event) {
            if (event.type === 'keydown' && event.key !== 'Enter'){
              return;
            }
            if (isLoading || inputText === '') return;

            setIsLoading(true);
            const newChatMessages = [
              ...chatMessages,
              {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              }
            ]

            setChatMessages(newChatMessages);
            setInputText('');
            const response = await Chatbot.getResponseAsync(inputText);
            setChatMessages([
              ...newChatMessages,
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ]);

            setIsLoading(false);
          }

          return (
            <div className="chat-input-container">
              <input 
                placeholder="Send a message to Chatbot" 
                size="30"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={sendMessage}
                className="chat-input"
              />
              <button 
                onClick={sendMessage}
                className="send-button"
              >Send</button>
              </div>
          );
        }