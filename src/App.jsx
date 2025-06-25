import {BrowserRouter, Routes, Route} from "react-router-dom"

import Layout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Contacto from "./pages/Contacto.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
import Productos from "./pages/Productos.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import NotFound from "./components/NotFound.jsx";

import './App.css'

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}></Route>
            <Route path="/productosD/:idCelular" element={<DetalleProducto />}></Route>
            <Route path="/productos" element={<Productos />}></Route>
            <Route path="/productos/:idMarca" element={<Productos />}></Route>
            <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="*" element={<NotFound/>}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
