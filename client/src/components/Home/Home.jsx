import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getViajesTotal,
  login,
  filterPerCard,
} from "../../redux/actions/actions";
import { Filtros } from "../Filtros/Filtros";
import CardViajeUsuarioPasajere from "../CardViaje/CardViajeUsuario/Pasajero/CardViajeUsuario";
import CardViajeUsuarioConductore from "../CardViaje/CardViajeUsuario/Conductor/CardViajeUsuario";
import "./Home.css";
import fondo from "../../assets/fondo perfil.jpg";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
import Cookies from "universal-cookie";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [render, setRender] = useState("");
  const viajes = useSelector(
    (state) => state.viajesFiltrados //me traigo el estado de los viajes para poder mostrarlos
  );
  // console.log("esto es viajes!!!", viajes);
  const cookieMail = cookies.get("email");
  // console.log("mail home", cookies.get("email"));
  useEffect(() => {
    //se monta home y despacho la accion para obtener los viajes
    dispatch(login(cookieMail));
    /* dispatch(getViajesTotal());*/
    console.log('entre en effect')
    dispatch(filterPerCard(render));
  }, [dispatch]);
  function handleChange (e) {
    dispatch(filterPerCard(e.target.value));    
    setRender(e.target.value)
   };
  return (
    <div>
      <NavBar />
      <div className="home-general">
        <div>
          <Filtros />
        </div>
        <div id="general-card">
          <div>
            <label className="label-formControl">
              Busco:
              <FormControl sx={{ m: 1, minWidth: 190 }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "white" }}
                >
                  Selecciona tu puesto
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Selecciona tu puesto"
                  value={render}
                  onChange={(e) => handleChange(e)}
                >
                  {/* <MenuItem value="seleccionar viaje" disabled selected> </MenuItem> */}
                  <MenuItem value="conductor">Conductore</MenuItem>
                  <MenuItem value="pasajero">Pasajere</MenuItem>
                </Select>
              </FormControl>
            </label>
          </div>
          <div className="container-cards">
            {viajes.map(
              (e) =>
                e && (
                  <Link to={"/detalle/" + e.id}>
                    <div className="card-home">
                      {e.status === "pasajero" ? (
                        <CardViajeUsuarioPasajere
                          origen={e.origen}
                          destino={e.destino}
                          fecha={e.fecha}
                          hora={e.hora}
                          asientosAOcupar={e.asientosAOcupar}
                          aceptaEquipaje={e.aceptaEquipaje}
                          aceptaFumador={e.aceptaFumador}
                          aceptaMascota={e.aceptaMascota}
                          usaBarbijo={e.usaBarbijo}
                          viajeDisponible={e.viajeDisponible}
                          key={e.id}
                          id={e.id}
                          nombre={
                            e.usuarios.length > 0 ? e.usuarios[0].nombre : <></>
                          }
                          apellido={
                            e.usuarios.length > 0 ? (
                              e.usuarios[0].apellido
                            ) : (
                              <></>
                            )
                          }
                        />
                      ) : (
                        <CardViajeUsuarioConductore
                          origen={e.origen}
                          destino={e.destino}
                          fecha={e.fecha}
                          hora={e.hora}
                          asientosAOcupar={e.asientosAOcupar}
                          aceptaEquipaje={e.aceptaEquipaje}
                          aceptaFumador={e.aceptaFumador}
                          aceptaMascota={e.aceptaMascota}
                          usaBarbijo={e.usaBarbijo}
                          viajeDisponible={e.viajeDisponible}
                          key={e.id}
                          id={e.id}
                          nombre={
                            e.usuarios.length > 0 ? e.usuarios[0].nombre : <></>
                          }
                          apellido={
                            e.usuarios.length > 0 ? (
                              e.usuarios[0].apellido
                            ) : (
                              <></>
                            )
                          }
                        />
                      )}
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
      <div className="wallpaper">
        <img className="stretch" src={fondo} alt="" />
      </div>
    </div>
  );
}
