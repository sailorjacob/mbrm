"use client"

import Navigation from "../../components/Navigation"

export default function ArticlesPage() {

  return (
    <div className="flex h-screen bg-stone-50">
      <Navigation />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-12 h-screen overflow-y-auto pt-16 md:pt-12 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 mt-8">
            <h2 className="text-sm font-medium text-amber-800 tracking-wider uppercase mb-8">ARTICLES</h2>
          </div>

          <div className="space-y-12">
            <article className="bg-stone-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Best Practices in Dual Credit Programming</h3>
              <p className="text-amber-800 leading-relaxed mb-4">
                Exploring effective strategies for implementing and managing dual credit programs in educational
                institutions.
              </p>
              <div className="text-sm text-amber-700">Published: March 2025</div>
            </article>

            <hr className="border-amber-200" />

            <article className="bg-stone-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Evaluation Standards and Calibration Tools</h3>
              <p className="text-amber-800 leading-relaxed mb-4">
                A comprehensive guide to developing and implementing evaluation standards for program excellence.
              </p>
              <div className="text-sm text-amber-700">Published: February 2025</div>
            </article>

            <hr className="border-amber-200" />

            <article className="bg-stone-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Quality Assurance in Educational Programs</h3>
              <p className="text-amber-800 leading-relaxed mb-4">
                Understanding the critical components of quality assurance and their impact on program outcomes.
              </p>
              <div className="text-sm text-amber-700">Published: January 2025</div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
