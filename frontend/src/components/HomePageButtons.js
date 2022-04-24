import React from "react";
import "./HomePageButtons.css";
import { Link } from "react-router-dom";

function HomePageButtons(props) {

  return (
    <div className="homeDiv">
      <h1 className="head">&emsp; Pharmacy DB &emsp; </h1>
      <Link to="/search">
        <button className="button">Search the database</button>
      </Link>
      <Link to="/log">
        <button className="button">Log prescription</button>
      </Link>
      <Link to="/tracker">
        <button className="button">Track active prescriptions</button>
      </Link>
      <Link to="/drug-inventory">
        <button className="button">View drug inventory</button>
      </Link>
      <Link to="/new">
        <button className="button">Add new customer</button>
      </Link>
      <Link to ="/quit">
      <button className="button">Quit</button>
      </Link>
    </div>
  );
}

export default HomePageButtons;
