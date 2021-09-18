import React from "react";
import { Paper } from "@material-ui/core";
import IpcaSelect from "../../components/IpcaSelect";
import IpcaGraphic from "../../components/IpcaGraphic/IpcaGraphic";
import "./styles";

const Ipca = () => {
  // variables

  // render
  return (
    <Paper>
      <IpcaSelect />
      <IpcaGraphic />
    </Paper>
  );
};
export default Ipca;
