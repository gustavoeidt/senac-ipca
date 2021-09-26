import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { IPCA_URL } from "../../config/constants";
import { themeColors } from "../../theme/themeColors";
import { getMonth } from "../../utils/convertDate";

const IpcaGraphic = ({ className, selectedYear }) => {
  const [ipcaData, setIpcaData] = useState([]);

  useEffect(() => {
    if (ipcaData.length === 0) {
      axios.get(IPCA_URL).then((response) => {
        setIpcaData(response.data);
      });
    }
  }, [ipcaData.length]);

  const filteredData = ipcaData.filter((item) => {
    const regex = `[0-9]{2}/[0-9]{2}/${selectedYear}`;
    return item.data.match(regex);
  });

  const data = {
    labels: filteredData.map((item) => getMonth(item.data)),
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
