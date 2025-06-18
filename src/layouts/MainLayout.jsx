import {Link, Outlet} from "react-router-dom"


//import './Layout.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Layout = () => {

    return (
      <>
        <Navbar />
        <Outlet /> 
        <Footer/>

      </>
    )
  }

  export default Layout;
