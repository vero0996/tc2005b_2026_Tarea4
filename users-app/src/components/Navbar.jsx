import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar-title">Buscador de Usuarios</span>
      <div className="nav-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/usuarios">Usuarios</NavLink>
      </div>
    </div>
  );
}

export default Navbar;