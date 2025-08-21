"use client"

import Navigation from "../../components/Navigation"

export default function ContactPage() {

  return (
    <div className="flex h-screen bg-stone-50">
      <Navigation />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-12 h-screen overflow-y-auto pt-16 md:pt-12 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 md:mb-16 mt-4 md:mt-8">
            <h2 className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4 md:mb-8">CONTACT</h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-stone-50 p-6 rounded-lg shadow-sm border border-stone-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed mb-6 md:mb-8">
                Ready to enhance your program excellence and quality assurance capabilities? Contact us to learn more
                about our workshops, courses, and consultation services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-stone-50 p-6 rounded-lg shadow-sm border border-stone-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Inquiries</h4>
                <p className="text-gray-700 mb-2">Email: info@mbrm.edu</p>
                <p className="text-gray-700">Phone: (555) 123-4567</p>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg shadow-sm border border-stone-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Workshop Registration</h4>
                <p className="text-gray-700 mb-2">Email: workshops@mbrm.edu</p>
                <p className="text-gray-700">Phone: (555) 123-4568</p>
              </div>
            </div>

            <div className="mt-12 bg-stone-50 p-6 rounded-lg shadow-sm border border-stone-200">
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
