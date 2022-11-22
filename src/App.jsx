import { useState } from 'react'
import Navbar from './components/Navbar'
import Map from './components/Map.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <h1>Hello World!</h1>
      <Map/>
    </div>
  )
}

export default App
