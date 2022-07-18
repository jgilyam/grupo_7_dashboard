import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

function SideBar() {
  return (
    <div>
      <nav>
        <ul>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact={true} element={<ContentWrapper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default SideBar;
