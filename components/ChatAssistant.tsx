
import React, { useState, useRef, useEffect } from 'react';
import { aiService } from '../services/geminiService';
import { Message } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi! I'm the AI version of the portfolio owner. Ask me anything about their skills, experience, or projects!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsTyping(true);

    // Fix: Explicitly type history to resolve the role string mismatch error
    const history: { role: 'user' | 'model'; parts: { text: string }[] }[] = messages.map(m => ({
      role: (m.role === 'assistant' ? 'model' : 'user') as 'user' | 'model',
      parts: [{ text: m.text }]
    }));

    const responseText = await aiService.getChatResponse(userMsg, history);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-[60] transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="w-[350px] sm:w-[400px] h-[500px] glass rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 flex flex-col bg-zinc-900/95 backdrop-blur-xl">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">AI</div>
              <div>
                <p className="font-bold text-sm">Portfolio Assistant</p>
                <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Powered by H.P</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-cyan-600 text-white rounded-tr-none shadow-md shadow-cyan-500/10' 
                    : 'glass text-gray-200 rounded-tl-none border-white/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-6 border-t border-white/10 flex gap-2">
            <input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center z-[70] hover:scale-110 transition-transform active:scale-95 border border-white/20 group"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20 group-hover:hidden"></div>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default ChatAssistant;
