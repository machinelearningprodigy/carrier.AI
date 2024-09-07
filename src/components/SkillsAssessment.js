import React, { useState, useEffect, useRef } from 'react';
import { generateContent } from '../api/geminiApi';
import ReactMarkdown from 'react-markdown';

const SkillsAssessment = ({ isDarkMode }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const prompt = `Based on the ongoing conversation about skills assessment, respond to this: ${input}. If this is the first message, start by asking about their primary skills and experience level. Keep the conversation going by asking follow-up questions to gather more information about their skills, projects, and career goals. After gathering sufficient information, provide a job role suggestion with a brief explanation. Format your response in Markdown.`;
      const { result } = await generateContent(prompt);
      const aiMessage = { type: 'ai', content: result };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error in AI response:', error);
      const errorMessage = { type: 'ai', content: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className={`skills-assessment ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Skills Assessment </h1>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className="message-content">
              <span className="message-sender">{message.type === 'user' ? 'Me' : 'Assesser'}</span>
              {message.type === 'ai' ? (
                <ReactMarkdown>{message.content}</ReactMarkdown>
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage}>
        <div className="input-container">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={isLoading}
            rows={1}
          />
          <button type="submit" disabled={isLoading} className="send-button">
            {isLoading ? 'Assessing...' : 'Send'}
          </button>
        </div>
      </form>
      <style jsx>{`
        .skills-assessment {
          max-width: 100%;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          // border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .skills-assessment.dark-mode {
          background: linear-gradient(135deg, #2c3e50 0%, #1a202c 100%);
          color: #e2e8f0;
        }
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
          font-size: 2.5rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          transition: color 0.3s ease;
        }
        .dark-mode h1 {
          color: #e2e8f0;
          text-shadow: 2px 2px 4px rgba(255,255,255,0.1);
        }
        .chat-container {
          height: 500px;
          overflow-y: auto;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .dark-mode .chat-container {
          background-color: rgba(26, 32, 44, 0.8);
          box-shadow: inset 0 0 10px rgba(255,255,255,0.1);
        }
        .message {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .message.user {
          align-items: flex-end;
        }
        .message.ai {
          align-items: flex-start;
        }
        .message-content {
          max-width: 80%;
          padding: 12px 18px;
          border-radius: 20px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
        .message-content:hover {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        .user .message-content {
          background-color: #4e54c8;
          color: white;
        }
        .dark-mode .user .message-content {
          background-color: #6366f1;
        }
        .ai .message-content {
          background-color: #f1f0f0;
          color: #333;
        }
        .dark-mode .ai .message-content {
          background-color: #2d3748;
          color: #e2e8f0;
        }
        .message-sender {
          font-size: 0.8em;
          margin-bottom: 5px;
          opacity: 0.7;
        }
        .input-container {
          display: flex;
          gap: 10px;
          background-color: white;
          border-radius: 25px;
          padding: 5px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .dark-mode .input-container {
          background-color: #2d3748;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }
        textarea {
          flex-grow: 1;
          padding: 12px 20px;
          border: none;
          border-radius: 20px;
          font-size: 16px;
          resize: none;
          overflow-y: hidden;
          min-height: 24px;
          max-height: 150px;
          background-color: transparent;
          outline: none;
          transition: all 0.3s ease;
          color: #333;
        }
        .dark-mode textarea {
          color: #e2e8f0;
        }
        textarea:focus {
          box-shadow: 0 0 0 2px #4e54c8;
        }
        .dark-mode textarea:focus {
          box-shadow: 0 0 0 2px #6366f1;
        }
        .send-button {
          padding: 10px 20px;
          background-color: #4e54c8;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: bold;
          font-size: 14px;
          min-width: 100px;
        }
        .dark-mode .send-button {
          background-color: #6366f1;
        }
        .send-button:hover {
          background-color: #3c40b1;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(78, 84, 200, 0.4);
        }
        .dark-mode .send-button:hover {
          background-color: #4f46e5;
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
        }
        .send-button:active {
          transform: translateY(0);
          box-shadow: 0 2px 5px rgba(78, 84, 200, 0.4);
        }
        .send-button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        .dark-mode .send-button:disabled {
          background-color: #4a5568;
        }
      `}</style>
    </div>
  );
};

export default SkillsAssessment;