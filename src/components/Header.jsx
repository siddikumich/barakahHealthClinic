import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import logo from '../assets/cutLogo.png'

export default function Header() {
  const { currentUser, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Barakah Health Clinic Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Barakah Health Clinic</h1>
              <p className="text-sm text-gray-600">Compassionate, community-based care</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 transition">Services</Link>
            <Link to="/locations" className="text-gray-700 hover:text-green-600 transition">Locations</Link>
            <Link to="/volunteer" className="text-gray-700 hover:text-green-600 transition">Volunteer</Link>
            <Link to="/resources" className="text-gray-700 hover:text-green-600 transition">Resources</Link>
            <Link to="/events" className="text-gray-700 hover:text-green-600 transition">Events</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition">Contact</Link>
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
              >
                Login
              </Link>
            )}
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

