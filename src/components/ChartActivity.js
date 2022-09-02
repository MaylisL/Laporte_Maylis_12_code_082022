import React from "react";
import PropTypes from 'prop-types';
import './chartActivity.css'
import {dailyActivityModel} from "../services/Format";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

/**
 * it returns  a tooltip with value and an added text "kg" and "kcal" when active or it doesnt return anything
 * @param {boolean} active
 * @param {array} payload
 * @returns {Node | null} 
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{payload[0].value}kg</p>
        <p className="label">{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

/**
 * this function allows to add  the text 'Poids (kg)' or 'Calories brûlées (kCal) as  a legend depending on the value
 * @param {string} value 
 * @returns {Node} return a  different text for the legend
 */
function customLegendFormat(value) {
  const valueToUse = value === 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (kCal)'
  return (<span style={{ color: '#74798C' }}>{valueToUse}</span>)
}


/** 
 * This function will return a bar charts and takes as props kilogram and calories per day
 * @param {object} props
 * @param {object} props.data 
 * @param {array}  props.data.sessions sessions is an array of an  object
 * @returns {React.ComponentElement} component Bar Chart
 */
function ChartActivity(props) {

  const formatedSessions = props.data.sessions.map((session)=>{
    return new dailyActivityModel(session)
  })

  return (
    
      <BarChart
        className="background-bar"
        barGap={8}
        barSize={7}
        width={835}
        height={320}
        data={formatedSessions}
        fill={"#9B9EAC"}
        margin={{
          top:24,
          right: 29,
          left: 43,
          bottom: 23,
        }}
      >  
        <CartesianGrid strokeDasharray="1" strokeColor="#DEDEDE" horizontal={true} vertical={false} />
        <XAxis dataKey="day" tickLine={false}  tickMargin={10}  allowDecimals={false} />
        <YAxis yAxisId="calories" orientation="left" axisLine={false} tickLine={false}  tickMargin={40}  dataKey="calories" hide={true} />
        <YAxis yAxisId="kilogram" orientation="right" axisLine={false} tickLine={false}  tickMargin={40} dataKey="kilogram" />
        <Tooltip offset={20} isAnimationActive={false} position={{y:30}} wrapperStyle={{outline: 'none'}} content={<CustomTooltip />} />
        <Legend formatter={customLegendFormat} wrapperStyle={{fontSize: "14px", color:"#74798C"}} verticalAlign="top"  align='right' iconType='circle' iconSize='8' height={50}/>
        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
      </BarChart>
   
  );

}
ChartActivity.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(PropTypes.shape({
      calories: PropTypes.number,
      day: PropTypes.string,
      kilogram: PropTypes.number
    }))
  })
}

export default ChartActivity
