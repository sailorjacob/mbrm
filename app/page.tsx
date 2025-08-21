"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function HomePage() {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const sidebar = sidebarRef.current
    if (sidebar) {
      sidebar.addEventListener('mousemove', handleMouseMove)
      sidebar.addEventListener('mouseenter', () => setIsHovering(true))
      sidebar.addEventListener('mouseleave', () => setIsHovering(false))

      return () => {
        sidebar.removeEventListener('mousemove', handleMouseMove)
        sidebar.removeEventListener('mouseenter', () => setIsHovering(true))
        sidebar.removeEventListener('mouseleave', () => setIsHovering(false))
      }
    }
  }, [])

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-black text-white z-50 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">mbrm</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-16 left-0 right-0 bg-black text-white p-6">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium py-3 px-4 rounded-md transition-colors ${
                      isActive("/") ? "bg-white text-black font-bold" : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium py-3 px-4 rounded-md transition-colors ${
                      isActive("/courses") ? "bg-white text-black font-bold" : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium py-3 px-4 rounded-md transition-colors ${
                      isActive("/articles") ? "bg-white text-black font-bold" : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium py-3 px-4 rounded-md transition-colors ${
                      isActive("/contact") ? "bg-white text-black font-bold" : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div 
        ref={sidebarRef}
        className="hidden md:flex w-80 bg-black text-white flex-col h-screen relative overflow-hidden"
      >
        {/* Animated Mouse Follower */}
        <div
          className={`absolute w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl transition-all duration-300 ease-out pointer-events-none ${
            isHovering ? 'scale-100' : 'scale-0'
          }`}
          style={{
            left: mousePosition.x - 32,
            top: mousePosition.y - 32,
          }}
        />
        
        {/* Logo */}
        <div className="p-8 pt-24 pb-16 pl-12 relative z-10">
          <h1 className="text-4xl font-bold">mbrm</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-8 pl-12 relative z-10">
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className={`block text-base font-medium transition-all duration-300 ease-out py-2 px-3 relative group ${
                  isActive("/") ? "text-gray-900 font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">Home</span>
                <div className={`absolute inset-0 rounded-md transition-all duration-300 ease-out ${
                  isActive("/") ? "bg-white transform scale-100" : "bg-gray-800 transform scale-0 group-hover:scale-100"
                }`} />
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block text-base font-medium transition-all duration-300 ease-out py-2 px-3 relative group ${
                  isActive("/courses") ? "text-gray-900 font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">Courses</span>
                <div className={`absolute inset-0 rounded-md transition-all duration-300 ease-out ${
                  isActive("/courses") ? "bg-white transform scale-100" : "bg-gray-800 transform scale-0 group-hover:scale-100"
                }`} />
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className={`block text-base font-medium transition-all duration-300 ease-out py-2 px-3 relative group ${
                  isActive("/articles") ? "text-gray-900 font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">Articles</span>
                <div className={`absolute inset-0 rounded-md transition-all duration-300 ease-out ${
                  isActive("/articles") ? "bg-white transform scale-100" : "bg-gray-800 transform scale-0 group-hover:scale-100"
                }`} />
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block text-base font-medium transition-all duration-300 ease-out py-2 px-3 relative group ${
                  isActive("/contact") ? "text-gray-900 font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">Contact</span>
                <div className={`absolute inset-0 rounded-md transition-all duration-300 ease-out ${
                  isActive("/contact") ? "bg-white transform scale-100" : "bg-gray-800 transform scale-0 group-hover:scale-100"
                }`} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto bg-gradient-to-br from-stone-50 to-stone-100 md:ml-0">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-amber-800 via-orange-700 to-amber-900 pt-16 md:pt-0">
          <div className="absolute inset-0 bg-amber-950 bg-opacity-30"></div>
          <div className="relative z-10 text-center text-stone-50 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Strengthening Dual Credit Program Design, Leadership and Efficacy
            </h1>
            <p className="text-lg md:text-xl mb-8 md:mb-12 leading-relaxed opacity-90">
              Offering in-depth on-boarding & training for dual credit leaders, staff and teams!
            </p>
            <button className="bg-transparent border-2 border-stone-100 text-stone-100 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-stone-100 hover:text-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
              REGISTER ONLINE
            </button>
          </div>
          
          {/* Floating Animation Elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-orange-300 opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-6 h-6 bg-amber-400 opacity-40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-orange-400 opacity-35 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Events Section */}
        <div className="p-4 md:p-12 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 md:mb-16 mt-4 md:mt-8">
              <h2 className="text-sm font-medium text-amber-800 tracking-wider uppercase mb-4 md:mb-8">UPCOMING EVENTS</h2>
            </div>
            
            {/* Coming Soon - Events will be added here */}
            <div className="text-center py-20 bg-stone-100 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Events Coming Soon</h3>
              <p className="text-amber-700">Stay tuned for upcoming workshops and training sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
