import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField/TextField";

function App() {
  return (
    <div className="container mt-4">
      <div className="col-12">
        <div className="row  gy-4">
          <div className="col-4 ">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth 
            />
          </div>
          <div className="col-4">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth 
            />
          </div>{" "}
          <div className="col-4">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth 
            />
          </div>
          <div className="col-4">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
