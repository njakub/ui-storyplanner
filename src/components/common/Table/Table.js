import React from "react";
import "./table.scss";
import { Table as BootstrapTable } from "react-bootstrap";

const Table = props => {
  return (
    <BootstrapTable striped bordered hover>
      {props.children}
    </BootstrapTable>
  );
};

export default Table;
