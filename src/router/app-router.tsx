import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Peliculas from "../components/peliculas/Peliculas";
import Login from "../components/login/Login";
import Registro from "../components/registro/Registro";
import Ver from "../components/peliculas/crud/ver";
import Crear from "../components/peliculas/crud/crear";
import Editar from "../components/peliculas/crud/editar";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "peliculas",
        element: <Peliculas />,
        children: [
          {
            path: "ver",
            element: <Ver />,
          },
          {
            path: "crear",
            element: <Crear />,
          },
          {
            path: "editar/:id",
            element: <Editar />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registro",
        element: <Registro />,
      },
    ],
  },
]);
