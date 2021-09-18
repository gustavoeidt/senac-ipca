import React from "react";
import { Paper, Select, MenuItem } from "@material-ui/core";
import { ipcaData } from "./../../data/ipcaData";
import "./styles";

const Ipca = () => {
  // variables
  const getYearFromDate = (month) => {
    return month.data.substr(month.data.length - 4);
  };

  const uniqueValues = (year, i, ar) => {
    return ar.indexOf(year) === i;
  };

  const years = ipcaData.map(getYearFromDate).filter(uniqueValues);

  // functions
  const renderMenuItem = (year) => (
    <MenuItem value={year} key={year}>
      {year}
    </MenuItem>
  );

  // render
  return (
    <Paper>
      <Select value={years[0]}>{years.map((e) => renderMenuItem(e))}</Select>
    </Paper>
  );
};
export default Ipca;
