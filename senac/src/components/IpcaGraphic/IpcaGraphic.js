import React from "react";
import { Bar } from "react-chartjs-2";
import { ipcaData } from "./../../data/ipcaData";
import "./styles.css";

const IpcaGraphic = () => {
  const data = {
    labels: ipcaData.map((item) => item.data),
    datasets: [
      {
        label: "IPCA",
        data: ipcaData.map((item) => item.valor),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
};
export default IpcaGraphic;
