import React from "react"
import Perfiles from "../components/Perfiles"
import juanma from "../components/imagenes/imagenes/juanma.jpg"
import Table from "../components/Table";

function Clients() {


  return (
    <>

      <div className='container-fluid  '>
        <Perfiles
          imagen={juanma}
          nombre='Alexis Sanchez'
        />
        <Table
          nombre='Alexis'
          apellido='Sanchez'
          correo='jmtm89'
        />


      </div>




    </>
  );
}

export default Clients;