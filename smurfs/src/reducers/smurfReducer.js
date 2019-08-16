import { FETCH_SMURF_DATA_START, FETCH_SMURF_DATA_SUCCESS } from "../actions";
import SmurfList from "../components/SmurfList";

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
      return state;
    default:
      return state;
  }
};
