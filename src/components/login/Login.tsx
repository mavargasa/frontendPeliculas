import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUsuario } from "../../helpers/api.helper";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  interface Usuario {
    dni: string;
    contrasena: string;
  }

  const [usuario, setUsuario] = useState<Usuario>({
    dni: "",
    contrasena: "",
  });

  const onChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const sendForm = async () => {
    const response = await findUsuario(usuario);
    if (response !== null) {
      localStorage.setItem("user", JSON.stringify(response));
      Swal.fire({
        icon: "info",
        title: "Registro",
        text: "Usuario logeado",
      }).then((r) => {
        if (r.isConfirmed) {
          navigate(0);
        }
      });
      setUsuario({
        dni: "",
        contrasena: "",
      });
    }
  };

  const onSubmitForm = (value: React.SyntheticEvent) => {
    value.preventDefault();
    sendForm();
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <h1>Login</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="row d-flex">
              <input
                className="form-control"
                type="number"
                name="dni"
                required
                placeholder="DNI"
                value={usuario.dni}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="text"
                name="contrasena"
                placeholder="Password"
                required
                value={usuario.contrasena}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button type="submit" className="btn btn-primary mt-2">
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
