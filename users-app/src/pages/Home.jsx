import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  function handleBuscar() {
    if (!id || id < 1 || id > 10) return;
    navigate(`/usuario/${id}`);
  }

  return (
    <div className="card">
      <h2>Buscar usuario</h2>
      <p className="subtitulo">Selecciona un ID del 1 al 10</p>

      <div className="search-row">
        <input
          type="number"
          min="1"
          max="10"
          placeholder="ID: 3"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleBuscar}>Buscar →</button>
      </div>
    </div>
  );
}

export default Home;