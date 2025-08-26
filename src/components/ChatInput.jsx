import React, { useState } from 'react'
import { Send, Paperclip, Smile, Mic } from 'lucide-react'

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 sm:space-x-3">
      <button
        type="button"
        className="p-2 sm:p-3 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 flex-shrink-0"
        aria-label="Attach file"
      >
        <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      <button
        type="button"
        className="p-2 sm:p-3 text-purple-500 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 flex-shrink-0"
        aria-label="Add emoji"
      >
        <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      <button
        type="button"
        className="p-2 sm:p-3 text-green-500 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 flex-shrink-0"
        aria-label="Voice message"
      >
        <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white transition-all duration-300 min-w-0"
      />
      
      <button
        type="submit"
        disabled={!message.trim()}
        className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0 shadow-md border-2 border-blue-400 hover:border-blue-500"
        aria-label="Send message"
      >
        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </form>
  )
}

export default ChatInput
