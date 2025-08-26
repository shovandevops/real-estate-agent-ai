import React from 'react'
import { Clock, User, Bot } from 'lucide-react'

const ChatMessage = ({ message, persona }) => {
  const isAI = message.type === 'ai'
  const timestamp = message.timestamp.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  })

  return (
    <div className={`flex items-start space-x-3 mb-6 ${isAI ? 'justify-start' : 'justify-end'}`}>
      {isAI && (
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-primary-600" />
        </div>
      )}
      
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${isAI ? 'order-2' : 'order-1'}`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isAI 
            ? 'bg-gray-100 text-gray-900' 
            : 'bg-primary-500 text-white'
        }`}>
          <div className="whitespace-pre-wrap leading-relaxed">
            {message.content}
          </div>
        </div>
        
        <div className={`flex items-center space-x-2 mt-2 text-xs text-gray-500 ${
          isAI ? 'justify-start' : 'justify-end'
        }`}>
          <Clock className="w-3 h-3" />
          <span>{timestamp}</span>
          {isAI && <span>• AI Assistant</span>}
        </div>
      </div>
      
      {!isAI && (
        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  )
}

export default ChatMessage
