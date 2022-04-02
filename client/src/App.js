import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import  Home  from "./components/Home/Home";
// import Filtros from "./components/Filtros/Filtros";
import Perfil from "./components/Perfil/Perfil";
import FormRegistro from './components/FormRegistro/FormRegistro';
import { DetalleViaje } from "./components/DetalleViaje/DetalleViaje";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/registro" element = {<FormRegistro />} />
          <Route exact path="/viajes/detalle" element={<DetalleViaje/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;