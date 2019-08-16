import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { getData } from "../actions/smurfActions";
import Smurf from "./Smurf";

const SmurfList = props => {
  console.log("SmurfList", props);
  return (
    <>
      <h2>Yay Smurfs</h2>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="Puff" color="#00BFFF" height={15} width={100} />
        ) : (
          "Get Smurf"
        )}
      </button>
      {props.smurfs &&
        props.smurfs.map(smurf => {
          console.log("smurf", smurf);
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);
