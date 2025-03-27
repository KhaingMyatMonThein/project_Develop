import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ChatBot.css';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { content: "Hi! I'm your AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Rate limiting
  const [requestQueue, setRequestQueue] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const processQueue = async () => {
    if (isProcessing || requestQueue.length === 0) return;
    setIsProcessing(true);

    const { message, resolve, reject } = requestQueue[0];
    setRequestQueue(prev => prev.slice(1));

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      resolve(response.data.choices[0].message.content);
    } catch (err) {
      reject(err);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    processQueue();
  }, [requestQueue, isProcessing]);

  const addToQueue = (message) => {
    return new Promise((resolve, reject) => {
      setRequestQueue(prev => [...prev, { message, resolve, reject }]);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setMessages(prev => [...prev, { content: input, isBot: false }]);
    setInput('');
    setLoading(true);
    setError('');

    try {
      const botResponse = await addToQueue(input);
      setMessages(prev => [...prev, { content: botResponse, isBot: true }]);
    } catch (err) {
      if (err.response && err.response.status === 429) {
        setError('Too many requests. Please wait a moment and try again.');
      } else {
        setError('Sorry, I encountered an error. Please try again.');
      }
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>AI Assistant</h3>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
            <div className="avatar">{message.isBot ? '🤖' : '👤'}</div>
            <div className="content">{message.content}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
