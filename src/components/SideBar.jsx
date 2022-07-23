import React from "react";
import "../assets/css/sideBar.css";
import "../assets/css/reset.css"
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import ContentRow from "./ContentRow";
import TypesInDb from "./TypesInDb";

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
            <Link className="nav-link" to="#">
              Ultimo Producto
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="TypesInDb">
            Categorias Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
            Crear Producto
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/ContentRow" element={<ContentRow />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/TypesInDb" element={<TypesInDb />}></Route>
      </Routes>
    </div>
  );
}
export default SideBar;
