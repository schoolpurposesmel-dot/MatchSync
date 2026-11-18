
function Navbar() {
    return (
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
    )
}

export default Navbar