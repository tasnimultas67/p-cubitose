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
import Login from './Pages/Login/Login.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import AddPortfolio from './Pages/AddPortfolio/AddPortfolio.jsx'
import AddCustomerReview from './Pages/AddCustomerReview/AddCustomerReview.jsx'
import PPortfolios from './Pages/PPortfolios/PPortfolios.jsx'


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
      },
      {
        path: '/team-login',
        element: <Login></Login>
      },
      {
        path: '/add-portfolio',
        element: <AddPortfolio></AddPortfolio>
      },
      {
        path: '/add-customer-review',
        element: <AddCustomerReview></AddCustomerReview>
      },
      {
        path: '/portfolios',
        element: <PPortfolios></PPortfolios>,
        loader: () => fetch('https://cubitose-backend-production.up.railway.app/portfolio')
      },
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
