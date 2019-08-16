import React, { useState } from "react";
import { connect } from "react-redux";
import { addData } from "../actions/smurfActions";
import axios from "axios";

const SmurfForm = props => {
  const [smurf, setSmurf] = useState([{ name: "", age: "", height: "" }]);

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs/", smurf)
      .then(res => {
        console.log("post Request", res);
        addData(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    setSmurf({ name: "", age: "", height: "" });
  };

  return (
    <div className="smurfForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={smurf.name}
          placeholder={"name"}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={smurf.age}
          placeholder={"age"}
          onChange={handleChange}
        />
        <input
          type="text"
          name="height"
          value={smurf.height}
          placeholder={"height"}
          onChange={handleChange}
        />
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addData }
)(SmurfForm);
