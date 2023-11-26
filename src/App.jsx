import { Outlet, ScrollRestoration } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

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
