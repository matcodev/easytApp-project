import { PieChart, Pie, Tooltip} from 'recharts';

const PieChartSales = () => {

    const data = [
        {name: "Corte Cabello", value: 12000},
        {name: "Corte Cabello + Barba", value: 18000},
        {name: "Corte Barba Premium", value: 15000},
        {name: "Corte Niño", value: 8000},
    ];

    return (
        <div className="container-fluid col-md-12">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
}

export default PieChartSales;