'use client'

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 mb-2">404</h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-300 shadow-sm hover:shadow-md"
          >
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}