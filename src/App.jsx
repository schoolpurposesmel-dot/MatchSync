import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className = "flex items-center justify-between bg-gray-950 px-8 py-5 text-white">
        <h2 className = "text-2xl font-bold text - purple-500"> MATCHSYNC </h2>

        <div className = "flex items-center gap-8">
          <a href="#" classsName = "text-gray-300 hover:text-white"> Home </a>
          <a href="#" className = "text-gray-300 hover:text-white"> Scrims </a>
          <a href="#" className = "text-gray-300 hover:text-white"> Tournaments </a>
          <a href="#" className = "text-gray-300 hover:text-white"> Dashboard </a>
        </div>

        <button className = "rounded-lg bg-purple-600 px-5 py-2 font-semibold hover:bg-purple-700">Sign Up</button>

      </nav>

      <section className = "bg-gradient-to-br from-gray-900 via-gray-950 to-purple-950 px-8 py-24 text-white" >
        <div className = "mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold text-purple-500">
          Find Your Next <span className="text-purple-500">Rival</span>
        </h1>

        <p className = "mt-6 max-w-2xl text-lg text-gray-400">
          MatchSync connects esports teams for competitive scrims and tournaments.
          Find opponents, schedule matches, and prove your skills.
        </p> 

      
        <div className = "mt-8 flex gap-4">
        <button className = "rounded-lg bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"> 
          Find Scrims 
          </button>
        <button className = "rounded-lg bg-gray-600 px-6 py-3 font-semibold hover:bg-gray-700"> 
          View Tournaments 
          </button>

    </div>
    </div>
  </section>
  </div>
  )
}


export default App
