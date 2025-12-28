import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import cutLogo from '../assets/cutLogo.png'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Barakah Health Clinic
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Compassionate, community-based care for underserved families in Warren & Hamtramck
              </p>
              <p className="text-gray-600 mb-8">
                We are a free, student-led preventive health clinic partnering with local mosques to provide
                accessible screenings, education, and culturally responsive care.
              </p>
              <div className="bg-green-100 border-l-4 border-green-600 p-4 mb-8">
                <p className="text-lg font-semibold text-gray-800">
                  100+ patients served across 4 clinics — and growing.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/locations" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
                >
                  Upcoming Clinics
                </Link>
                <Link 
                  to="/volunteer" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  Volunteer
                </Link>
                <Link 
                  to="/about" 
                  className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition shadow-lg"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                {/* Single, elegant logo display */}
                <div className="bg-gradient-to-br from-green-50 via-blue-50 to-green-50 rounded-3xl p-3 flex items-center justify-center shadow-2xl border-4 border-white overflow-hidden">
                  <img 
                    src={logo} 
                    alt="Barakah Health Clinic Logo" 
                    className="w-auto h-[500px] object-contain drop-shadow-lg scale-[1.125]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Barakah Health Clinic?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Free Services</h3>
              <p className="text-gray-600">All our health screenings and consultations are completely free</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Culturally Responsive</h3>
              <p className="text-gray-600">Care that respects and understands your cultural background</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-800">Community-Based</h3>
              <p className="text-gray-600">Bringing healthcare directly to your community centers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

