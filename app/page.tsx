"use client"

import Navigation from "../components/Navigation"

export default function HomePage() {

  return (
    <div className="flex h-screen bg-stone-50">
      <Navigation />

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto bg-gradient-to-br from-stone-50 to-stone-100 md:ml-0 pt-16 md:pt-0">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300">
          <div className="absolute inset-0 bg-white bg-opacity-50"></div>
          <div className="relative z-10 text-center text-gray-900 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Strengthening Dual Credit Program Design, Leadership and Efficacy
            </h1>
            <p className="text-lg md:text-xl mb-8 md:mb-12 leading-relaxed text-gray-700">
              Offering in-depth on-boarding & training for dual credit leaders, staff and teams!
            </p>
            <button className="bg-gray-900 border-2 border-gray-900 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-transparent hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg rounded-md">
              REGISTER ONLINE
            </button>
          </div>
          
          {/* Floating Animation Elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-stone-400 opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-6 h-6 bg-stone-500 opacity-40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-stone-400 opacity-35 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Events Section */}
        <div className="p-4 md:p-12 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 md:mb-16 mt-4 md:mt-8">
              <h2 className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4 md:mb-8">UPCOMING EVENTS</h2>
            </div>
            
            {/* Coming Soon - Events will be added here */}
            <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-stone-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Events Coming Soon</h3>
              <p className="text-gray-700">Stay tuned for upcoming workshops and training sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
