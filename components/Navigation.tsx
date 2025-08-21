"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function Navigation() {
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
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-stone-100 text-gray-900 z-50 p-4 flex justify-between items-center shadow-lg border-b border-stone-200">
        <h1 className="text-2xl font-bold">mbrm</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-900 focus:outline-none"
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
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-16 left-0 right-0 bg-stone-50 text-gray-900 p-6 shadow-lg">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium py-3 px-4 rounded-md transition-colors ${
                      isActive("/") ? "bg-gray-900 text-white font-bold" : "text-gray-700 hover:text-gray-900 hover:bg-stone-100"
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
                      isActive("/courses") ? "bg-gray-900 text-white font-bold" : "text-gray-700 hover:text-gray-900 hover:bg-stone-100"
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
                      isActive("/articles") ? "bg-gray-900 text-white font-bold" : "text-gray-700 hover:text-gray-900 hover:bg-stone-100"
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
                      isActive("/contact") ? "bg-gray-900 text-white font-bold" : "text-gray-700 hover:text-gray-900 hover:bg-stone-100"
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
        className="hidden md:flex w-80 bg-gradient-to-b from-stone-100 to-stone-200 text-gray-900 flex-col h-screen relative overflow-hidden shadow-lg border-r border-stone-300"
      >
        {/* Animated Mouse Follower */}
        <div
          className={`absolute w-16 h-16 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full opacity-20 blur-xl transition-all duration-300 ease-out pointer-events-none ${
            isHovering ? 'scale-100' : 'scale-0'
          }`}
          style={{
            left: mousePosition.x - 32,
            top: mousePosition.y - 32,
          }}
        />
        
        {/* Logo */}
        <div className="p-8 pt-24 pb-16 pl-12 relative z-10">
          <h1 className="text-4xl font-bold text-gray-900">mbrm</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-8 pl-12 relative z-10">
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className={`block text-base font-medium transition-all duration-300 ease-out py-2 px-3 relative group ${
                  isActive("/") ? "text-white font-bold" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10">Home</span>
                <div className={`absolute inset-0 rounded-md transition-all duration-300 ease-out ${
                  isActive("/") ? "bg-gray-900 transform scale-100" : "bg-stone-300 transform scale-0 group-hover:scale-100"
                }`} />
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block text-base font-medium transition-all duration-300 ease-out py-2 px-3 relative group ${
                  isActive("/courses") ? "text-white font-bold" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10">Courses</span>
                <div className={`absolute inset-0 rounded-md transition-all duration-300 ease-out ${
                  isActive("/courses") ? "bg-gray-900 transform scale-100" : "bg-stone-300 transform scale-0 group-hover:scale-100"
                }`} />
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className={`block text-base font-medium transition-all duration-300 ease-out py-2 px-3 relative group ${
                  isActive("/articles") ? "text-white font-bold" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10">Articles</span>
                <div className={`absolute inset-0 rounded-md transition-all duration-300 ease-out ${
                  isActive("/articles") ? "bg-gray-900 transform scale-100" : "bg-stone-300 transform scale-0 group-hover:scale-100"
                }`} />
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block text-base font-medium transition-all duration-300 ease-out py-2 px-3 relative group ${
                  isActive("/contact") ? "text-white font-bold" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10">Contact</span>
                <div className={`absolute inset-0 rounded-md transition-all duration-300 ease-out ${
                  isActive("/contact") ? "bg-gray-900 transform scale-100" : "bg-stone-300 transform scale-0 group-hover:scale-100"
                }`} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
