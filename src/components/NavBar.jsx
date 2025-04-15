import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
    {/* <a href="/">Home</a>
    <a href="/directors">Directors</a>
    <a href="/actors">Actors</a> */
    }
    <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/directors" className="nav-link">
        Directors
      </NavLink>
      <NavLink to="/actors" className="nav-link">
        Actors
      </NavLink>

  </nav>
    );
};

export default NavBar;
