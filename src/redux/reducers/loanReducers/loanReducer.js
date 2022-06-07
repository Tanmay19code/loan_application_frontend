import {
  CREATE_LOAN_SUCCESS,
  CREATE_LOAN_FAILURE,
} from "../../constants/loanTypes.js";

const initialState = {
  loan: {},
  message: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_LOAN_SUCCESS:
      return {
        ...state,
        loan: payload,
        message: "",
      };
    case CREATE_LOAN_FAILURE:
      return {
        ...state,
        message: payload,
      };

    default:
      return state;
  }
}
