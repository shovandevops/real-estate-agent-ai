import React from 'react'
import { MapPin, Bed, Bath, Square, TrendingUp, Star, Heart, Share2 } from 'lucide-react'

const PropertyCard = ({ property, showDetails = true }) => {
  if (!property) {
    return null
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
        <span className="text-6xl">{property.emoji}</span>
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <Heart className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </div>
        
        {/* Badges */}
        {property.isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
            NEW
          </div>
        )}
        {property.priceReduction && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-red-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
            🔥 {property.priceReduction}
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-base text-gray-900 flex-1 mr-2">
            {property.title}
          </h3>
          <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-xs font-semibold text-yellow-700">{property.rating}</span>
          </div>
        </div>
        
        {/* Price */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
          {property.price}
        </div>
        
        {/* Location */}
        <div className="flex items-center space-x-1 text-gray-600 mb-4">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs">{property.location}</span>
        </div>
        
        {/* Property Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-2 sm:p-3 text-center border border-blue-200">
            <div className="text-base sm:text-lg font-bold text-blue-700">{property.bedrooms}</div>
            <div className="text-xs text-blue-600">Beds</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-2 sm:p-3 text-center border border-purple-200">
            <div className="text-base sm:text-lg font-bold text-purple-700">{property.bathrooms}</div>
            <div className="text-xs text-purple-600">Baths</div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-2 sm:p-3 text-center border border-green-200">
            <div className="text-base sm:text-lg font-bold text-green-700">{property.sqft}</div>
            <div className="text-xs text-green-600">Sqft</div>
          </div>
        </div>
        
        {/* Investment Potential */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-3 mb-4 border border-emerald-200">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">💎</span>
            <span className="font-bold text-emerald-800">Investment Potential</span>
          </div>
          <div className="text-sm text-emerald-700">
            Expected appreciation in 2 years: <span className="font-bold text-lg">{property.appreciation}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 4).map((feature, index) => (
              <span key={index} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                {feature}
              </span>
            ))}
            {property.features.length > 4 && (
              <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                +{property.features.length - 4} more
              </span>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
            View Details
          </button>
          <button className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-4 rounded-xl font-bold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
            Schedule Viewing
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
