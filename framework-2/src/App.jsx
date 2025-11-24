import React from 'react'
import Header from './componends/Header'
import Foots from './componends/Foots'
import MemberCard from './MemberCard'

const App = () => {
  const teamMembers = [
    { name: "com", role: "computer", icon: "computer.png" },
    { name: "อุปกรณ์", role: "เมาส์ คีย์บอร์ด เคส", icon: "home.png" },
    { name: "ของเสริม", role: "GPU CPU Ram", icon: "shopping-cart.png" },
  ];

  return (
    <div>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to Our Website</h2>
            <p className="text-xl mb-8">Aroy</p>

            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>

          </div>
        </section>
        <section className="py-16 bg-blue-400">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service</h2>
              <p className="text-gray-600 text-lg">Everything you need to succeed</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {teamMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                icon={member.icon}
                
              />
            ))}

          </div>
        </section>
      </main>
          






      <Foots />
    </div>
  )
}

export default App
