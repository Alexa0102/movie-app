import React from "react";
import classes from "./SearchBox.module.css";

const SearchBox = (props) => {
  return (
    <div className="col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
