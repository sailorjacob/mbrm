"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function HomePage() {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

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
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className="w-80 bg-black text-white flex flex-col h-screen relative overflow-hidden"
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
      <div className="flex-1 h-screen overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Strengthening Dual Credit Program Design, Leadership and Efficacy
            </h1>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Offering in-depth on-boarding & training for dual credit leaders, staff and teams!
            </p>
            <button className="bg-transparent border-2 border-white text-white px-12 py-4 text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              REGISTER ONLINE
            </button>
          </div>
          
          {/* Floating Animation Elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-white opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-6 h-6 bg-blue-300 opacity-30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-300 opacity-25 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Events Section */}
        <div className="p-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 mt-8">
              <h2 className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-8">UPCOMING EVENTS</h2>
            </div>
            
            {/* Coming Soon - Events will be added here */}
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Events Coming Soon</h3>
              <p className="text-gray-600">Stay tuned for upcoming workshops and training sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
