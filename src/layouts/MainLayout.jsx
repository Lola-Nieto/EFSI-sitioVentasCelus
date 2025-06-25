import {Link, Outlet} from "react-router-dom"


import '../styles/Layout.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Layout = () => {

    return (
      <>
        <div className="contenido">
        <Navbar />
        <div className="contEspecifico">
        <Outlet /> 
        </div>
        <Footer/>
        </div>

      </>
    )
  }

  export default Layout;
