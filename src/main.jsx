import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage.jsx'
import Layout from './routes/Layout.jsx'
import Login from './routes/Login.jsx'
import Profile from './routes/Profile.jsx'
import Register from './routes/Register.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<LandingPage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
  </Route>

))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
