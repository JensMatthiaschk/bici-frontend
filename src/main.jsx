import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Errorpage from './routes/Errorpage.jsx'
import Landing from './routes/Landing.jsx'
import Register, { action as registerAction } from './routes/Register'
//import Layout from './routes/Layout.jsx'
import Login, { action as loginAction } from './routes/Login.jsx'

import Profile from './routes/Profile'



const router = createBrowserRouter([

  {
    path: "/a",
    element: <App />
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction
  },


  {
    path: "profile/",
    element: <Profile />,

  },

  {
    path: "/",
    element: <Landing />,
    errorElement: <Errorpage />,
    children: [

      {
        path: "login",
        element: <Login />,
        action: loginAction


      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <RouterProvider router={router} />
)
