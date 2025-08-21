"use client"

import Navigation from "../../components/Navigation"

export default function ArticlesPage() {

  return (
    <div className="flex h-screen bg-white">
      <Navigation />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-12 h-screen overflow-y-auto pt-16 md:pt-12">
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
