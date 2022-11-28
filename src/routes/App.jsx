import Navbar from '../components/Navbar'
import Map from '../components//map/Map.jsx'


import React from 'react'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className='relative'>
        <div className="drawer-content w-full">
          <Map />
        </div>
        <button class="absolute top-16 btn  rounded-full">🔎</button>
      </div>

    </div>
  )
}

export default App
