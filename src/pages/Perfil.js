import React from 'react';
import '../css/perfil.css'

const Perfil = () => {
  return (
    <div>
      <h1>Perfil</h1>
      <div>
        <div className="card mb-3 mt-4" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://i.pinimg.com/564x/27/28/de/2728dedb1641c748143b7849dd6433af.jpg" /* style={ {borderRadius : "120px"} } */ class="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Jhon Sanchez</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;