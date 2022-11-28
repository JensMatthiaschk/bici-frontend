import Navbar from '../components/Navbar'
import Map from '../components//map/Map.jsx'
import Searchbar from '../components/Searchbar'
import React, { useState } from 'react'


const App = () => {
  const searchParams = window.location.search
  console.log(searchParams)
  const [searchToggle, setSearchToggle] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <div className='relative'>
        <div className="w-full">
          <Map />
        </div>
        {!searchToggle ? <button onClick={() => setSearchToggle(true)} className="absolute top-16 btn  rounded-full ">🔎</button> : <div className="absolute top-16 "><Searchbar /></div>}
      </div>
      <button onClick={() => setSearchToggle(!searchToggle)} className="absolute top-0 btn  rounded-full ">🔎</button>
    </div>
  )
}

export default App
