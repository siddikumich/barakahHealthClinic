import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Barakah Health Clinic</h3>
            <p className="text-gray-300 text-sm">
              Compassionate, community-based care for underserved families in Warren & Hamtramck
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              <li><Link to="/locations" className="text-gray-300 hover:text-white transition">Locations</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-white transition">Volunteer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition">Educational Materials</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition">Events & Flyers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">Email: barakahclinic@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Barakah Health Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

