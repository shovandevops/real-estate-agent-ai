import React, { useState } from 'react'
import Header from './components/Header'
import PersonaSelector from './components/PersonaSelector'
import ChatInterface from './components/ChatInterface'

const App = () => {
  const [selectedPersona, setSelectedPersona] = useState(null)
  const [isDemoMode] = useState(true)

  const personas = [
    {
      id: 'customer',
      name: 'Sarah Johnson',
      role: 'Property Buyer',
      avatar: '👩‍💼',
      type: 'customer',
      description: 'Looking to buy my first home in downtown area'
    },
    {
      id: 'agent',
      name: 'Mike Chen',
      role: 'Real Estate Agent',
      avatar: '👨‍💼',
      type: 'agent',
      description: 'Helping clients find their perfect property'
    }
  ]

  const handlePersonaSelect = (persona) => {
    setSelectedPersona(persona)
  }

  const handleBack = () => {
    setSelectedPersona(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedPersona ? (
        <div className="h-screen">
          <Header 
            persona={selectedPersona} 
            onBack={handleBack}
            isDemoMode={isDemoMode}
          />
          <ChatInterface 
            persona={selectedPersona} 
            isDemoMode={isDemoMode}
            onBack={handleBack}
          />
        </div>
      ) : (
        <div className="min-h-screen">
          <PersonaSelector 
            personas={personas} 
            onPersonaSelect={handlePersonaSelect}
            isDemoMode={isDemoMode}
          />
        </div>
      )}
    </div>
  )
}

export default App
