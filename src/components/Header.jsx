import React from 'react'
import { ArrowLeft } from 'lucide-react'

const Header = ({ persona, onBack, isDemoMode }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-lg">{persona.avatar}</span>
              </div>
              <div>
                <h1 className="font-semibold text-gray-900 text-sm">
                  {persona.name}
                </h1>
                <p className="text-gray-600 text-xs">
                  {persona.role}
                </p>
              </div>
            </div>
          </div>
          
          {isDemoMode && (
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              🎯 Demo
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
