import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatboxRef = useRef(null);

  const scrollToBottom = () => {
    chatboxRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    // Make API call to ChatFree
    try {
      const response = await axios.post('https://chatfree.io/api/message', {
        message: input,
        bot: 'default'
      });

      const aiMessage = { role: 'bot', content: response.data.response };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error('Error:', error);
    }

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <img src="/chatbot-logo.svg" alt="Drift University Bot" className="chatbot-logo" />
        <span>Drift University Bot</span>
      </div>

      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ))}
        <div ref={chatboxRef} />
      </div>

      <div className="chatbot-input">
        <input type="text" placeholder="Reply to Applinks Bot" value={input} onChange={e => setInput(e.target.value)} />
        <div className="chatbot-actions">
          <span role="img" aria-label="emoji">😃</span>
          <span>GIF</span>
          <span>📎</span>
        </div>
      </div>

      <div className="chatbot-footer">
        <span>Chat ⚡ by Drift</span>
        <a href="/privacy-policy">View our privacy policy here</a>
      </div>

      <button className="chatbot-close-button" onClick={onClose}>
        X
      </button>
    </div>
  );
}

export default Chatbot;
