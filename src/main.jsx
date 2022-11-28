import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Errorpage from './routes/Errorpage.jsx'
import Landing from './routes/Landing.jsx'
import Register, { action as registerAction } from './routes/Register'
import { action as updateUserAction } from './routes/ProfileForm.jsx'
//import Layout from './routes/Layout.jsx'
import Login, { action as loginAction } from './routes/Login.jsx'
import Profile, { loader as profileDataLoader } from './routes/Profile'
import ProfileForm from './routes/ProfileForm.jsx'
import { action as mapAction } from './components/MapForm.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Landing />,
    errorElement: <Errorpage />,
    action: mapAction,
    children: [
      {
        path: "/login",
        element: <Login />,
        action: loginAction
      },
      {
        path: "/signup",
        element: <Register />,
        action: registerAction
      }
    ]
  },
  {
    path: "/profile",
    element: <Profile />,
    loader: profileDataLoader,
    action: updateUserAction,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
