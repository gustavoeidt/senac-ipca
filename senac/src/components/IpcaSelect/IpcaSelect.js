/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@material-ui/core";
import axios from "axios";
import { IPCA_URL } from "../../config/constants";

const IpcaSelect = ({ className, handleChangeYear }) => {
  const [ipcaData, setIpcaData] = useState([]);

  useEffect(() => {
    if (ipcaData.length === 0) {
      axios.get(IPCA_URL).then((response) => {
        setIpcaData(response.data);
        handleChangeYear("1992");
      });
    }
  }, [ipcaData.length]);

  const getYearFromDate = (month) => {
    return month.data.substr(month.data.length - 4);
  };

  const uniqueValues = (year, i, ar) => {
    return ar.indexOf(year) === i;
  };

  const years = ipcaData.map(getYearFromDate).filter(uniqueValues);

  const [selectedYear, setSelectedYear] = useState(years.find(() => true));

  const renderMenuItem = (year) => (
    <MenuItem value={year} key={year}>
      {year}
    </MenuItem>
  );

  const handleChange = (year) => {
    setSelectedYear(year);
    handleChangeYear(year);
  };

  // render
  return (
    <Select
      className={className}
      value={selectedYear}
      onChange={(elem) => handleChange(elem.target.value)}
      defaultValue="1992"
    >
      {years.map((e) => renderMenuItem(e))}
    </Select>
  );
};
export default IpcaSelect;
