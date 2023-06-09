import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { redux_globalMode, redux_store } from "../redux/store";

export default function Navbar() {
  const IsLightMode = useSelector(
    (state: redux_store) => state.GlobalMode.IsLight
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={{ pathname: "/" }}>
            Home
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={{ pathname: "/" }}>
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  小功能
                </div>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link
                      className="dropdown-item"
                      to={{ pathname: "/smallFx/Calendar" }}
                    >
                      Calendar
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className="dropdown-item"
                      to={{ pathname: "/smallFx/SlotMachine" }}
                    >
                      SlotMachine
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={{ pathname: "/" }}>
                      maybe something else
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <span className="material-icons">wb_sunny</span>
            {/*<form className="d-flex" role="search">*/}
            {/*    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
            {/*        <button className="btn btn-outline-success" type="submit">Search</button>*/}
            {/*</form>*/}
          </div>
        </div>
      </nav>
    </>
  );
}
