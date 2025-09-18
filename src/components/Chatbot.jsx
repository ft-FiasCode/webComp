import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const userAvatar = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&s=48';
const botAvatar = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&s=48';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'System online. How may I assist you, operator?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { text: trimmed, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        'Processing input...',
        'Request acknowledged. Stand by...',
        'UETM AI response.... How can I help further?',
        "That's a great question! Let me provide some guidance.",
        'I recommend checking our deadlines page for the latest information.',
        'Feel free to ask about requirements or the application process.',
        'Our team is here to support you every step of the way.'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      setTimeout(() => {
        setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
        setIsTyping(false);
      }, 1000);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#5e83e9] to-[#2563eb] text-white rounded-full flex items-center justify-center hover:brightness-110 transition-all duration-300 z-50 shadow-md"
        aria-label="Open chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="
              fixed bottom-20 right-6 w-80 h-[384px]
              bg-white/40 dark:bg-[#1f2937]/40
              backdrop-blur-[16px] dark:backdrop-blur-[16px]
              border border-white/20 dark:border-white/10
              rounded-2xl
              flex flex-col z-50
              text-slate-900 dark:text-slate-100
              shadow-lg
            "
            role="dialog"
            aria-labelledby="chatbot-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-white/10">
              <h3 id="chatbot-title" className="font-semibold text-lg select-none">
                🤖 NAVI Assistant
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-100 transition-colors duration-300"
                aria-label="Close chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
              aria-live="polite"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-center space-x-2 max-w-[75%]">
                    {msg.sender === 'bot' && (
                      <img
                        src={botAvatar}
                        alt="Bot avatar"
                        className="w-8 h-8 rounded-full flex-shrink-0 select-none"
                      />
                    )}
                    <div
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300
                        ${
                          msg.sender === 'user'
                            ? 'bg-[#2563eb] text-white rounded-br-none'
                            : 'bg-white/70 dark:bg-[#2c3e50]/80 text-slate-900 dark:text-slate-100 rounded-bl-none'
                        }`}
                      style={{ backdropFilter: msg.sender === 'bot' ? 'blur(8px)' : 'none' }}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === 'user' && (
                      <img
                        src={userAvatar}
                        alt="User avatar"
                        className="w-8 h-8 rounded-full flex-shrink-0 select-none"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start animate-pulse"
                >
                  <div className="flex items-center space-x-2 max-w-[75%]">
                    <img
                      src={botAvatar}
                      alt="Bot avatar"
                      className="w-8 h-8 rounded-full flex-shrink-0 select-none"
                    />
                    <div
                      className="px-4 py-2 rounded-xl bg-white/70 dark:bg-[#2c3e50]/80 text-slate-900 dark:text-slate-100 text-sm font-medium"
                      style={{ backdropFilter: 'blur(8px)' }}
                    >
                      ...
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20 dark:border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your command..."
                  className="
                    flex-1 px-3 py-2 border border-white/30 dark:border-white/20
                    rounded-lg bg-white/70 dark:bg-[#2c3e50]/80
                    text-slate-900 dark:text-slate-100
                    placeholder:text-slate-500 dark:placeholder:text-slate-400
                    focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent
                    transition-colors duration-300
                  "
                  aria-label="Chat input"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`
                    px-3 py-2 rounded-lg transition-all duration-200
                    ${input.trim()
                      ? 'bg-gradient-to-tr from-[#1e3a8a] to-[#2563eb] text-white hover:brightness-110 cursor-pointer'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'}
                  `}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
 