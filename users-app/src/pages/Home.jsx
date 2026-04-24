import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  function handleBuscar() {
    navigate(`/usuario/${id}`);
  }

  return (
    <div className="container">
        <div className="search-card">
            <h1>Buscar usuario</h1>
            <p>Selecciona un ID del 1 al 10</p>

            <input
            type="number"
            min="1"
            max="10"
            value={id}
            onChange={(e) => setId(e.target.value)}
            />

            <button onClick={handleBuscar}>
            Buscar →
            </button>
        </div>
    </div>
  );
}

export default Home;