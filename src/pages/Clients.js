
import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext";

import '../css/clients.css';

function Clients() {

  const {store, actions} = useContext(Context);
  const {usuarios} = store;

  useEffect(() => {
    actions.getUsuarios("/clientes");
  }, [])

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center" scope="col">
              Primer Nombre
            </th>
            <th className="text-center" scope="col">
              Segundo Nombre
            </th>
            <th className="text-center" scope="col">
              Apellido Paterno
            </th>
            <th className="text-center" scope="col">
              Apellido Materno
            </th>
            <th className="text-center" scope="col">
              Correo
            </th>
            <th className="text-center" scope="col">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {!!usuarios &&
            usuarios.length > 0 &&
            usuarios.map((usuario, index) => {
              return (
                <tr key={index}>
                  <td className="text-center"> {usuario.primerNombre}</td>
                  <td className="text-center">{usuario.segundoNombre}</td>
                  <td className="text-center">{usuario.apellidoPaterno}</td>
                  <td className="text-center">{usuario.apellidoMaterno}</td>
                  <td className="text-center">{usuario.email}</td>

                  <td className="text-center">
                    <button className="trash-icon border-0 bg-transparent text-danger">
                      <i className="far fa-trash-alt "></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Clients;