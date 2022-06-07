import axios from "axios";
import {
  CREATE_LOAN_SUCCESS,
  CREATE_LOAN_FAILURE,
} from "../constants/loanTypes.js";

// Create a new task
export const createLoan =
  (personalFormData, businessFormData, loanFormData) => async (dispatch) => {
    const {
      firstName,
      middleName,
      lastName,
      email,
      age,
      pincode,
      mobileNumber,
      aadharNumber,
      address,
    } = personalFormData;
    const {
      businessName,
      businessDomain,
      businessNature,
      businessPremises,
      businessPartners,
      gstNumber,
      businessAddress,
      businessPincode,
      businessState,
    } = businessFormData;

    const {
      loanAmount,
      monthlyIncome,
      loanType,
      loanInterest,
      loanTenure,
      emi,
    } = loanFormData;

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers":"Content-Type, Authorization, Content-Length, X-Requested-With",
      },
    };
    const body = {
      firstName,
      middleName,
      lastName,
      email,
      mobileNumber,
      age,
      address,
      aadharNumber,
      pincode,
      businessName,
      businessDomain,
      businessNature,
      businessPremises,
      businessPartners,
      gstNumber,
      businessAddress,
      businessPincode,
      businessState,
      loanAmount,
      monthlyIncome,
      loanType,
      loanInterest,
      loanTenure,
      emi,
    };
    console.log(config, body);
    try {
      const res = await axios.post(
        // "http://localhost:5000/api/loan/createloan",
        "https://bespoke-granita-549ed9.netlify.app/api/loan/createloan",
        body,
        config
      );
      console.log("RES=>", res.data);
      dispatch({
        type: CREATE_LOAN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CREATE_LOAN_FAILURE,
        payload: error,
      });
    }
  };
