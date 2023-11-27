import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import ContactUs from './Pages/ContactUs/ContactUs.jsx'
import WebDevelopment from './Pages/Services/WebDevelopment/WebDevelopment.jsx'
import GraphicsDesign from './Pages/Services/GraphicsDesign/GraphicsDesign.jsx'
import DigitalMarketing from './Pages/Services/DigitalMarketing/DigitalMarketing.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
      // Services Page
      {
        path: '/services/web-development',
        element: <WebDevelopment></WebDevelopment>
      },
      {
        path: '/services/graphics-design',
        element: <GraphicsDesign></GraphicsDesign>
      },
      {
        path: '/services/digital-marketing',
        element: <DigitalMarketing></DigitalMarketing>
      }
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
