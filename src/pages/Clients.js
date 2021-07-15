
import React from "react"
import Perfiles from "../components/Perfiles"
import juanma from "../assets/img/juanma.jpg";
import Table from "../components/Table";
import '../css/clients.css';

function Clients() {


  return (
    <>

          <Table
            nombre='Alexis'
            apellido='Sanchez'
            correo='jmtm89'
          />
      <div className='container-fluid  '>
        <Perfiles
          imagen={juanma}
          nombre='Alexis Sanchez'
        />


      </div>




    </>
  );
}

export default Clients;