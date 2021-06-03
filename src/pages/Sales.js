import React from 'react'
import PieChartSales from '../components/sales/components/PieChartSales';
import SalesChart from '../components/sales/components/SalesChart';

const Sales = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="pt-4">Ingresos</h1>
      <div className="charts-sales mx-5 p-5">
        <div className="card me-5 p-5">
          <SalesChart />
        </div>
        <div className="card me-4 px-3">
          <PieChartSales />
        </div>
      </div>
    </div>
  );
}

export default Sales;