import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./LogPrescription.css";
import { Link } from "react-router-dom";

function LogPrescription(props) {

  const [prescList, setPrescList] = useState([]);
  const [drugList, setDrugList] = useState([]);

  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [prescriber, setPrescriber] = useState("");
  const [drug, setDrug] = useState("");

  const [isRefill, setIsRefill] = useState(false);

  // database calls that run on page load?
  useEffect(() => {
    Axios.get("http://localhost:3002/api/getPrescriberNames").then((data) => {
      setPrescList(data.data);
    });
    Axios.get("http://localhost:3002/api/getDrugs").then((data) => {
      setDrugList(data.data);
    });
  }, []);

  const handleDobChange = (event) => {
    setDob(event.target.value);
  }

  const handleSsnChange = (event) => {
    setSsn(event.target.value);
  }

  const handlePrescChange = (event) => {
    setPrescriber(event.target.value);
    getPhys(prescriber);
    console.log("prescriber changed");
  };

  const handleDrugChange = (event) => {
    setDrug(event.target.value);
    console.log("drug changed");
  };

  const handleRefillChange = (event) => {
    setIsRefill(!isRefill);
  };

  // const submitCustomer = () => {
  //   Axios.post("http://localhost:3002/api/create", {
  //     FirstName: firstName,
  //     LastName: lastName,
  //     SSN: ssn,
  //     Address: address,
  //     DateOfBirth: dateOfBirth,
  //   });
  // };

  const [newPrescriptID, setNewPrescriptID] = useState(0);
  const getNewPrecID = () => {
    //console.log("getNewPrecID Called");
    Axios.get("http://localhost:3002/api/getLargestPrescription").then((response) => {
      console.log("getNewPrecID Called: " + (response.data[0]["MAX(PrescriptionID)"] + 1));
      setNewPrescriptID(response.data[0]["MAX(PrescriptionID)"] + 1);
    });
  }

  function getCustomer(dateOfBirth, socialSecNum) {
    Axios.get("http://localhost:3002/api/getCustomer", {
      DateOfBirth: dateOfBirth,
      SSN: socialSecNum
    }).then((response) => {
      return response.data.CustomerID
    });
  }

  const [physID, setPhysID] = useState(0);
  const getPhys = (SSN) => {
    Axios.get(`http://localhost:3002/api/getPhysician/${SSN}`).then((response) => {
      setPhysID(response.data[0].PrescriberID);
    })
  }

  const logNewPrescription = (event) => {
    event.preventDefault();
    console.log("logNewPrescriber Called");
    getNewPrecID(); // get the max prescription ID and add 1
    getPhys(prescriber); // get prescriber ID from the physician using prescriber's SSN 

    Axios.post("http://localhost:3002/api/createPrescription", {
      PrescriptionID: newPrescriptID,
      DrugID_P: drug,
      PrescriberID_P: physID,
      CustomerID_P: 1
    });
  }

  return (
    <div className="log-body">
      <div className="helmet">
        <Link to="/" className="no-text-decoration">
          <h1 className="title">PHARMACY DB</h1> <br />
        </Link>
      </div>

      <form className="frm1">
        <div className="frm-contents">
          <h2>&emsp; Log Prescription &emsp;</h2>
          <br />
          Date of Birth:<br></br>
          <input type="text" name="dob" onChange={handleDobChange}/> <br></br>
          SSN: <br></br>
          <input type="text" name="ssn" onChange={handleSsnChange}/> <br></br>
          Drug Name:<br></br>
          <select
            value={drug}
            onChange={handleDrugChange}
            onMouseOver={handleDrugChange}
          >
            {drugList.map((val) => {
              return <option value={val.DrugID}>{val.DrugName}</option>;
            })}
          </select>
          <br />
          Physician: <br></br>
          <select
            value={prescriber}
            onChange={handlePrescChange}
            onMouseOver={handlePrescChange}
          >
            {prescList.map((val, key) => {
              return (
                <option value={val.SSN}>
                  {val.FirstName} {val.LastName}
                </option>
              );
            })}
          </select>
          <br />
          <label>
            Refill Allowed?:
            <input
              type="checkbox"
              name="refill"
              onChange={handleRefillChange}
            />
          </label>
          <br></br>
          <input type="submit" value="Submit" onClick={logNewPrescription} onMouseOver={getNewPrecID(dob, ssn)}/>
          <p>
            Selected precriber = {prescriber} <br />
            Selected drug = {drug} <br />
            Is Refill = {isRefill.toString()} <br />
            NewPrescriptionID = {newPrescriptID} <br />
            PhysicianID/PrescriberID = {physID}
          </p>
        </div>
      </form>
    </div>
  );
}

export default LogPrescription;
