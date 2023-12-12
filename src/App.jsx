/* eslint-disable no-unused-vars */
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'

import MessengerCustomerChat from 'react-messenger-customer-chat';

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
  
  useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
          document.removeEventListener('contextmenu', handleContextmenu)

          
          document.onkeydown = function (e) {
          if (event.keyCode == 123) {
              return false;
          }
          if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
              return false;
          }
          if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
              return false;
          }
          if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
              return false;
          }
      }
        }
    
}, [ ])
  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
        return location.pathname;
      }}/>
      <Header></Header>
      <Outlet></Outlet>
      <MessengerCustomerChat
          pageId={import.meta.env.VITE_FACEBOOK_PAGE_ID}
          appId={import.meta.env.VITE_FACEBOOK_APP_ID}
        />
      <Footer></Footer>
    </>
  )
}

export default App
