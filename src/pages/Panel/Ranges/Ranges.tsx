import React, { useMemo, useEffect, useState } from "react";

import { PieChart, Pie, Sector, Cell, Legend } from "recharts";
import { useSelector } from "react-redux";

// store
import { ApplicationState } from "../../../store";
// duck
import { User } from "../../../store/ducks/users/types";
// selectos
import { getElements } from "../../../store/ducks/resource/selectors";
// assets
import "./style.css";

interface Props {}

interface ResponseData {
  status: string;
  value: number;
}

type ResponseTotal = number;

const COLORS = ["#00C49F", "#FFBB28"];

const Ranges: React.FC<Props> = (props) => {
  const users = useSelector((state: ApplicationState) =>
    getElements(state.users)
  );

  const collectedTotal = useMemo(() => {
    const processDataTotal = users.reduce(
      (previousValue: ResponseTotal, currentValue: any) => {
        if (currentValue.status === "0")
          return (previousValue += Number(currentValue.amount));

        return previousValue;
      },
      0
    );

    return processDataTotal;
  }, [users]);

  const data = useMemo(() => {
    const processData = users
      .reduce((previousValue: ResponseData[], currentValue: any) => {
        const indice = previousValue
          .map((item) => item.status)
          .indexOf(currentValue.status);

        if (indice == -1) {
          previousValue.push({ status: currentValue.status, value: 1 });
        } else {
          previousValue[currentValue.status].value += 1;
        }

        return previousValue;
      }, [])
      .map((item) => ({
        name:
          item.status === "0"
            ? "Clientes Inadimplentes"
            : "Clientes Adimplentes",
        value: item.value,
      }));

    return processData;
  }, [users]);

  return (
    <div className="container-ranges">
      <span className="totals"> Total de clientes: {users.length} </span>
      <span className="totals-collected"> Total arrecadado: {collectedTotal.toFixed(2)} </span>
      <PieChart width={500} height={600}>
        <Pie data={data} label dataKey="value">
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
