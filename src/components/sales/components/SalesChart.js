import { LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';

const SalesChart = () => {
    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 500, pv: 2500, amt: 2400 },
        { name: 'Page C', uv: 700, pv: 3000, amt: 2400 },
        { name: 'Page D', uv: 900, pv: 2600, amt: 2400 }
    ]
    const data1 = [
        {name: "Corte Cabello", value: 12000},
        {name: "Corte Cabello + Barba", value: 18000},
        {name: "Corte Barba Premium", value: 15000},
        {name: "Corte Niño", value: 8000},
    ];
    return (
            <div className="container col-md-12">
                <LineChart width={600} height={300} data={data1}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="value" />
                </LineChart>
            </div>
    );
}

export default SalesChart;