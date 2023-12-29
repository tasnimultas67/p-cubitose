/* eslint-disable no-unused-vars */
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

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
  const [showTopBtn, setShowTopBtn] = useState(false);
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
    
  }, [])
  useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
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
      {/* Top button */}
      <div>
        {" "}
            {showTopBtn && (
          <div className='bg-white rounded drop-shadow-2xl shadow fixed bottom-3 right-5 p-3 z-[1000] cursor-pointer transition-all duration-300 animate-bounce'>
            <ArrowUpIcon 
                    className="text-themeColor h-5 w-5 2xl:h-9 2xl:w-9"
                    onClick={goToTop}
                />
                </div>
            )}{" "}
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
