import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";


export default function ChartActivity() {

    return (
        <div className="chart-activity-container">
            <BarChart
                width={500}
                height={300}
                data={[]}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend wrapperStyle={{fontSize: "14px"}} verticalAlign="top"  align='right' iconType='circle' iconSize='8' height={50}/>
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}
