import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import "./SearchBar.css";

function SearchBar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {

    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={inputHandler}
          fullWidth
          label="Search"
        />
        </div>
      {/* <List input={inputText} /> */}
    </div>
  );
}

export default SearchBar;