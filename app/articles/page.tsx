"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function ArticlesPage() {
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
      <div className="flex-1 p-12 h-screen overflow-y-auto">
        <div className="max-w-4xl">
          <div className="mb-16 mt-8">
            <h2 className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-8">ARTICLES</h2>
          </div>

          <div className="space-y-12">
            <article>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Practices in Dual Credit Programming</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Exploring effective strategies for implementing and managing dual credit programs in educational
                institutions.
              </p>
              <div className="text-sm text-gray-600">Published: March 2025</div>
            </article>

            <hr className="border-gray-200" />

            <article>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evaluation Standards and Calibration Tools</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A comprehensive guide to developing and implementing evaluation standards for program excellence.
              </p>
              <div className="text-sm text-gray-600">Published: February 2025</div>
            </article>

            <hr className="border-gray-200" />

            <article>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance in Educational Programs</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding the critical components of quality assurance and their impact on program outcomes.
              </p>
              <div className="text-sm text-gray-600">Published: January 2025</div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
