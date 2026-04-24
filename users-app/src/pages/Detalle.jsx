import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Detalle() {
  const { id } = useParams();

  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCargando(true);
    setError(false);

    fetch(`https://jsonplaceholder.typicode.com/users/${Number(id)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          setError(true);
        } else {
          setUsuario(data);
        }
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, [id]);

    if (cargando) return <p className="center">Cargando...</p>;
    if (error) return <p className="center">Usuario no encontrado</p>;

    return (
    <div className="container">
        <div className="result-card">
            <div className="avatar">
            {usuario.name[0]}
            </div>

            <h2>{usuario.name}</h2>
            <p>ID #{usuario.id}</p>

            <div className="label">Email</div>
            <div className="value">{usuario.email}</div>

            <div className="label">Ciudad</div>
            <div className="value">{usuario.address.city}</div>

            <div className="label">Empresa</div>
            <div className="value">{usuario.company.name}</div>

            <Link to="/" className="back">← Volver</Link>
        </div>
    </div>
  );
}

export default Detalle;