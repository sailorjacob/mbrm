"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ContactPage() {
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
            <h2 className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-8">CONTACT</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Ready to enhance your program excellence and quality assurance capabilities? Contact us to learn more
                about our workshops, courses, and consultation services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Inquiries</h4>
                <p className="text-gray-700 mb-2">Email: info@mbrm.edu</p>
                <p className="text-gray-700">Phone: (555) 123-4567</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Workshop Registration</h4>
                <p className="text-gray-700 mb-2">Email: workshops@mbrm.edu</p>
                <p className="text-gray-700">Phone: (555) 123-4568</p>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM PST</p>
              <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM PST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
