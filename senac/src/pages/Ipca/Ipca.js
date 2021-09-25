import React, { useState } from "react";
import { Paper, AppBar, Typography } from "@material-ui/core";
import styled from "@emotion/styled";
import IpcaSelect from "../../components/IpcaSelect";
import IpcaGraphic from "../../components/IpcaGraphic/IpcaGraphic";
import { themeColors } from "../../theme/themeColors";

const Ipca = ({ className }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const handleChangeYear = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className={className}>
      <AppBar className="AppBar">
        <Typography className="AppHeader">IPCA por Ano</Typography>
      </AppBar>
      <Paper className="Paper">
        <IpcaSelect
          className="IpcaSelect"
          handleChangeYear={handleChangeYear}
        />
        <IpcaGraphic className="IpcaGraphic" selectedYear={selectedYear} />
      </Paper>
    </div>
  );
};
export default styled(Ipca)`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 5rem 1.2rem;
  min-height: 100vh;
  background-color: ${themeColors.lavender.hex};

  .AppBar {
    background-color: ${themeColors.darkpurple.hex};
    display: flex;
    justify-content: center;
    height: 4rem;

    .AppHeader {
      text-align: center;
    }
  }

  .Paper {
    padding: 2rem 1rem;
  }

  .IpcaSelect {
    margin-bottom: 2rem;
    width: 100%;
  }
`;
