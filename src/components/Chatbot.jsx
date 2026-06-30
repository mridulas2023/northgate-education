import React, { useState, useEffect, useRef } from 'react';
import chatKB from '../data/chatbotKB.json';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initial greeting when opened first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: 'Hi! I am the Northgate AI Assistant. Ask me anything about studying in USA, UK or Europe, exam prep, visas, or scholarships.',
            sender: 'bot',
          },
        ]);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getBotResponse = (msg) => {
    const m = msg.toLowerCase();
    if (m.includes('usa') || m.includes('america') || m.includes('united states')) return chatKB.usa;
    if (m.includes('uk') || m.includes('britain') || m.includes('england') || m.includes('oxford') || m.includes('cambridge')) return chatKB.uk;
    if (m.includes('europe') || m.includes('germany') || m.includes('france') || m.includes('netherlands') || m.includes('zurich')) return chatKB.europe;
    if (m.includes('ielts')) return chatKB.ielts;
    if (m.includes('toefl')) return chatKB.toefl;
    if (m.includes('sat')) return chatKB.sat;
    if (m.includes('cae') || m.includes('cambridge') || m.includes('c1')) return chatKB.cae;
    if (m.includes('duolingo')) return chatKB.duolingo;
    if (m.includes('visa')) return chatKB.visa;
    if (m.includes('scholarship') || m.includes('fund') || m.includes('financial')) return chatKB.scholarship;
    if (m.includes('sop') || m.includes('essay') || m.includes('statement')) return chatKB.sop;
    if (m.includes('fee') || m.includes('price') || m.includes('cost') || m.includes('how much')) return chatKB.fees;
    if (m.includes('appoint') || m.includes('book') || m.includes('consult')) return chatKB.appointment;
    if (m.includes('hello') || m.includes('hi') || m.includes('hey')) return chatKB.hi;
    return chatKB.fallback;
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMsgId = Date.now();
    setMessages((prev) => [...prev, { id: userMsgId, text, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    // Get response with random typing delay
    const delay = 700 + Math.random() * 500;
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: getBotResponse(text), sender: 'bot' },
      ]);
    }, delay);
  };

  const handleSuggestionClick = (suggestionText) => {
    handleSend(suggestionText);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* CHAT FAB */}
      <button
        className="chat-fab"
        id="chatFab"
        onClick={toggleChat}
        aria-label="AI Assistant"
      >
        <i className={isOpen ? 'fas fa-times' : 'fas fa-robot'}></i>
      </button>

      {/* CHAT WINDOW */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`} id="chatWindow">
        <div className="chat-header">
          <div className="chat-avatar">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div>
            <div className="chat-name">Northgate AI Assistant</div>
            <div className="chat-status">
              <span className="chat-status-dot"></span> Online &middot; Instant replies
            </div>
          </div>
          <button className="chat-close" onClick={toggleChat} aria-label="Close Chat">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chat-messages" id="chatMessages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chat-typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-suggestions">
          <button onClick={() => handleSuggestionClick('Study in USA')}>Study in USA</button>
          <button onClick={() => handleSuggestionClick('Visa process')}>Visa process</button>
          <button onClick={() => handleSuggestionClick('IELTS coaching')}>IELTS coaching</button>
          <button onClick={() => handleSuggestionClick('Scholarships')}>Scholarships</button>
          <button onClick={() => handleSuggestionClick('Book consultation')}>Book consultation</button>
        </div>

        <div className="chat-input-area">
          <input
            className="chat-input"
            id="chatInput"
            type="text"
            placeholder="Ask about studying abroad..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="chat-send" onClick={() => handleSend()} aria-label="Send Message">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
