import React from "react";
import Card from "../common/Card/Card";
import Table from "../common/Table/Table";

const Invoice = props => {
  return (
    <div>
      <h2>Invoice</h2>
      <div className="row">
        <div className="col-md-6">
          <Card header="Customer">
            <p>blabla</p>
          </Card>
        </div>
        <div className="col-md-6">
          <Card header="Company">
            <p>blabla</p>
          </Card>
        </div>
        <div className="row">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
