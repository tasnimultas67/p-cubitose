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
import Login from './Pages/Login/Login.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import AddPortfolio from './Pages/AddPortfolio/AddPortfolio.jsx'
import AddCustomerReview from './Pages/AddCustomerReview/AddCustomerReview.jsx'
import PPortfolios from './Pages/PPortfolios/PPortfolios.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import PrivateRoutes from './Routes/PrivateRoutes.jsx'
import Seo from './Pages/Services/Seo/Seo.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import DashHome from './Pages/Dashboard/DashHome.jsx'
import ManagePortfolio from './Pages/ManagePortfolio/ManagePortfolio.jsx'
import UpdatePortfolio from './Pages/UpdatePortfolio/UpdatePortfolio.jsx'
import AddTeam from './Pages/AddTeam/AddTeam.jsx'
import ManageTeams from './Pages/ManageTeams/ManageTeams.jsx'
import UpdateTeam from './Pages/UpdateTeam/UpdateTeam.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
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
        element: <WebDevelopment></WebDevelopment>,
        loader: ()=> fetch('https://cubitose-backend-production.up.railway.app/review/web-development')
      },
      {
        path: '/services/graphics-design',
        element: <GraphicsDesign></GraphicsDesign>,
        loader: () => fetch("https://cubitose-backend-production.up.railway.app/review/graphics-design")
      },
      {
        path: '/services/search-engine-optimization',
        element: <Seo></Seo>,
        loader: ()=> fetch("https://cubitose-backend-production.up.railway.app/review/digital-marketing")
      },
      // Services page end
      {
        path: '/team-login',
        element: <Login></Login>
      },
      
      {
        path: '/portfolios',
        element: <PPortfolios></PPortfolios>,
        loader: () => fetch('https://cubitose-backend-production.up.railway.app/portfolio')
      },
      
    ]
  },
  // Dashboard
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: '/dashboard',
        element: <DashHome></DashHome>
    },
      {
        path: '/dashboard/add-portfolio',
        element: <PrivateRoutes><AddPortfolio></AddPortfolio></PrivateRoutes> 
      },
      {
        path: '/dashboard/manage-portfolio',
        element: <PrivateRoutes><ManagePortfolio></ManagePortfolio></PrivateRoutes>,
        loader: ()=> fetch('https://cubitose-backend-production.up.railway.app/portfolio')
      },
      {
        path: '/dashboard/add-customer-review',
        element: <PrivateRoutes><AddCustomerReview></AddCustomerReview></PrivateRoutes>
      },
      {
        path: '/dashboard/update-portfolio/:id',
        element: <PrivateRoutes><UpdatePortfolio></UpdatePortfolio></PrivateRoutes>,
        loader: ({params}) => fetch(`https://cubitose-backend-production.up.railway.app/portfolio/${params.id}`)
      },
      {
        path: '/dashboard/add-team',
        element: <PrivateRoutes><AddTeam></AddTeam></PrivateRoutes>
      },
      {
        path: '/dashboard/manage-teams',
        element: <PrivateRoutes><ManageTeams></ManageTeams></PrivateRoutes>
      },
      {
        path: '/dashboard/update-team/:id',
        element: <PrivateRoutes><UpdateTeam></UpdateTeam></PrivateRoutes>,
        loader: ({params}) => fetch(`https://cubitose-backend-production.up.railway.app/teams/${params.id}`)
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
