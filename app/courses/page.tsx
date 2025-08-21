"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CoursesPage() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-black text-white flex flex-col h-screen">
        {/* Logo */}
        <div className="p-8 pt-24 pb-16 pl-12">
          <h1 className="text-4xl font-bold">mbrm</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-8 pl-12">
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className={`block text-base font-medium transition-colors py-2 px-3 rounded-md ${
                  isActive("/") ? "bg-gray-800 text-white" : "text-gray-300 hover:text-white hover:bg-gray-900"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block text-base font-medium transition-colors py-2 px-3 rounded-md ${
                  isActive("/courses") ? "bg-gray-800 text-white" : "text-gray-300 hover:text-white hover:bg-gray-900"
                }`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className={`block text-base font-medium transition-colors py-2 px-3 rounded-md ${
                  isActive("/articles") ? "bg-gray-800 text-white" : "text-gray-300 hover:text-white hover:bg-gray-900"
                }`}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block text-base font-medium transition-colors py-2 px-3 rounded-md ${
                  isActive("/contact") ? "bg-gray-800 text-white" : "text-gray-300 hover:text-white hover:bg-gray-900"
                }`}
              >
                Contact
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
          </div>
        </div>
      </div>
    </div>
  )
}
