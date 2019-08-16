import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err });
      });
  };
};

// export const addData = smurf => {
//   return dispatch => {
//     dispatch({ type: FETCH_SMURF_DATA_START });
//     axios
//       .post("http://localhost:3333/smurfs/", smurf)
//       .then(res => {
//         console.log("post Request", res);
//         dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };

export const addData = smurf => {
  return { type: FETCH_SMURF_DATA_SUCCESS, payload: smurf };
};
