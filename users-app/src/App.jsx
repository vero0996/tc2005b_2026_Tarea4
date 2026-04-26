import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detalle from "./pages/Detalle";
import Usuarios from "./pages/Usuarios";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuario/:id" element={<Detalle />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;