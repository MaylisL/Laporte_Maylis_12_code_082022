import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import './chartPerformance.css';
import { PerformanceModel } from '../services/Format';
import PropTypes from 'prop-types';

/**
 * this function will return a component  radar  chart with  the props data of
 * @param {object} props 
 * @param {object} props.data
 * @param {object[]} props.data.data
 * @param {number} props.data.data[].value
 * @param {number} props.data.data[].kind
 * @param {number} props.data.data[].kilogram
 * @param {object} props.data.kind
 *  
 * @returns {React.ComponentElement} a component Radar Chart
 */
function ChartPerformance(props) {
  const formatedPerformance = new PerformanceModel(props.data)

  return (
    <div className="chart-performance-container">
      <RadarChart
        className='background-radar'
        cx="50%"
        cy="50%"
        outerRadius="80%"
        width={258}
        height={263}
        data={formatedPerformance.data}
        fill={"white"}
        margin={{
          top: 5,
          left: 15,
          bottom: 5,
          right: 15
        }}
      >
        <PolarGrid stroke='white' width={1} />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" stroke="#FF0101" strokeOpacity={0.7} fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  )
}

ChartPerformance.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
      kilogram: PropTypes.number
    })),
    kind: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string,
      6: PropTypes.string,
    })
  })
}

export default ChartPerformance