import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Detalle() {
  const { id } = useParams();

  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCargando(true);
    setError(false);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          setError(true);
        } else {
          setDatos(data);
        }
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return (
      <div className="card">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <p>Usuario no encontrado.</p>
        <Link to="/" className="volver">← Volver</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="usuario-header">
        <div className="avatar">{datos.name[0]}{datos.name.split(" ")[1]?.[0]}</div>
        <div>
          <h2>{datos.name}</h2>
          <p className="subtitulo">ID #{datos.id}</p>
        </div>
      </div>

      <div className="campo">
        <span className="campo-label">Email</span>
        <span className="campo-valor link">{datos.email}</span>
      </div>

      <div className="campo">
        <span className="campo-label">Ciudad</span>
        <span className="campo-valor">{datos.address.city}</span>
      </div>

      <div className="campo">
        <span className="campo-label">Empresa</span>
        <span className="campo-valor">{datos.company.name}</span>
      </div>

      <Link to="/" className="volver">← Volver</Link>
    </div>
  );
}

export default Detalle;