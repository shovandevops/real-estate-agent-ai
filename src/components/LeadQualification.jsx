import React, { useState } from 'react'
import { User, Calendar, DollarSign, MapPin, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react'

const LeadQualification = () => {
  const [selectedLead, setSelectedLead] = useState(0)
  
  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      budget: "$400,000 - $600,000",
      timeline: "3-6 months",
      location: "Downtown Area",
      urgency: "High",
      source: "Website",
      lastContact: "2 days ago",
      status: "Qualified",
      score: 85
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "+1 (555) 987-6543",
      budget: "$800,000 - $1,200,000",
      timeline: "6-12 months",
      location: "Suburban Area",
      urgency: "Medium",
      source: "Referral",
      lastContact: "1 week ago",
      status: "Prospecting",
      score: 72
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 (555) 456-7890",
      budget: "$250,000 - $400,000",
      timeline: "1-3 months",
      location: "University Area",
      urgency: "Very High",
      source: "Social Media",
      lastContact: "Today",
      status: "Hot Lead",
      score: 92
    }
  ]

  const selectedLeadData = leads[selectedLead]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Qualified': return 'bg-green-100 text-green-800'
      case 'Prospecting': return 'bg-yellow-100 text-yellow-800'
      case 'Hot Lead': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Very High': return 'bg-red-100 text-red-800'
      case 'High': return 'bg-orange-100 text-orange-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 mb-4">Lead Qualification Dashboard</h3>
      
      {/* Lead Selection */}
      <div className="flex space-x-2 mb-4">
        {leads.map((lead, index) => (
          <button
            key={lead.id}
            onClick={() => setSelectedLead(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedLead === index
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {lead.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Lead Details */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{selectedLeadData.name}</h4>
              <p className="text-sm text-gray-600">{selectedLeadData.email}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedLeadData.status)}`}>
              {selectedLeadData.status}
            </div>
            <div className="text-2xl font-bold text-primary-600 mt-1">
              {selectedLeadData.score}
            </div>
            <div className="text-xs text-gray-500">Score</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Timeline: {selectedLeadData.timeline}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span>Budget: {selectedLeadData.budget}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Location: {selectedLeadData.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <TrendingUp className="w-4 h-4" />
            <span>Source: {selectedLeadData.source}</span>
          </div>
        </div>

        {/* Urgency & Last Contact */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Urgency:</span>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(selectedLeadData.urgency)}`}>
              {selectedLeadData.urgency}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            Last Contact: {selectedLeadData.lastContact}
          </div>
        </div>

        {/* Qualification Metrics */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <h5 className="font-medium text-gray-900 mb-2">Qualification Metrics</h5>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-green-600">85%</div>
              <div className="text-xs text-gray-600">Budget Match</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-blue-600">92%</div>
              <div className="text-xs text-gray-600">Timeline Match</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-purple-600">78%</div>
              <div className="text-xs text-gray-600">Location Match</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
            Schedule Call
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors">
            Send Follow-up
          </button>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">AI</span>
          </div>
          <h4 className="font-medium text-blue-900">AI Insights</h4>
        </div>
        <p className="text-sm text-blue-800">
          This lead shows high conversion potential based on budget alignment, 
          urgency indicators, and engagement patterns. Recommend immediate follow-up 
          within 24 hours for best results.
        </p>
      </div>
    </div>
  )
}

export default LeadQualification
