import React from 'react'
import PieChartSales from '../components/sales/components/PieChartSales';
import SalesChart from '../components/sales/components/SalesChart';
import "../css/sales.css"


const Sales = () => {

  return (
    <div className="ingresos">
      <h1>Ingresos</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 border">

            <div className="bg-light w-50">
              <SalesChart />
            </div>
            {/* <div className="bg-light w-50">
              <PieChartSales />
            </div> */}

          </div>

        </div>
        <div className="row">
          <div className="col-4 border">

            <div className="card text-dark bg-light mb-3 mt-5">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

          </div>
          <div className="col-4 border">
          
          <div className="card text-dark bg-light mb-3 mt-5">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          
          </div>
          <div className="col-4 border">
          
          <div className="card text-dark bg-light mb-3 mt-5">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>

    </div>
  );
}

export default Sales;