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
            <button onClick={() => setSearchToggle(true)} className="absolute btn rounded-full right-10 bottom-10 p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 font-medium">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button> :
            <div className="absolute right-10 bottom-10"><Searchbar /></div>}
          {/* <div className="flex justify-end items-end h-full w-fit relative top-540">
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
