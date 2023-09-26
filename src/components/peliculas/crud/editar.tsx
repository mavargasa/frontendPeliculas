import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPelicula, updatePelicula } from "../../../helpers/api.helper";
import Swal from "sweetalert2";

export default function Editar() {
  const params = useParams();
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

  useEffect(() => {
    getPelicula(params.id!).then((response) => {
      if (response !== null) {
        setPelicula(response!);
      }
    });
  }, []);

  const onChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setPelicula({
      ...pelicula,
      [name]: value,
    });
  };

  const onSubmitForm = async (value: React.SyntheticEvent) => {
    value.preventDefault();
    const response = await updatePelicula(
      params.id!,
      "administrador",
      pelicula
    );
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
      <h3>Editar</h3>
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
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
