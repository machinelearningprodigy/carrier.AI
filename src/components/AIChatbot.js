// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { user: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { user: 'user', text: input }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'bot', text: 'I am here to help with career guidance!' },
      ]);
    }, 1000);
  };

  return (
    <section className="chatbot">
      <h2>Career Chatbot</h2>
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
