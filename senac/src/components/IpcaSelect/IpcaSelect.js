import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { ipcaData } from "./../../data/ipcaData";
import "./styles.css";

const IpcaSelect = () => {
  // variables
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
  };

  // render
  return (
    <Select
      className="select"
      value={selectedYear}
      onChange={(elem) => handleChange(elem.target.value)}
    >
      {years.map((e) => renderMenuItem(e))}
    </Select>
  );
};
export default IpcaSelect;
