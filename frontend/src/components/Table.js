import React, { useState, useEffect } from "react";
import "./Table.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Table(props) {
  // const [list, setList] = useState([
  //   {
  //     FirstName: "John",
  //     LastName: "Doe",
  //     DateOfBirth: "4-6-89",
  //     Address: "2014 Forest Hills Drive",
  //     SSN: "XXX-XX-XXXX",
  //   },
  //   {
  //     FirstName: "Amiel",
  //     LastName: "Vincent",
  //     DateOfBirth: "4-28-99",
  //     Address: "My house",
  //     SSN: "XXX-XX-XXXX",
  //   },
  // ]);

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/getPeople").then((res) => {
      setList(res.data);
    });
  }, []);

  if (props.table == "customer") {
    return (
      <div className="table-container">
        <Link to="/" className="no-text-decoration">
          <h1 className="pharm-header">PHARMACY DB</h1>
        </Link>
        <table className="content-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>SSN</th>
            </tr>
          </thead>
          <tbody>
            {list.map((customer) => {
              return (
                <tr>
                  <td>
                    {customer.FirstName} {customer.LastName}
                  </td>
                  <td>{customer.DateOfBirth}</td>
                  <td>{customer.Address}</td>
                  <td>{customer.SSN}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
