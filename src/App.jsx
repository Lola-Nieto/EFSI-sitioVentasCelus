import {BrowserRouter, Routes, Route} from "react-router-dom"

import Layout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import Contacto from "./components/Contacto.jsx";
import DetalleProducto from "./components/DetalleProducto.jsx";
import Productos from "./components/Productos.jsx";
import QuienesSomos from "./components/QuienesSomos.jsx";
import NotFound from "./components/NotFound.jsx";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}></Route>
            <Route path="/productos/:idCelular" element={<DetalleProducto />}></Route>
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
