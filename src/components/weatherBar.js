import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { getColor } from "../utils/getColor";
import { stateDataArray } from "../utils/stateData";

function WeatherBar({setSelectedState, setShowModal}) {

  const handleBarClick = (stateData) => {
    // const stateData = stateDataArray.find((data) => data.name === stateName);
    setSelectedState(stateData);
    console.log(stateData)
    setShowModal(true);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "white",
            padding: "0.7rem",
            border: "1px solid #cccccc",
            borderRadius: "10px",
          }}
        >
          <div>
            <p className="labels">{`Average Temp : ${data.avgTemp}°C`}</p>
            <p className="labels">{`Population: ${data.population} Crores`}</p>
            <p className="labels">Click for more details</p>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width="100%" height={400}>
      <div style={{textAlign:'center', marginBottom:'3rem'}}>

      <h1>Statewise Average Temperatures:</h1>
      </div>
      <BarChart
        width={500}
        height={300}
        data={stateDataArray}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="avgTemp"
          fill="#8884d8"
          onClick={(data) => {
            handleBarClick(data);
          }}
        >
          {stateDataArray.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.avgTemp)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WeatherBar;
