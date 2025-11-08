import { useState, useRef, useEffect } from "react";
import { GraduationCap, Send, X, MinusSquare, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const predefinedQuestions = [
  "What are the top countries for engineering studies?",
  "How do I apply for a student visa?",
  "What scholarships are available for international students?",
  "How much does it cost to study in the UK?",
  "What are the English language requirements?",
  "How to get accommodation abroad?",
  "What are the post-study work options?",
  "How do I choose the right university?"
];

const chatbotResponses: Record<string, string> = {
  "What are the top countries for engineering studies?": "The top countries for engineering studies include the USA, UK, Germany, Australia, Canada, and Singapore. Each offers excellent universities with different specializations and research opportunities.",
  
  "How do I apply for a student visa?": "The student visa application process varies by country but typically requires an acceptance letter from a university, proof of financial capacity, health insurance, visa application forms, and sometimes interviews. Our visa counselors can provide detailed guidance specific to your destination.",
  
  "What scholarships are available for international students?": "International students can access various scholarships offered by universities, governments, and private organizations based on academic merit, financial need, or specific talents. We can help identify opportunities matching your profile and guide you through the application process.",
  
  "How much does it cost to study in the UK?": "Studying in the UK typically costs between £12,000-£25,000 per year for tuition fees, plus £9,000-£15,000 per year for living expenses, depending on your location and lifestyle. London is generally more expensive than other cities.",
  
  "What are the English language requirements?": "Most universities require English proficiency tests like IELTS, TOEFL, or PTE. Typically, undergraduate programs require IELTS scores of 6.0-6.5, while postgraduate programs require 6.5-7.0, but this varies by institution and program.",
  
  "How to get accommodation abroad?": "International students can choose from university dormitories, private student housing, shared apartments, homestays, or private rentals. We can assist you in finding suitable options based on your preferences, budget, and proximity to your university.",
  
  "What are the post-study work options?": "Many countries offer post-study work visas to international graduates. The UK offers a 2-year Graduate Route, Australia up to 4 years, Canada up to 3 years, and the USA offers OPT for up to 3 years for STEM graduates.",
  
  "How do I choose the right university?": "Choosing the right university involves considering factors like program offerings, rankings, location, tuition costs, scholarships, campus facilities, and career support. Our counselors conduct a comprehensive profile assessment to match you with universities that best fit your academic profile and career goals."
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "bot"; message: string }[]>([
    { type: "bot", message: "Hello! I'm GoGlobal's virtual assistant. How can I help you with your overseas education journey today?" }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setChatHistory([...chatHistory, { type: "user", message: inputValue }]);
    
    setTimeout(() => {
      const botResponse = chatbotResponses[inputValue] || 
        "Thanks for your question. Our education counselors would be happy to provide personalized guidance on this. Would you like to schedule a free consultation?";
      
      setChatHistory(prev => [...prev, { type: "bot", message: botResponse }]);
    }, 1000);

    setInputValue("");
  };

  const handlePredefinedQuestion = (question: string) => {
    setChatHistory([...chatHistory, { type: "user", message: question }]);
    
    setTimeout(() => {
      const botResponse = chatbotResponses[question] || 
        "Thanks for your question. Our education counselors would be happy to provide personalized guidance on this. Would you like to schedule a free consultation?";
      
      setChatHistory(prev => [...prev, { type: "bot", message: botResponse }]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={toggleChat}
        className="bg-behrani-600 hover:bg-behrani-700 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <GraduationCap className="h-7 w-7" />
      </button>

      {isOpen && (
        <div
          className={`absolute bottom-20 right-0 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 w-[90vw] sm:w-96 ${
            isMinimized ? "h-16" : "h-[550px]"
          }`}
        >
          <div 
            className="bg-behrani-600 text-white p-4 flex justify-between items-center cursor-pointer"
            onClick={isMinimized ? toggleChat : undefined}
          >
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-3">
                <GraduationCap className="h-5 w-5 text-behrani-600" />
              </div>
              <h3 className="font-semibold">GoGlobal's Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleMinimize} className="hover:text-gray-200">
                {isMinimized ? (
                  <GraduationCap className="h-5 w-5" />
                ) : (
                  <MinusSquare className="h-5 w-5" />
                )}
              </button>
              <button onClick={toggleChat} className="hover:text-gray-200">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-[380px] overflow-y-auto p-4">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.type === "user"
                          ? "bg-behrani-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="flex items-start mb-1">
                        {msg.type === "bot" ? (
                          <Bot className="h-4 w-4 mr-1 text-behrani-600" />
                        ) : (
                          <User className="h-4 w-4 mr-1 text-white" />
                        )}
                        <span className="font-semibold text-xs">
                          {msg.type === "bot" ? "Go Global" : "You"}
                        </span>
                      </div>
                      {msg.message}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2 font-medium">Common Questions:</p>
                <div className="flex flex-wrap gap-2">
                  {predefinedQuestions.slice(0, 4).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handlePredefinedQuestion(question)}
                      className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 hover:bg-behrani-50 hover:border-behrani-200 transition-colors text-gray-700"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" className="bg-behrani-600 hover:bg-behrani-700">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
