import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc,
  query,
  orderBy 
} from 'firebase/firestore'
import { db } from '../firebase/config'

export default function Events() {
  const { currentUser } = useAuth()
  const [flyers, setFlyers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    image: null,
    imageFile: null
  })

  // Load flyers from Firestore
  useEffect(() => {
    loadFlyers()
  }, [])

  const loadFlyers = async () => {
    try {
      const flyersRef = collection(db, 'flyers')
      const q = query(flyersRef, orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      const flyersData = []
      querySnapshot.forEach((doc) => {
        flyersData.push({ id: doc.id, ...doc.data() })
      })
      setFlyers(flyersData)
    } catch (error) {
      console.error('Error loading flyers:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result,
          imageFile: file
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!currentUser) return

    try {
      setUploading(true)
      let imageBase64 = null

      // Store image as base64 directly in Firestore (free, no Storage needed)
      // Note: Firestore has a 1MB limit per document, so compress large images
      if (formData.image) {
        // Compress image if it's too large
        const maxSize = 800000 // 800KB limit to stay under 1MB
        if (formData.image.length > maxSize) {
          // Compress the image
          const img = new Image()
          img.src = formData.image
          await new Promise((resolve) => {
            img.onload = () => {
              const canvas = document.createElement('canvas')
              let width = img.width
              let height = img.height
              
              // Calculate new dimensions to reduce file size
              const maxDimension = 1200
              if (width > maxDimension || height > maxDimension) {
                if (width > height) {
                  height = (height / width) * maxDimension
                  width = maxDimension
                } else {
                  width = (width / height) * maxDimension
                  height = maxDimension
                }
              }
              
              canvas.width = width
              canvas.height = height
              const ctx = canvas.getContext('2d')
              ctx.drawImage(img, 0, 0, width, height)
              
              // Convert to base64 with quality compression
              imageBase64 = canvas.toDataURL('image/jpeg', 0.7)
              resolve()
            }
          })
        } else {
          imageBase64 = formData.image
        }
      }

      // Add flyer to Firestore
      const flyerData = {
        title: formData.title,
        date: formData.date,
        location: formData.location,
        description: formData.description,
        imageBase64: imageBase64, // Store as base64 instead of URL
        createdAt: new Date(),
        createdBy: currentUser.email
      }

      await addDoc(collection(db, 'flyers'), flyerData)
      
      // Reset form and reload flyers
      setFormData({
        title: '',
        date: '',
        location: '',
        description: '',
        image: null,
        imageFile: null
      })
      setShowAddForm(false)
      loadFlyers()
    } catch (error) {
      console.error('Error adding flyer:', error)
      alert('Failed to add flyer. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!currentUser) return
    if (!window.confirm('Are you sure you want to delete this flyer?')) return

    try {
      await deleteDoc(doc(db, 'flyers', id))
      loadFlyers()
    } catch (error) {
      console.error('Error deleting flyer:', error)
      alert('Failed to delete flyer. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading flyers...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Events & Flyers</h1>
          {currentUser && (
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
            >
              {showAddForm ? 'Cancel' : '+ Add New Flyer'}
            </button>
          )}
          {!currentUser && (
            <p className="text-gray-600 text-sm">
              <a href="/login" className="text-green-600 hover:text-green-700 font-semibold">Login</a> to manage flyers
            </p>
          )}
        </div>

        {/* Add Flyer Form - Only visible to logged-in users */}
        {showAddForm && currentUser && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Event Flyer</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="e.g., Free Health Screening Event"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="e.g., March 15, 2024"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="e.g., Al Ihsaan Islamic Center"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="Event details and information..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Flyer Image *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
                {formData.image && (
                  <div className="mt-4">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="max-w-md h-64 object-contain border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Uploading...' : 'Add Flyer'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    setFormData({
                      title: '',
                      date: '',
                      location: '',
                      description: '',
                      image: null,
                      imageFile: null
                    })
                  }}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Flyers Grid */}
        {flyers.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-xl text-gray-600">No flyers yet.</p>
            {currentUser && (
              <p className="text-gray-500 mt-2">Click "Add New Flyer" to get started!</p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flyers.map((flyer) => (
              <div key={flyer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                {(flyer.imageBase64 || flyer.imageUrl) ? (
                  <img
                    src={flyer.imageBase64 || flyer.imageUrl}
                    alt={flyer.title}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{flyer.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {flyer.date}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {flyer.location}
                    </p>
                  </div>
                  {flyer.description && (
                    <p className="text-gray-700 mb-4">{flyer.description}</p>
                  )}
                  {currentUser && (
                    <button
                      onClick={() => handleDelete(flyer.id)}
                      className="w-full bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition"
                    >
                      Delete Flyer
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
