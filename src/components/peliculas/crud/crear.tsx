import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { savePelicula } from "../../../helpers/api.helper";
import Swal from "sweetalert2";

export default function Crear() {
  const navigate = useNavigate();
  interface Pelicula {
    titulo: string;
    horario: string;
    genero: string;
    calificacion: string;
  }

  const [pelicula, setPelicula] = useState<Pelicula>({
    titulo: "",
    horario: "",
    genero: "",
    calificacion: "",
  });

  const onChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setPelicula({
      ...pelicula,
      [name]: value,
    });
  };

  const onSubmitForm = async (value: React.SyntheticEvent) => {
    value.preventDefault();
    const response = await savePelicula("administrador", pelicula);
    Swal.fire({
      icon: "info",
      title: "Registro",
      text: response,
    }).then((r) => {
      if (r.isConfirmed) {
        navigate("/peliculas/ver");
      }
    });
  };

  return (
    <>
      <h3>Crear</h3>
      <form onSubmit={onSubmitForm}>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="row d-flex">
              <input
                className="form-control"
                type="text"
                name="titulo"
                required
                placeholder="Titulo"
                value={pelicula.titulo}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="text"
                name="horario"
                placeholder="Horario"
                required
                value={pelicula.horario}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="text"
                name="genero"
                placeholder="Género"
                required
                value={pelicula.genero}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="text"
                name="calificacion"
                placeholder="Calificación"
                required
                value={pelicula.calificacion}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button type="submit" className="btn btn-primary mt-2">
                  Crear
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
