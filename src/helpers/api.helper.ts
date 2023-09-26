import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5555/" });

async function saveUsuario(user: Registro) {
  try {
    const result = await api.post("/nuevo-usuario", user);
    if (result.status === 200) {
      return "Usuario registrado";
    } else {
      return "Hubo un problema";
    }
  } catch (error) {
    console.log(error);
  }
}

async function findUsuario(user: Login) {
  try {
    const result = await api.put(`/obtener-usuario/${user.dni}`, user);
    if (result.status === 200) {
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getAllPeliculas() {
  try {
    const result = await api.get("/pelicula-todos");
    if (result.status === 200) {
      return result.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
}
async function savePelicula(rol: string, pelicula: Pelicula) {
  try {
    const result = await api.post(`/nueva-pelicula/${rol}`, pelicula);
    if (result.status === 200) {
      return "Pelicula registrada";
    } else {
      return "Hubo un problema";
    }
  } catch (error) {
    console.log(error);
  }
}
async function updatePelicula(id: string, rol: string, pelicula: Pelicula) {
  try {
    const result = await api.put(`/actualizar-pelicula/${id}`, {
      rol,
      pelicula,
    });
    if (result.status === 200) {
      return "Pelicula actualizada";
    } else {
      return "Hubo un problema";
    }
  } catch (error) {
    console.log(error);
  }
}
async function getPelicula(id: string) {
  try {
    const result = await api.get<Pelicula>(`/obtener-pelicula/${id}`);
    if (result.status === 200) {
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
async function deletePelicula(id: string) {
  try {
    const result = await api.delete(`/eliminar-pelicula/${id}`);
    if (result.status === 200) {
      return "Pelicula eliminada";
    } else {
      return "Hubo un problema";
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  saveUsuario,
  findUsuario,
  getAllPeliculas,
  savePelicula,
  updatePelicula,
  getPelicula,
  deletePelicula,
};

interface Registro {
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

interface Login {
  dni: string;
  contrasena: string;
}

interface Pelicula {
  titulo: string;
  horario: string;
  genero: string;
  calificacion: string;
}
