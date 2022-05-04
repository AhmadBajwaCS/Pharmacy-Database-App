import React, { useState } from "react";

function SearchBar(props) {
  const [searchString, setSearchString] = useState("");

  function changeString(string) {
    setSearchString(string);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          changeString(event.target.value);
        }}
      ></input>
      <p>{searchString.charAt(0)}</p>
    </div>
  );
}

export default SearchBar;
