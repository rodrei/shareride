import {
  GET_DETALLE_VIAJE,
  GET_VIAJES_TOTAL,
  FILTRO_ORIGEN,
  FILTRO_DESTINO,
  FILTRO_ASIENTOS,
  FILTRO_CHECKS_FUMADOR,
  FILTRO_CHECKS_EQUIPAJE,
  FILTRO_CHECKS_MASCOTA,
  FILTRO_CHECKS_BARBIJO,
  FILTRO_CHECKS,
  REGISTRO_USUARIO
} from "../actions/actions.js";

const initialState = {
  viajePorId: [],
  viajes: [],
  viajesFiltrados: [],
  usuarios: []
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETALLE_VIAJE:
      return {
        ...state,
        viajePorId: action.payload
      };

    case GET_VIAJES_TOTAL:
      return {
        ...state,
        viajes: action.payload,
        viajesFiltrados: action.payload
      };

    case FILTRO_CHECKS:
      return {
        ...state,
        viajesFiltrados: action.payload
      };

    case REGISTRO_USUARIO:
      return {
        ...state
      };

    default:
      return { ...state };
  }
}
export default rootReducer;
