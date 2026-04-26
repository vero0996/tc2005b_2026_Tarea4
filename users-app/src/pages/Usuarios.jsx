import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, []);

  if (cargando) return <div className="card"><div className="loader"></div></div>;
  if (error) return <div className="card"><p>Error al cargar usuarios.</p></div>;

  return (
    <div className="card">
      <h2>Usuarios</h2>
      <ul className="lista-usuarios">
        {usuarios.map((user) => (
          <li key={user.id}>
            <Link to={`/usuario/${user.id}`}>
              <div className="avatar small">{user.name[0]}{user.name.split(" ")[1]?.[0]}</div>
              <div>
                <p className="nombre">{user.name}</p>
                <p className="email">{user.email}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;