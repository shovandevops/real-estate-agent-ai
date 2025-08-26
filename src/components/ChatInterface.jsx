import React, { useState, useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import PropertiesList from './PropertiesList'
import LeadQualification from './LeadQualification'
import { mockAIResponses } from '../data/mockResponses'

const ChatInterface = ({ persona, isDemoMode, onBack }) => {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [conversationStage, setConversationStage] = useState('greeting')
  const [customerProfile, setCustomerProfile] = useState({})
  const [showProperties, setShowProperties] = useState(false)
  const [showLeadQualification, setShowLeadQualification] = useState(false)
  const [propertyLocation, setPropertyLocation] = useState('downtown')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize conversation based on persona
  useEffect(() => {
    if (persona.type === 'customer') {
      const welcomeMessage = {
        id: 1,
        type: 'ai',
        content: mockAIResponses.customer.greeting,
        timestamp: new Date(),
        showTyping: false
      }
      setMessages([welcomeMessage])
    } else {
      const welcomeMessage = {
        id: 1,
        type: 'ai',
        content: mockAIResponses.agent.greeting,
        timestamp: new Date(),
        showTyping: false
      }
      setMessages([welcomeMessage])
    }
  }, [persona])

  const handleSendMessage = async (message) => {
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date(),
      showTyping: false
    }
    
    setMessages(prev => [...prev, userMessage])
    
    // Simulate AI typing
    setIsTyping(true)
    
    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(message)
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
      
      // Update conversation stage
      updateConversationStage(message, aiResponse)
    }, 1500)
  }

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Customer persona responses
    if (persona.type === 'customer') {
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return {
          id: Date.now() + 1,
          type: 'ai',
          content: mockAIResponses.customer.hello,
          timestamp: new Date(),
          showTyping: false
        }
      }
      
      if (lowerMessage.includes('budget') || lowerMessage.includes('price')) {
        return {
          id: Date.now() + 1,
          type: 'ai',
          content: mockAIResponses.customer.budget,
          timestamp: new Date(),
          showTyping: false
        }
      }
      
      if (lowerMessage.includes('location') || lowerMessage.includes('area')) {
        return {
          id: Date.now() + 1,
          type: 'ai',
          content: mockAIResponses.customer.location,
          timestamp: new Date(),
          showTyping: false
        }
      }
      
      if (lowerMessage.includes('property') || lowerMessage.includes('house') || lowerMessage.includes('apartment')) {
        return {
          id: Date.now() + 1,
          type: 'ai',
          content: mockAIResponses.customer.propertySearch,
          timestamp: new Date(),
          showTyping: false
        }
      }
      
      if (lowerMessage.includes('investment') || lowerMessage.includes('appreciation')) {
        return {
          id: Date.now() + 1,
          type: 'ai',
          content: mockAIResponses.customer.investment,
          timestamp: new Date(),
          showTyping: false
        }
      }
      
      if (lowerMessage.includes('show properties') || lowerMessage.includes('recommendations') || lowerMessage.includes('downtown')) {
        setShowProperties(true)
        setPropertyLocation('downtown')
        setIsSidebarOpen(true)
        return {
          id: Date.now() + 1,
          type: 'ai',
          content: mockAIResponses.customer.showProperties,
          timestamp: new Date(),
          showTyping: false
        }
      }
    }
    
    // Agent persona responses
    if (persona.type === 'agent') {
      if (lowerMessage.includes('lead') || lowerMessage.includes('qualify')) {
        setShowLeadQualification(true)
        setIsSidebarOpen(true)
        return {
          id: Date.now() + 1,
          type: 'ai',
          content: mockAIResponses.agent.leadQualification,
          timestamp: new Date(),
          showTyping: false
        }
      }
      
      if (lowerMessage.includes('market') || lowerMessage.includes('insights')) {
        return {
          id: Date.now() + 1,
          type: 'ai',
          content: mockAIResponses.agent.marketInsights,
          timestamp: new Date(),
          showTyping: false
        }
      }
    }
    
    // Default response
    return {
      id: Date.now() + 1,
      type: 'ai',
      content: mockAIResponses.default,
      timestamp: new Date(),
      showTyping: false
    }
  }

  const updateConversationStage = (userMessage, aiResponse) => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('budget') || lowerMessage.includes('price')) {
      setConversationStage('budget')
    } else if (lowerMessage.includes('location') || lowerMessage.includes('area')) {
      setConversationStage('location')
    } else if (lowerMessage.includes('property') || lowerMessage.includes('house')) {
      setConversationStage('property')
    } else if (lowerMessage.includes('investment') || lowerMessage.includes('appreciation')) {
      setConversationStage('investment')
    }
  }

  const handleQuickAction = (action) => {
    handleSendMessage(action)
  }

  return (
    <div className="max-w-full mx-auto h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-lg">
        <div className="px-3 sm:px-4 py-3 sm:py-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button 
                onClick={onBack}
                className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm touch-optimized"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-xl">{persona.avatar}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-sm sm:text-base truncate">{persona.name}</h2>
                <p className="text-blue-100 text-xs truncate">{persona.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                <span className="text-xs text-white font-medium">AI Online</span>
              </div>
            </div>
          </div>

          {/* Mobile Quick Actions */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {persona.type === 'customer' && [
              'Budget range?',
              'Properties downtown',
              'Investment analysis',
              'Location insights'
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action === 'Budget range?' ? 'What\'s my budget range?' : 
                                              action === 'Properties downtown' ? 'Show me properties in downtown' :
                                              action === 'Investment analysis' ? 'Investment potential analysis' :
                                              'Location insights')}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105 touch-optimized"
              >
                {action}
              </button>
            ))}
            
            {persona.type === 'agent' && [
              'Qualify lead',
              'Market insights',
              'Performance',
              'Communication'
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action === 'Qualify lead' ? 'Qualify this lead' :
                                              action === 'Market insights' ? 'Market insights' :
                                              action === 'Performance' ? 'Property performance' :
                                              'Client communication')}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105 touch-optimized"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Chat Layout */}
      <div className="flex flex-col h-[calc(100vh-240px)] sm:h-[calc(100vh-220px)]">
        {/* Chat Messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-3 sm:p-4 custom-scrollbar"
        >
          {messages.map((message) => (
            <div key={message.id} className="animate-fade-in">
              <ChatMessage 
                message={message} 
                persona={persona}
              />
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start space-x-3 mb-4 animate-fade-in">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">AI</span>
              </div>
              <div className="bg-gray-100 rounded-2xl px-4 py-3">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 bg-white p-3 sm:p-4 shadow-lg">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 flex-shrink-0">
              <h3 className="font-bold text-gray-900 text-lg">
                {showProperties ? '🏠 Property Listings' : '📋 Lead Qualification'}
              </h3>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 pb-20">
              {showProperties && (
                <div className="animate-fade-in">
                  <PropertiesList location={propertyLocation} />
                </div>
              )}
              
              {showLeadQualification && (
                <div className="animate-fade-in">
                  <LeadQualification />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed right-0 top-0 h-full w-96 border-l border-gray-200 bg-gray-50 overflow-y-auto">
        {showProperties && (
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-6 text-lg">Property Listings</h3>
            <PropertiesList location={propertyLocation} />
          </div>
        )}
        
        {showLeadQualification && (
          <div className="p-6">
            <LeadQualification />
          </div>
        )}
        
        {!showProperties && !showLeadQualification && (
          <div className="text-center text-gray-500 py-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <p className="text-sm">Start a conversation to see insights and recommendations</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatInterface
