import React, { useState, useEffect } from "react";
import "./Table.css";
import axios from "axios";
import TableEntries from "./TableEntries";

function Table(props) {
  const [list, setList] = useState([]);
  let table = "customer";

  // useEffect(() => {
  //   axios.get("http://localhost:3002/api/getPeople").then((res) => {
  //     setList(res.data);
  //   });
  // }, []);

  function createHeader() {
    if (table == "customer") {
      return (
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>SSN</th>
        </tr>
      );
    }
  }

  // props will be replaced with sql data in future commits
  return (
    <div className="content-table">
      <thead>{createHeader()}</thead>
      <tbody>
        <TableEntries
          name={"John Doe"}
          dob={"4-6-89"}
          address={"2014 Forest Hills Drive"}
          ssn={"XXX-XX-XXXX"}
        />
        <TableEntries
          name={"John Doe"}
          dob={"4-6-89"}
          address={"2014 Forest Hills Drive"}
          ssn={"XXX-XX-XXXX"}
        />
        <TableEntries
          name={"John Doe"}
          dob={"4-6-89"}
          address={"2014 Forest Hills Drive"}
          ssn={"XXX-XX-XXXX"}
        />
      </tbody>
    </div>
  );
}

export default Table;
