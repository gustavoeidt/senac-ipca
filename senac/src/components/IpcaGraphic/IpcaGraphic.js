import React from "react";
import { Bar } from "react-chartjs-2";
import { ipcaData } from "./../../data/ipcaData";
import { themeColors } from "../../theme/themeColors";

const IpcaGraphic = ({ className, selectedYear }) => {
  const filteredData = ipcaData.filter((item) => {
    const regex = `[0-9]{2}/[0-9]{2}/${selectedYear}`;
    return item.data.match(regex);
  });

  const data = {
    labels: filteredData.map((item) => item.data),
    datasets: [
      {
        label: `IPCA do ano ${selectedYear}`,
        data: filteredData.map((item) => item.valor),
        borderWidth: 1,
        backgroundColor: [themeColors.purple.hex],
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

  return <Bar data={data} options={options} className={className} />;
};
export default IpcaGraphic;
