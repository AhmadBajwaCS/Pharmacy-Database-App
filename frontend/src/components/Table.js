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

  const [drugInv, setDrugInv] = useState([]);
  const getDrugInv = () => {
    axios.get(`http://localhost:3002/api/getDrugInv`).then((response) => {
      setDrugInv(response.data);
    })
  }

  const [precStatus, setPrecStatus] = useState([]);
  const getPrecStatus = () => {
    axios.get(`http://localhost:3002/api/getPrescStatus`).then((response) => {
      setPrecStatus(response.data);
    })
  }

  // Person
  if (props.table == "person") {
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
            {list.map((person) => {
              return (
                <tr>
                  <td>
                    {person.FirstName} {person.LastName}
                  </td>
                  <td>{person.DateOfBirth}</td>
                  <td>{person.Address}</td>
                  <td>{person.SSN}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  // Prescription_info
  if (props.table == "prescription_info") {
    return (
      <div className="table-container">
        <Link to="/" className="no-text-decoration">
          <h1 className="pharm-header">PHARMACY DB</h1>
        </Link>
        <table className="content-table">
          <thead>
            <tr>
              <th>Prescription ID</th>
              <th>Drug ID</th>
              <th>Prescriber ID</th>
              <th>Customer ID</th>
            </tr>
          </thead>
          <tbody>
            {list.map((prescription_info) => {
              return (
                <tr>
                  <td>{prescription_info.PrescriptionID}</td>
                  <td>{prescription_info.DrugID}</td>
                  <td>{prescription_info.PrescriberID}</td>
                  <td>{prescription_info.CustomerID}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  // Prescription_Status
  if (props.table == "prescription_status") {
    getPrecStatus();
    return (
      <div className="table-container">
        <Link to="/" className="no-text-decoration">
          <h1 className="pharm-header">PHARMACY DB</h1>
        </Link>
        <table className="content-table">
          <thead>
            <tr>
              <th>Drug ID</th>
              <th>Prescriber ID</th>
              <th>Customer ID</th>
              <th>Is Filled</th>
              <th>Is Refill Allowed</th>
            </tr>
          </thead>
          <tbody>
            {precStatus.map((prescription_status) => {
              return (
                <tr>
                  <td>{prescription_status.DrugID}</td>
                  <td>{prescription_status.PrescriberID}</td>
                  <td>{prescription_status.CustomerID}</td>
                  <td>{prescription_status.IsFilled}</td>
                  <td>{prescription_status.IsRefillAllowed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  // Drug_Info
  if (props.table == "drug_info") {
    return (
      <div className="table-container">
        <Link to="/" className="no-text-decoration">
          <h1 className="pharm-header">PHARMACY DB</h1>
        </Link>
        <table className="content-table">
          <thead>
            <tr>
              <th>Drug ID</th>
              <th>Manufacturer ID</th>
              <th>Drug Name</th>
              <th>Is Over The Counter</th>
            </tr>
          </thead>
          <tbody>
            {list.map((drug_info) => {
              return (
                <tr>
                  <td>{drug_info.DrugID}</td>
                  <td>{drug_info.ManufacturerID}</td>
                  <td>{drug_info.DrugName}</td>
                  <td>{drug_info.IsOverTheCounter}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  // Customer
  if (props.table == "customer") {
    return (
      <div className="table-container">
        <Link to="/" className="no-text-decoration">
          <h1 className="pharm-header">PHARMACY DB</h1>
        </Link>
        <table className="content-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Insurance Provider</th>
              <th>SSN</th>
              <th>Reason For Visit</th>
            </tr>
          </thead>
          <tbody>
            {list.map((customer) => {
              return (
                <tr>
                  <td>{customer.CustomerID}</td>
                  <td>{customer.InsuranceProvider}</td>
                  <td>{customer.SSN}</td>
                  <td>{customer.ReasonForVisit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  // Drug_Inventory
  if (props.table == "drug_inventory") {
    getDrugInv();
    return (
      <div className="table-container">
        <Link to="/" className="no-text-decoration">
          <h1 className="pharm-header">PHARMACY DB</h1>
        </Link>
        <table className="content-table">
          <thead>
            <tr>
              <th>Manufacturer ID</th>
              <th>Drug ID</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {drugInv.map((drug_inventory) => {
              return (
                <tr>
                  <td>{drug_inventory.ManufacturerID}</td>
                  <td>{drug_inventory.DrugID}</td>
                  <td>{drug_inventory.Amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  // Vendor
  if (props.table == "vendor") {
    return (
      <div className="table-container">
        <Link to="/" className="no-text-decoration">
          <h1 className="pharm-header">PHARMACY DB</h1>
        </Link>
        <table className="content-table">
          <thead>
            <tr>
              <th>Manufacturer ID</th>
              <th>Manufacturer Name</th>
            </tr>
          </thead>
          <tbody>
            {list.map((vendor) => {
              return (
                <tr>
                  <td>{vendor.ManufacturerID}</td>
                  <td>{vendor.ManuFacturerName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  // Physician
  if (props.table == "physician") {
    return (
      <div className="table-container">
        <Link to="/" className="no-text-decoration">
          <h1 className="pharm-header">PHARMACY DB</h1>
        </Link>
        <table className="content-table">
          <thead>
            <tr>
              <th>PrescriberID</th>
              <th>SSN</th>
            </tr>
          </thead>
          <tbody>
            {list.map((physician) => {
              return (
                <tr>
                  <td>{physician.PrescriberID}</td>
                  <td>{physician.SSN}</td>
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
