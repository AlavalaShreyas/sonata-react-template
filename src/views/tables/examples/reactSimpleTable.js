import React, { Component } from "react";
import { getData } from "../utils";
import { Table } from "react-sonata-components-library";

import "react-table/react-table.css";

const columns = [
  {
    Header: "Employee Data",
    columns: [
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Hobby", accessor: "hobby" },
      { Header: "Status", accessor: "status" },
      { Header: "Salary", accessor: "salary" },
    ],
  },
];
export default class ReactTable extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Table data={getData()} columns={columns} pageSize={5} />
      </div>
    );
  }
}
