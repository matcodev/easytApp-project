
import React from "react"
import '../css/clients.css';
import Perfiles from "../components/Perfiles"
import juanma from "../assets/img/juanma.jpg";
import Table from "../components/Table";

function Clients() {


  return (
    <>

      {/* <Table
            nombre='Alexis'
            apellido='Sanchez'
            correo='jmtm89'
          />
      <div className='container-fluid  '>
        <Perfiles
          imagen={juanma}
          nombre='Alexis Sanchez'
        />


      </div> */}




      <div className="clientes">
        <h1 className="px-3">Clientes</h1>
        <div className="container">
          <div className="row">
            <div className="col-6 border">6

              <Table
                nombre='Alexis'
                apellido='Sanchez'
                correo='jmtm89'
              />

            </div>
            <div className="col-6 border">6
            
            
            
            </div>

          </div>
          <div className="row">
            <div className="col-4 border">4</div>
            <div className="col-4 border">4</div>
            <div className="col-4 border">4</div>
          </div>
        </div>

      </div>




    </>
  );
}

export default Clients;