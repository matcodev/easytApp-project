import React from 'react'
import PieChartSales from '../components/sales/components/PieChartSales';
import SalesChart from '../components/sales/components/SalesChart';

const Sales = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="pt-4">Ingresos</h1>
      <div className="charts-sales">
        <div className="card">
          <SalesChart />
        </div>
        <div className="card">
          {/* <PieChartSales /> */}
        </div>
      </div>
    </div>
  );
}

export default Sales;