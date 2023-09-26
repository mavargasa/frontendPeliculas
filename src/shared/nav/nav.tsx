import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.entries(data).length > 0) {
      setUser(data.nombre_usuario);
    }
  }, []);

  const onLogOut = () => {
    localStorage.removeItem("user");
    navigate(0);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between">
      <div className="container-fluid">
        <NavLink to={"/peliculas"} className="navbar-brand">
          Movies HD
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user !== "" && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Películas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to={"/peliculas/ver"} className="dropdown-item">
                      Ver
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/peliculas/crear"} className="dropdown-item">
                      Ingresar
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
            <li className="nav-item">
              <NavLink to={"/login"} className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/registro"} className="nav-link">
                Registro
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                onClick={onLogOut}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="mx-4"> {user} </span>
    </nav>
  );
}
