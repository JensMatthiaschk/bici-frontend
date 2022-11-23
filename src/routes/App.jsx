<<<<<<< HEAD:src/routes/App.jsx
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map.jsx'
function App() {


  return (
    <div className="App">
      <Navbar />
      <h1>Hello World!</h1>
      <Map />
    </div>
  )
}
=======
import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage.jsx'
import Layout from './routes/Layout.jsx'
import Login from './routes/Login.jsx'
import Profile from './routes/Profile.jsx'
import Register from './routes/Register.jsx'

>>>>>>> 4e0cd3645761b59be458e59cf932490c97cd86a3:src/App.jsx

export default function App() {

}