import React from 'react'
import PieChartSales from '../components/sales/components/PieChartSales';
import SalesChart from '../components/sales/components/SalesChart';
import "../css/sales.css"


const Sales = () => {

  return (
    // <div style={{ textAlign: "center" }}>
    //   <h1 className="pt-4">Ingresos</h1>
    //   <div className="charts-sales">
    //     <div className="card">
    //       <SalesChart />
    //     </div>
    //     <div className="card">
    //       {/* <PieChartSales /> */}
    //     </div>
    //   </div>
    // </div>

    <div className="ingresos">
      <h1>Ingresos</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 border">

            <div className="bg-light w-50">
              <SalesChart />
            </div>
            <div className="bg-light w-50">
              <PieChartSales />
            </div>

          </div>

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

export default Sales;