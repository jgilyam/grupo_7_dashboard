import React from "react";
import "../assets/css/sideBar.css";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import ContentRow from "./ContentRow";

function SideBar() {
  return (
    <div className="main-container">
      <nav className="sidebar">
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/ContentRow">
              Dashboard
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
            <Link className="nav-link" to="/asd">
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Link
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/ContentRow" element={<ContentRow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default SideBar;
