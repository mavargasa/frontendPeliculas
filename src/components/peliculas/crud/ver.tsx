import { useEffect, useState } from "react";
import { getAllPeliculas, deletePelicula } from "../../../helpers/api.helper";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Ver() {
  const navigate = useNavigate();
  interface Peliculas {
    _id: string;
    calificacion: string;
    genero: string;
    horario: string;
    titulo: string;
  }

  const [peliculas, setPeliculas] = useState<Peliculas[]>();

  useEffect(() => {
    getAllPeliculas().then((response) => {
      setPeliculas(response);
    });
  }, []);

  const goToEdit = (id: string) => {
    navigate(`/peliculas/editar/${id}`);
  };

  const deleteMovie = async (id: string) => {
    const response = await deletePelicula(id);
    Swal.fire({
      icon: "info",
      title: "Registro",
      text: response,
    }).then((r) => {
      if (r.isConfirmed) {
        navigate(0);
      }
    });
  };

  return (
    <>
      <h3>Ver</h3>
      <div className="row">
        {peliculas?.map((movie, index) => {
          return (
            <div
              key={index}
              className="d-flex justify-content-center col-xl-4 col-lg-4 col-md-6 col-sm-12"
              style={{ position: "relative" }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <a
                  onClick={() => deleteMovie(movie._id)}
                  className="fs-3 text-white mx-2"
                  style={{ position: "absolute", right: 0, cursor: "pointer" }}
                >
                  <i className="bi bi-x-circle-fill"></i>
                </a>
                <img
                  src="https://source.unsplash.com/random"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title"> {movie.titulo}</h5>
                  <p className="card-text">{movie.calificacion}</p>
                  <span> {movie.genero} </span>
                  <a
                    onClick={() => goToEdit(movie._id)}
                    className="btn btn-primary mt-2"
                  >
                    Editar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
