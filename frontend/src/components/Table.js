import React from "react";
import "./Table.css";

function Table(props) {
  return (
    <div className="content-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>SSB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>4-6-89</td>
          <td>2014 Forest Hills Drive</td>
          <td>XXX-XX-XXXX</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>4-6-89</td>
          <td>2014 Forest Hills Drive</td>
          <td>XXX-XX-XXXX</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>4-6-89</td>
          <td>2014 Forest Hills Drive</td>
          <td>XXX-XX-XXXX</td>
        </tr>
      </tbody>
    </div>
  );
}

export default Table;
