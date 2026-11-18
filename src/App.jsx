import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav>
        <h2> MATCHSYNC </h2>

        <div>
          <a href="#">Home</a>
          <a href="#">Scrims</a>
          <a href="#">Tournaments</a>
          <a href="#">Dashboard</a>
        </div>

        <button>Sign Up</button>

      </nav>

      <section>
        <h1>MATCHSYNC</h1>
        <p>Expert Matchmaking & Tournament Platform</p>

        <button> Find Scrims </button>
        <button> View Tournaments </button>

      </section>

      <section>
        <h2>Games Available</h2>
      </section>

      
    </div>
  )
}


export default App
