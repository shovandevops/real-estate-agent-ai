import React, { useState } from 'react'
import PropertyCard from './PropertyCard'
import { Search, Filter, MapPin, DollarSign, Bed, Bath } from 'lucide-react'

const PropertiesList = ({ location = 'downtown' }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [bedrooms, setBedrooms] = useState('all')
  const [sortBy, setSortBy] = useState('recommended')

  // Downtown properties data with unique images
  const downtownProperties = [
    {
      id: 1,
      title: "Luxury Downtown Penthouse",
      price: "$850,000",
      priceReduction: "25,000",
      location: "Downtown District - Financial Quarter",
      beds: 3,
      baths: 3,
      sqft: 2200,
      rating: 4.9,
      appreciation: "+18%",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center",
      features: ["Penthouse", "City Views", "Concierge", "Gym", "Parking"],
      isNew: true,
      daysOnMarket: 5,
      monthlyPayment: "$4,200"
    },
    {
      id: 2,
      title: "Modern Downtown Loft",
      price: "$450,000",
      location: "Downtown District - Arts District",
      beds: 2,
      baths: 2,
      sqft: 1200,
      rating: 4.7,
      appreciation: "+15%",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center",
      features: ["High Ceilings", "Exposed Brick", "Balcony", "Gym"],
      daysOnMarket: 12,
      monthlyPayment: "$2,300"
    },
    {
      id: 3,
      title: "Downtown Investment Condo",
      price: "$320,000",
      location: "Downtown District - University Area",
      beds: 1,
      baths: 1,
      sqft: 800,
      rating: 4.5,
      appreciation: "+22%",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center",
      features: ["Rental Income", "Student Housing", "Low Maintenance"],
      daysOnMarket: 8,
      monthlyPayment: "$1,600"
    },
    {
      id: 4,
      title: "Downtown Family Apartment",
      price: "$680,000",
      location: "Downtown District - Family Quarter",
      beds: 3,
      baths: 2,
      sqft: 1800,
      rating: 4.8,
      appreciation: "+16%",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center",
      features: ["Family Friendly", "School District", "Playground", "Security"],
      daysOnMarket: 15,
      monthlyPayment: "$3,400"
    },
    {
      id: 5,
      title: "Downtown Studio with View",
      price: "$280,000",
      location: "Downtown District - Waterfront",
      beds: 1,
      baths: 1,
      sqft: 650,
      rating: 4.6,
      appreciation: "+20%",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center",
      features: ["Water Views", "Modern Kitchen", "Walk-in Closet"],
      daysOnMarket: 3,
      monthlyPayment: "$1,400"
    },
    {
      id: 6,
      title: "Downtown Duplex",
      price: "$750,000",
      location: "Downtown District - Historic Quarter",
      beds: 4,
      baths: 3,
      sqft: 2400,
      rating: 4.9,
      appreciation: "+19%",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center",
      features: ["Historic Charm", "Private Garden", "Garage", "Character"],
      daysOnMarket: 20,
      monthlyPayment: "$3,800"
    }
  ]

  // Filter properties based on search and filters
  const filteredProperties = downtownProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under-500k' && parseInt(property.price.replace(/[$,]/g, '')) < 500000) ||
      (priceRange === '500k-750k' && parseInt(property.price.replace(/[$,]/g, '')) >= 500000 && parseInt(property.price.replace(/[$,]/g, '')) <= 750000) ||
      (priceRange === 'over-750k' && parseInt(property.price.replace(/[$,]/g, '')) > 750000)
    
    const matchesBedrooms = bedrooms === 'all' || 
      (bedrooms === '1' && property.beds === 1) ||
      (bedrooms === '2' && property.beds === 2) ||
      (bedrooms === '3+' && property.beds >= 3)
    
    return matchesSearch && matchesPrice && matchesBedrooms
  })

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[$,]/g, '')) - parseInt(b.price.replace(/[$,]/g, ''))
      case 'price-high':
        return parseInt(b.price.replace(/[$,]/g, '')) - parseInt(a.price.replace(/[$,]/g, ''))
      case 'appreciation':
        return parseInt(b.appreciation.replace(/[+%]/g, '')) - parseInt(a.appreciation.replace(/[+%]/g, ''))
      case 'newest':
        return a.daysOnMarket - b.daysOnMarket
      default:
        return 0
    }
  })

  return (
    <div className="space-y-4 sm:space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 sm:p-5 shadow-lg border border-blue-100">
        <div className="flex flex-col space-y-3 sm:space-y-4 mb-4 sm:mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              Downtown Properties
            </h2>
            <p className="text-gray-600 text-sm">
              {filteredProperties.length} properties found in Downtown District
            </p>
          </div>
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 sm:p-4 border border-blue-200">
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              ${(filteredProperties.reduce((sum, p) => sum + parseInt(p.price.replace(/[$,]/g, '')), 0) / 1000).toFixed(0)}K
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Total Value</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-3 sm:space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/80 backdrop-blur-sm"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-3 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm bg-white/80 backdrop-blur-sm"
          >
            <option value="">Price Range</option>
            <option value="0-500000">Under $500K</option>
            <option value="500000-1000000">$500K - $1M</option>
            <option value="1000000+">$1M+</option>
          </select>
          
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="px-3 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm bg-white/80 backdrop-blur-sm"
          >
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm bg-white/80 backdrop-blur-sm"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Properties List */}
      <div className="space-y-4 sm:space-y-6">
        {filteredProperties.map((property) => (
          <div key={property.id} className="animate-fade-in">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-8 sm:py-12 sm:py-16">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <Search className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">No properties found</h3>
          <p className="text-gray-600 text-sm sm:text-base">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {/* Market Summary */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border border-blue-200 rounded-2xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-blue-600 text-lg">📊</span>
          <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
            Downtown Market Summary
          </h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/50 shadow-sm">
            <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              $555K
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Average Price
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/50 shadow-sm">
            <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              +18%
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Avg. Appreciation
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/50 shadow-sm">
            <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              11
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Properties Listed
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/50 shadow-sm">
            <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              1
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              New Listings
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertiesList
