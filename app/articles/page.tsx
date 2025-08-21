"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ArticlesPage() {
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
