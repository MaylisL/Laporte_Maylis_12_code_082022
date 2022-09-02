import React from "react";
import { PieChart, Pie, Cell, Legend, Sector } from "recharts";
import './chartScore.css';
import PropTypes from 'prop-types';

/**
 * This function is returning a customised legend wih text and style
 * @param {string} value it's a legend text
 * @returns a legend  with a different color
 */
function customLegendFormat(value) {
  return ((<span style={{ color: "#20253A" }}>{value}</span>))
}

/**
 * This  function returns a custom shape for the text inside the pie chart
 * @param {object} props property provided by recharts
 * @returns a text inside the pie chart
 */
function renderActiveShape(props) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;


  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"#282D30"} fontSize={26} fontWeight={500}>
        {payload.value}%
      </text>
      <text className="description-text" x={cx} y={cy} dy={30} textAnchor="middle" fill={"#74798C"} fontSize={20}>de votre</text>
      <text className="description-text" x={cx} y={cy} dy={55} textAnchor="middle" fill={"#74798C"} fontSize={20}>objectif</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={10}
      />
    </g>
  );
};

/**
 * this function returns a pie chart component
 * @param {object} props 
 * @param {number} props.data a number representing a score that is required
 * @returns {React.ComponentElement} a pie chart representing the score number
 */
function ChartScore(props) {

  const x = props.data * 100;
  const data = [
    { name: "Score", value: x },
    { name: "", value: 100 - x },

  ];
  const COLORS = ["red", "#FBFBFB"];

  return (
    <div className="chart-score-container">
      <PieChart width={258} height={263} className='background-pie'>
        <Legend formatter={customLegendFormat} wrapperStyle={{ fontSize: "15px", fontFamily: "Roboto" }} verticalAlign="top" align='left' iconType='' iconSize={0} height={50} />
        <Pie
          data={data}
          cx={120}
          cy={80}
          activeIndex={0}
          activeShape={renderActiveShape}
          startAngle={90}
          endAngle={360 + 90}
          innerRadius={70}
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

    </div>
  );
}

ChartScore.propTypes = {
  data: PropTypes.number.isRequired
};


export default ChartScore
