import React from "react";
import "../assets/css/sideBar.css";
import "../assets/css/reset.css";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Products from "./Products";
import ContentRow from "./ContentRow";
import TypesInDb from "./TypesInDb";
import LastProductCreated from "./LastProductCreated";

function SideBar() {
  return (
    <div className="main-container">
      <nav className="sidebar">
        <ul className="ul">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
            <Link className="nav-link" to="/ContentRow">
              Datos Totales
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/LastProductCreated">
              Ultimo Producto
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Products" > 
            Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="TypesInDb">
              Categorias Productos
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="http://localhost:4000/producto/create"
            >
              Crear Producto
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/ContentRow" element={<ContentRow />} />
        <Route path="/Products" element={<Products/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/TypesInDb" element={<TypesInDb />}></Route>
        <Route path="/LastProductCreated" element={<LastProductCreated />}></Route>
      </Routes>
    </div>
  );
}
export default SideBar;
