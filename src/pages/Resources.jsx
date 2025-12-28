export default function Resources() {
  const resources = [
    {
      title: "Diabetes basics",
      description: "Understanding diabetes, its types, symptoms, and management strategies",
      icon: "📋"
    },
    {
      title: "Understanding blood pressure",
      description: "Learn about hypertension, normal ranges, and lifestyle modifications",
      icon: "🩺"
    },
    {
      title: "Healthy diet for South Asian families",
      description: "Nutritional guidance tailored to South Asian cuisine and dietary preferences",
      icon: "🥗"
    },
    {
      title: "Exercise tips for busy schedules",
      description: "Practical ways to incorporate physical activity into your daily routine",
      icon: "🏃"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Educational Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Downloadable educational materials to help you and your family maintain good health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4 text-center">{resource.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">{resource.title}</h3>
              <p className="text-gray-600 text-center mb-6">{resource.description}</p>
              <div className="text-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are continuously developing new educational materials. If you have suggestions for topics
            you'd like to see covered, please <a href="/contact" className="text-green-600 hover:text-green-700 font-semibold">contact us</a>.
          </p>
          <p className="text-gray-600">
            All materials are available in multiple languages including English, Bangla, Urdu, and Arabic.
          </p>
        </div>
      </div>
    </div>
  )
}

