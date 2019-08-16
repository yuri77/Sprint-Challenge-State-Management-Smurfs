import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURF_DATA_SUCCESS:
      console.log("Axios Success from reducer");
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
