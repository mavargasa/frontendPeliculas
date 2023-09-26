import { useState } from "react";
import { saveUsuario } from "../../helpers/api.helper";
import Swal from "sweetalert2";

export default function Registro() {
  interface Usuario {
    dni: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    rol: string;
    telefono: string;
    correo: string;
    contrasena: string;
    nombre_usuario: string;
  }

  const [usuario, setUsuario] = useState<Usuario>({
    dni: "",
    nombres: "",
    apellidos: "",
    fecha_nacimiento: "",
    rol: "",
    telefono: "",
    correo: "",
    contrasena: "",
    nombre_usuario: "",
  });

  const onChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const sendForm = async () => {
    const response = await saveUsuario(usuario);
    Swal.fire({
      icon: "info",
      title: "Registro",
      text: response,
    });
    setUsuario({
      dni: "",
      nombres: "",
      apellidos: "",
      fecha_nacimiento: "",
      rol: "",
      telefono: "",
      correo: "",
      contrasena: "",
      nombre_usuario: "",
    });
    console.log(response);
  };

  const onSubmitForm = (value: React.SyntheticEvent) => {
    value.preventDefault();
    sendForm();
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <h1>Registro</h1>
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
                name="nombre_usuario"
                placeholder="Username"
                required
                value={usuario.nombre_usuario}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="text"
                name="nombres"
                required
                placeholder="Nombres"
                value={usuario.nombres}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="text"
                name="apellidos"
                required
                placeholder="Apellidos"
                value={usuario.apellidos}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="date"
                required
                name="fecha_nacimiento"
                placeholder="Fecha de nacimiento"
                value={usuario.fecha_nacimiento}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="text"
                name="rol"
                required
                placeholder="Rol"
                value={usuario.rol}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="number"
                name="telefono"
                required
                placeholder="Teléfono"
                value={usuario.telefono}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="email"
                name="correo"
                required
                placeholder="Correo"
                value={usuario.correo}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <input
                className="form-control"
                type="password"
                name="contrasena"
                required
                placeholder="Password"
                value={usuario.contrasena}
                onChange={onChangeInput}
              />
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button type="submit" className="btn btn-primary mt-2">
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
