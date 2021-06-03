import React from 'react'
import PieChartSales from '../components/sales/components/PieChartSales';
import SalesChart from '../components/sales/components/SalesChart';

const Sales = () => {

  return (
    <div style={{ textAlign: "center"}}>
      <h1>Ingresos</h1>
      <div className="charts-sales">
          <SalesChart />
          <PieChartSales />
      </div>
    </div>
  );
}

export default Sales;