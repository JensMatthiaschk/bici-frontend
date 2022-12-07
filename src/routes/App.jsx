import Navbar from '../components/Navbar'
import Map from '../components//map/Map.jsx'
import Searchbar from '../components/Searchbar'
import React, { useState, useContext } from 'react'
import { verifier } from '../authservice'
import { useNavigate } from 'react-router-dom'
import { MapContext } from '../components/mapContext'




const App = () => {
  const navigate = useNavigate();
  (async () => {
    const token = await verifier();
    // console.log('tok1', token)
    if (!token.success) return navigate("/login");

  })();

  const { searchToggle, setSearchToggle } = useContext(MapContext);
  return (
    <div className="App">
      <Navbar />
      <div className='relative'>
        <div className="w-full">
          <Map />
          {!searchToggle ?
            <button onClick={() => setSearchToggle(true)} className="absolute btn rounded-full right-8 bottom-8 p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 font-medium">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button> :
            <div className="absolute right-8 bottom-8 z-10"><Searchbar /></div>}
          <img src="/assets/bici-logo.png" alt="logo" className="w-32 absolute left-5 sm:left-10 bottom-3 sm:bottom-10 invert-[.15] hover:invert-0" />
        </div>
      </div>
    </div>
  )
}

export default App
