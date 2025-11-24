import React from 'react'

const Footer = () => {
  return (
<>
<footer className="bg-gray-900 text-white shadow-lg">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-8">

      <div className="flex-1 text-left">
        <h1 className="text-3xl font-bold text-left">My Website</h1>
        <p className="text-gray-400 text-sm mt-1">Pen Wep Thi Mai Khoi Dai Rueang Thaorai</p>
      </div>

      <div className="flex-1 text-center">
        <h2 className="text-xl font-semibold mb-2 text-left">Quick Links</h2>
        <ul className="space-y-1 text-left">
          <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>

      <div className="flex-1 text-right">
        <h2 className="text-xl font-semibold mb-2 text-left" >Contact Us</h2>
        <ul className="space-y-1 text-gray-300 text-left">
          <li>📧 aroy@mywebsite.com</li>
          <li>📞 +66 123 456 789</li>
          <li>📍 Somewhere in Thailand</li>
        </ul>
      </div>

    </div>
  </div>
</footer>
</>
  )
}

export default Footer
