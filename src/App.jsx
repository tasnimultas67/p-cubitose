import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'

const titleMap = [
    {path: '/', title:'Cubitose - Next Generation Tech Solutions'},
    {path: '/about-us', title:'About Us - Cubitose'},
    {path: '/portfolios', title:'Portfolios - Cubitose'},
  { path: '/contact-us', title: 'Contact Us - Cubitose' },
  { path: '/add-portfolio', title: 'Add Portfolio - Cubitose' },
  { path: '/add-customer-review', title: 'Add Customer Review - Cubitose' },
    // Services
    {path: '/services/web-development', title:'Web Development - Cubitose'},
    {path: '/services/graphics-design', title:'Graphics Design - Cubitose'},
    {path: '/services/digital-marketingn', title:'Digital Marketing - Cubitose'},
    {path: '/*', title:'404 - Cubitose'},
]

function App() {
  const [pageTitle, setPageTitle] = useState('Cubitose - Next Generation Tech Solutions');
  let pageLocation = useLocation()
   useEffect(() => {
    const pageTitle = titleMap.find(item => item.path === pageLocation.pathname)
    if(pageTitle && pageTitle.title){
      setPageTitle(pageTitle.title)
      document.title = pageTitle.title
    }
   }, [pageLocation.pathname])
  
  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
        return location.pathname;
      }}/>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
