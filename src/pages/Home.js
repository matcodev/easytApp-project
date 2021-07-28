import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Badge from "react-bootstrap/Badge";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';
import { useContext } from "react";
import { Context } from "../store/appContext";

import "../css/home.css";
import { render } from "react-dom";

const Home = () => {
  React.state = { fecha: new Date() };
  const { store, actions } = useContext(Context)


  const mostrar = () => {

    swal({
      title: 'Nombre del Cliente',
      text: 'Tipo de servicio solicitado',
      buttons: ["si", "no"]
    });
  }

  // const onChange = fecha =>{
  //   React.setState({fecha : fecha});
  // }

  return (
    // <div className="container">
    //   <div className="end">
    //     <DatePicker selected={React.state.fecha} />{" "}
    //     {/* onChange={React.setState.onChange}  */}
    //   </div>
    //     <div className="titulo h1">Agenda de Hoy {`${store.name} ${store.lastname}`} </div>

    //   <Row className="top justify-content-md-center">
    //     <Col xl={5} className="mt-5">
    //       <Card className="card text-center">
    //         <Card.Header>
    //           <i className="fas fa-user-clock"></i> Cliente pendiente - Hoy
    //         </Card.Header>
    //         <Card.Body className="mt-1">
    //           <Card.Title>Magnus Carlsen</Card.Title>
    //           <Card.Text>
    //             Corte degrado nivel 2 + recorte de barba nivel 1
    //           </Card.Text>
    //           <Card.Text className="text-muted">Confirmada</Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //           <button
    //             className="boton btn btn-outline-secondary mx-1"
    //             type="submit"
    //             onClick={mostrar}
    //           >
    //             Revisar cita
    //           </button>
    //         </Card.Footer>
    //       </Card>
    //     </Col>

    //     <Col xl={2}></Col>

    //     <Col xl={5} className="mt-5">
    //       <Card className="card text-center">
    //         <Card.Header>
    //           <i className="fas fa-user-clock"></i> Cliente pendiente - Hoy
    //         </Card.Header>
    //         <Card.Body className="mt-1">
    //           <Card.Title>Special title treatment</Card.Title>
    //           <Card.Text>
    //             With supporting text below as a natural lead-in to additional
    //             content.
    //           </Card.Text>
    //           <Card.Text className="text-muted">Por confirmar</Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //         <button
    //             className="boton btn btn-outline-secondary mx-1"
    //             type="submit"
    //             onClick={mostrar}
    //           >
    //             Revisar cita
    //           </button>
    //         </Card.Footer>
    //       </Card>
    //     </Col>
    //   </Row>

    //   <Row className="top">
    //     <Col xl={5} className="mt-5">
    //       <Card className="card text-center">
    //         <Card.Header>
    //           <i className="fas fa-money-check-alt"></i> Ingreso actual de la semana
    //         </Card.Header>
    //         <Card.Body className="mt-1">
    //           <Card.Title>Special title treatment</Card.Title>
    //           <Card.Text>
    //             With supporting text below as a natural lead-in to additional
    //             content.
    //           </Card.Text>
    //           <Card.Text className="text-muted">2 days ago</Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //         <button
    //             className="boton btn btn-outline-secondary mx-1"
    //             type="submit"
    //             onClick={mostrar}
    //           >
    //          Mas info
    //           </button>
    //         </Card.Footer>
    //       </Card>
    //     </Col>

    //     <Col xl={2}></Col>

    //     <Col xl={5} className="mt-5">
    //       <Card className="card text-center">
    //         <Card.Header>
    //           <i className="fas fa-crown"></i> Cliente de la semana{" "}
    //         </Card.Header>
    //         <Card.Body className="mt-1">
    //           <Card.Title>Special title treatment</Card.Title>
    //           <Card.Text>
    //             With supporting text below as a natural lead-in to additional
    //             content.
    //           </Card.Text>
    //           <Card.Text className="text-muted">2 days ago</Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //         <button
    //             className="boton btn btn-outline-secondary mx-1"
    //             type="submit"
    //             onClick={mostrar}
    //           >
    //            Mas info
    //           </button>
    //         </Card.Footer>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>


    <div className="home">
      <h1 className="px-3">Inicio</h1>
      <div className="container">
        {/* <div className="row">
          <div className="col-12 ">12</div>
        </div> */}

        <div className="row">
          <div className="col-4 ">

            <div className="card text-center shadow-lg border-dark border-3">
              <div className="card-header">
                Próximo cliente
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer text-muted">
                <a href="/calendar" className="btn btn-primary">Ir a agenda</a>
              </div>
            </div>

          </div>
          <div className="col-4 ">

            <div className="card text-center shadow-lg border-dark border-3">
              <div className="card-header">
                Ingreso del día
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer text-muted">
                <a href="/sales" className="btn btn-primary">Ir a ingresos</a>
              </div>
            </div>

          </div>
          <div className="col-4 ">

            <div className="card text-center shadow-lg border-dark border-3">
              <div className="card-header">
                Último cliente
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer text-muted">
                <a href="/clients" className="btn btn-primary">Ir a clientes</a>
              </div>
            </div>

          </div>

        </div>
        <div className="row">
          <div className="col-4 "></div>


          <div className="col-4 ">
            <div className="card mt-5 shadow-lg border-dark border-3">
              <div className="card-header">
                Comparte este enlace para que agenden contigo
              </div>
              <div className="card-body">
                  <p>(Enlace)</p>
              </div>
            </div>
          </div>


          <div className="col-4 "></div>
        </div>
      </div>

    </div>
  );
};

export default Home;
