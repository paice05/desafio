import React from "react";

import { PieChart, Pie, Sector, Cell, Legend } from "recharts";

import "./style.css";

interface Props {}

const data = [
  { name: "Clientes Inadimplentes", value: 400 },
  { name: "Clientes Adimplentes", value: 350 },
  { name: "Total arrecadado", value: 250 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Ranges: React.FC<Props> = (props) => {
  return (
    <div className="container-ranges">
      <span className="totals"> Total: 150 </span>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          label
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default Ranges;
