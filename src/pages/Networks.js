import "../css/networks.css";

const Networks = () => {
    return (
        // <div>
        //     <h1>Redes Sociales</h1>
        //     <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        //         <button type="button" className="btn btn-primary">facebook</button>
        //         <button type="button" className="btn btn-danger">Instagram</button>
        //         <button type="button" className="btn btn-success">Gmail</button>
        //     </div>
        // </div>

        <div className="redes">
      <h1>Redes sociales</h1>
      <div className="container">
        <div className="row">
          <div className="col-3 border"><button type="button" className="btn btn-primary w-75">Facebook</button></div>
          <div className="col-3 border"><button type="button" className="btn btn-danger w-75">Instagram</button></div>
          <div className="col-3 border"><button type="button" className="btn btn-info w-75">Twitter</button></div>
          <div className="col-3 border"><button type="button" className="btn btn-success w-75">E-mail</button></div>
          
        </div>
        <div className="row">
          <div className="col-4 border">4</div>
          <div className="col-4 border">4</div>
          <div className="col-4 border">4</div>
        </div>
      </div>

    </div>
    );
}

export default Networks;