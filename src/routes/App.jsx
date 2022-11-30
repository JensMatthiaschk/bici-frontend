import Navbar from '../components/Navbar'
import Map from '../components//map/Map.jsx'
import Searchbar from '../components/Searchbar'
import React, { useState } from 'react'
import { verifier } from '../authservice'
import { useNavigate } from 'react-router-dom'





const App = () => {
  const navigate = useNavigate();
  (async () => {
    const token = await verifier();
    // console.log('tok1', token)
    if (!token) return navigate("/login");

  })();

  const [searchToggle, setSearchToggle] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <div className='relative'>
        <div className="w-full">
          <Map />
        </div>
        {!searchToggle ?
          <button onClick={() => setSearchToggle(true)} className="absolute top-16 btn  rounded-full ">🔎</button> :
          <div className="absolute top-16 "><Searchbar /></div>}
      </div>
    </div>
  )
}

export default App
