import React from 'react'
import { Home, Users, ArrowRight, Sparkles, Star, Zap } from 'lucide-react'

const PersonaSelector = ({ personas, onPersonaSelect, isDemoMode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 px-4 py-8">
      {/* Demo Mode Badge */}
      {isDemoMode && (
        <div className="fixed top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg text-xs font-bold z-50 animate-pulse">
          ✨ Demo Mode
        </div>
      )}

      {/* Hero Section */}
      <div className="text-center mb-10">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl animate-pulse">
            <Home className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
            <Sparkles className="w-4 h-4 text-yellow-800" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Real Estate AI Agent
        </h1>
        <p className="text-gray-600 text-base max-w-md mx-auto leading-relaxed">
          Experience the future of real estate with our intelligent AI assistant
        </p>
      </div>

      {/* Key Benefits */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
          <Star className="w-6 h-6 text-yellow-500 mr-2" />
          What You Can Do
        </h2>
        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💬</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-base">Natural Conversations</h3>
                <p className="text-gray-600 text-sm">Chat naturally with AI about properties</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🏠</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-base">Smart Property Matching</h3>
                <p className="text-gray-600 text-sm">AI finds your perfect property match</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">📊</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-base">Investment Insights</h3>
                <p className="text-gray-600 text-sm">Get detailed market analysis & predictions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persona Selection */}
      <div className="space-y-5">
        <h2 className="text-xl font-bold text-gray-900 text-center flex items-center justify-center">
          <Zap className="w-6 h-6 text-orange-500 mr-2" />
          Choose Your Experience
        </h2>
        {personas.map((persona, index) => (
          <div
            key={persona.id}
            onClick={() => onPersonaSelect(persona)}
            className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex items-center space-x-5">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <span className="text-3xl">{persona.avatar}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {persona.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">
                    {persona.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {persona.description}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30">
          <p className="text-gray-600 text-sm font-medium">🚀 Powered by AI • 🔒 Secure & Private</p>
        </div>
      </div>
    </div>
  )
}

export default PersonaSelector
