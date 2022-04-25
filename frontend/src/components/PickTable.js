import React from "react";
import { Link } from "react-router-dom";

function PickTable(props) {
  return (
    <div>
      <div className="helmet">
        <Link to="/" className="no-text-decoration">
          <h1 className="header">PHARMACY DB</h1>
        </Link>
      </div>
      <h1>Choose a Table:</h1>
      <Link to="/search/customer">
        <h1>Customer</h1>
      </Link>
    </div>
  );
}

export default PickTable;
