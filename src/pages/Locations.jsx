export default function Locations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Clinic Locations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Al Ihsaan Islamic Center */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Al Ihsaan Islamic Center</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Address:</h3>
                <p className="text-gray-700">
                  4345 E 10 Mile Rd<br />
                  Warren, MI 48091
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Schedule:</h3>
                <p className="text-gray-600 italic">Check back for upcoming clinic dates</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://maps.google.com/?q=4345+E+10+Mile+Rd+Warren+MI+48091" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View on Map
              </a>
            </div>
          </div>

          {/* Masjid Al Ihsan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Masjid Al Ihsan</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Address:</h3>
                <p className="text-gray-700">
                  2721 Holbrook<br />
                  Hamtramck, MI 48212
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Schedule:</h3>
                <p className="text-gray-600 italic">Check back for upcoming clinic dates</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://maps.google.com/?q=2721+Holbrook+Hamtramck+MI+48212" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View on Map
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Clinic Model */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mobile Clinic Model</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We bring equipment and volunteers directly to mosques and community centers to reduce
            barriers to care. Our mobile clinic model ensures that:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Healthcare is accessible in familiar, trusted community spaces</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Transportation barriers are eliminated</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Cultural and language barriers are minimized through community partnerships</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>All services remain completely free of charge</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

