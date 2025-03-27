import React, { useState } from 'react';
import Chatbot from './Chatbot';
import './Layout.css';

function Layout({ children }) {
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible);
  };

  return (
    <div className="layout">
      {children}

      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src="./roboticon.jpg" alt="Chatbot" width="50" height="50" />
      </div>

      {/* Chatbot Component */}
      {isChatbotVisible && (
        <div className="chatbot-dialog">
          <Chatbot onClose={toggleChatbot} />
        </div>
      )}
    </div>
  );
}

export default Layout;
