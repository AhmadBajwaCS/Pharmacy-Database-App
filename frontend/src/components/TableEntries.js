import React from "react";

function TableEntries(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.dob}</td>
      <td>{props.address}</td>
      <td>{props.ssn}</td>
    </tr>
  );
}

export default TableEntries;
