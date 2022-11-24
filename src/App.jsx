import { useState } from 'react'
import Map from './components/Map.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Map/>
    </div>
  )
}

export default App
