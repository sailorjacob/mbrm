"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function CoursesPage() {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [expandedEvents, setExpandedEvents] = useState<{ [key: string]: boolean }>({})

  const isActive = (path: string) => pathname === path

  const toggleEventDetails = (eventId: string) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }))
  }

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
            <h2 className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-8">COURSES</h2>
          </div>

          <div className="space-y-12">
            {/* About MBRM Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ABOUT MBRM</h2>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Person Group Workshops (Summer and Fall)</h3>
              <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
                <li>• Focused on Faculty Standards, Curriculum Standards, Assessment Standards, and Evaluation Standards.</li>
                <li>• Interactive exercises including rigor alignment and curriculum decoding to ensure alignment across faculty, curriculum, and assessment.</li>
                <li>• Learn how to create clear, intentional alignment between accreditation standards, ensuring all program elements reinforce one another for maximum impact.</li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Evaluation Standard Calibration Sessions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Targeted virtual sessions focused specifically on mastering the evaluation standard calibration tool to strengthen program evaluation readiness.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accreditation Application Support</h3>
              <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
                <li>• Personalized support throughout the accreditation application process.</li>
                <li>• Guidance on developing application materials that clearly demonstrate how your program aligns with accreditation standards and tells a compelling, cohesive story of program excellence.</li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Excellence Certification</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Comprehensive certification program designed to enhance dual credit program management and evaluation
                skills.
              </p>
              <div className="text-sm text-gray-600">Duration: 6 weeks | Format: Online</div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance Fundamentals</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Essential course covering the fundamentals of quality assurance in educational program management.
              </p>
              <div className="text-sm text-gray-600">Duration: 4 weeks | Format: Hybrid</div>
            </div>

            <hr className="border-gray-200 my-16" />

            {/* Events Section */}
            <div>
              <h2 className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-8">UPCOMING EVENTS</h2>
              
              {/* First Event */}
              <div className="mb-16">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Multiple Dates
                      <br />
                      June 2025
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900 mb-1">3pm PST - 6pm PST</div>
                    <div className="text-sm text-gray-600">Virtual</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Virtual Evaluation Standard Calibration Sessions
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Targeted virtual session focused specifically on adopting my specially designed evaluation standard
                    calibration tool (calibrating the four most commonly challenging areas of dual credit programming) to
                    strengthen program evaluation efficacy. Minimum 8 participants per session.
                    <br />
                    Cost $175
                  </p>
                  <a
                    href="https://form.jotform.com/240147099817160"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    https://form.jotform.com/240147099817160
                  </a>
                </div>

                <button
                  onClick={() => toggleEventDetails("event1")}
                  className="text-gray-600 text-sm hover:text-gray-800 transition-colors cursor-pointer"
                >
                  {expandedEvents["event1"] ? "— Event Details" : "+ Event Details"}
                </button>

                {expandedEvents["event1"] && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-3">Additional Event Information:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Interactive calibration exercises with real program scenarios</li>
                      <li>• Personalized feedback on evaluation methodologies</li>
                      <li>• Access to proprietary evaluation tools and templates</li>
                      <li>• Follow-up consultation session included</li>
                      <li>• Certificate of completion provided</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-sm text-blue-800">
                        <strong>Prerequisites:</strong> Basic understanding of dual credit programming and evaluation
                        principles recommended.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <hr className="border-gray-200 mb-16" />

              {/* Second Event */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">07/26/2025</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900 mb-1">9am - 4pm</div>
                    <div className="text-sm text-gray-600">Sonesta Select San Jose Airport</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-600 mb-2">Program Excellence and Quality Assurance</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    One-Day In-Person Workshop:
                    <br />
                    <em>"Achieving Program Excellence and Quality Assurance"</em>
                  </h4>
                  <div className="mb-4">
                    <strong className="text-gray-900">Morning Session:</strong>
                    <ul className="mt-2 ml-6">
                      <li className="text-gray-700">• Understanding Accreditation Standards: Facul...</li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => toggleEventDetails("event2")}
                  className="text-gray-600 text-sm hover:text-gray-800 transition-colors cursor-pointer"
                >
                  {expandedEvents["event2"] ? "— Event Details" : "+ Event Details"}
                </button>

                {expandedEvents["event2"] && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Complete Morning Session:</h5>
                        <ul className="space-y-1 text-gray-700 ml-4">
                          <li>• Understanding Accreditation Standards: Faculty Qualifications and Curriculum Alignment</li>
                          <li>• Data-Driven Decision Making: Implementing Effective Assessment Strategies</li>
                          <li>• Building Sustainable Partnerships with High Schools and Universities</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Afternoon Session:</h5>
                        <ul className="space-y-1 text-gray-700 ml-4">
                          <li>• Quality Assurance Frameworks: Monitoring and Evaluation Best Practices</li>
                          <li>• Student Success Metrics: Tracking and Improving Outcomes</li>
                          <li>• Hands-on Workshop: Developing Your Program Excellence Plan</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-4 bg-green-50 rounded border-l-4 border-green-400">
                        <p className="text-sm text-green-800">
                          <strong>Includes:</strong> Lunch, materials, certificate, and 30-day follow-up consultation. Early
                          bird pricing available until June 1st.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
