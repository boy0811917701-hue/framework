import React from 'react'

const Header = () => {
  return (
   <>
   <header className='bg-blue-600 text-white shadow-lg'>
    <div className='container mx-auto px-4 py-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>My Website</h1>
          <p className='text-blue-100 text-sm mt-1'>Welcome to สักอย่าง</p>
        </div>
        <nav>
          <ul className='flex space-x-6'>
            <li><a href='#home' className='hover:text-blue-200 transition'>Home</a></li>
            <li><a href='#about' className='hover:text-blue-200 transition'>about</a></li>
            <li><a href='#contact' className='hover:text-blue-200 transition'>contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
   </header>
   </>
  )
}

export default Header
