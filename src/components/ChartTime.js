import React from 'react';
import './chartTime.css';
import { TimeModel } from '../services/Format';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Rectangle } from 'recharts';
import PropTypes from 'prop-types';

/**
 * it returns  a tooltip with value and an added text "min" when active or it doesnt return anything
 * @param {boolean} active
 * @param {array} payload
 * @returns {Node | null} 
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-time">
        <p className="label">{payload[0].value}  min</p>
      </div>
    );
  }
  return null;
};

/**
 * The variable  returns a rectangle  with  a chosen color when active
 * @param {object} props provided  by recharts
 * @returns a  rectangle with a color
 */
const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={x}
      y={0}
      width={width}
      height={height + 100}
    />
  );
}

/**
 * This function is returning a customised legend wih text and  style
 * @param {string} value 
 * @returns  a legend  as text and  style
 */
function customLegendFormat(value) {
  const valueToUse = "Durée moyenne des sessions"
  return ((<span style={{ color: "rgba(255, 255, 255, 0.5)" }}>{valueToUse}</span>))
}

/**
 * This function returns a line chart with the session lenngth per day for a  week. Days are in "x" and session lenght in minutes is in "y"
 * @param {object} props 
 * @param {object} props.data
 * @param {object[]} props.data.sessions
 * @param {number} props.data.sessions[].day
 * @param {number} props.data.sessions[].sessionLength
 * @returns {React.ComponentElement} a component Line Chart
 */
function ChartTime(props) {

  const formatedTime = props.data.sessions.map((session) => {
    return new TimeModel(session)
  })

  return (
    <div className="chart-Time-container">
      <LineChart
        className='background-line'
        width={258}
        height={263}
        data={formatedTime}
        margin={{
          top: 5,
          bottom: 5,
          left: 5,

        }}
      >
        <XAxis dataKey="day" tickLine={false} axisLine={false} stroke='rgba(255, 255, 255, 0.5' fontSize={12} />
        <YAxis hide />
        <ReferenceLine />
        <Tooltip wrapperStyle={{ outline: 'none' }} content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Legend formatter={customLegendFormat} wrapperStyle={{ fontSize: "15px", fontFamily: "Roboto" }} verticalAlign="top" align='left' iconType='' iconSize={0} height={50} />
        <Line allowDataOverflow={false} data type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.5)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 5, stroke: 'rgba(255, 255, 255, 0.198345)' }} />
      </LineChart>
    </div>
  )
}

ChartTime.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number
    })),
    userId: PropTypes.number
  })
}

export default ChartTime;