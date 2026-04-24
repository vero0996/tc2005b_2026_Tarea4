import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detalle from "./pages/Detalle";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuario/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;