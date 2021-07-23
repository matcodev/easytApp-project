import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';

import "../css/home.css";
import { render } from "react-dom";

const Home = () => {
  return (
    <div className="home h-100">
      <h1>Inicio</h1>
      <div className="container">
        <div className="row">
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
          <div className="col-1 border">1</div>
        </div>
        <div className="row">
          <div className="col-4 border">4</div>
          <div className="col-4 border">4</div>
          <div className="col-4 border">4</div>
        </div>
      </div>

    </div>
  );
};

export default Home;
