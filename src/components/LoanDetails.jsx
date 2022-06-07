import React, { useState } from "react";
import { createLoan } from "../redux/actions/loanActions.js";
import { useDispatch } from "react-redux";

const LoanDetails = ({
  checkValidation,
  tab,
  updateTab,
  formData,
  setFormData,
  emiVal,
  setEmiVal,
  personalFormData,
  businessFormData,
  loanFormData,
  resetFormData
}) => {
  const dispatch = useDispatch(null);
  const calcEmiVal = () => {
    let emi = 0;
    if (formData.loanAmount && formData.loanTenure && formData.loanRate) {
      emi =
        (formData.loanAmount * (formData.loanRate / 100)) /
        (1 - Math.pow(1 + formData.loanRate / 100, -formData.loanTenure)) /
        12;
      setEmiVal(Math.round(emi));
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleSubmit = () => {
    if (
      formData.loanAmount &&
      formData.loanTenure &&
      formData.loanRate &&
      formData.loanType &&
      formData.monthlyIncome
    ) {
      dispatch(createLoan(personalFormData, businessFormData, loanFormData))
        .then(() => {
          alert("Successfully submitted loan querry");
          resetFormData();
        })
        .catch((err) => {
          alert("Error!", err);
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="personalDetailsHolder">
      <p className="pageTitle">Please enter your loan details</p>
      <div className="personalDetailsForm">
        <div className="mb-3">
          <div className="inputFlex">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Desired Loan Amount * 
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="loanAmount"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.loanAmount}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Average Monthly Income *
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="monthlyIncome"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.monthlyIncome}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Loan Type 
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="loanType"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.loanType}
              />
            </div>
          </div>
          <div className="inputFlex">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Rate of interest (monthly) *
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="loanRate"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.loanRate}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Tenure of Loan (in months) *
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="loanTenure"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.loanTenure}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                EMI installment value *
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                readOnly
                onClick={() => {
                  calcEmiVal();
                }}
                value={emiVal}
                name="emiVal"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
              />
            </div>
          </div>
        
        </div>
      </div>
      <div className="buttonflex">
        <input
          type="button"
          onClick={() => {
            tab !== 0 && updateTab(tab - 1);
          }}
          disabled={tab === 1 ? true : false}
          value="<"
        />
        {tab === 3 ? (
          <>
            <input
              onClick={() => {
                checkValidation() && handleSubmit();
              }}
              type="button"
              value="SUBMIT"
            />
          </>
        ) : (
          <>
            <input
              type="button"
              onClick={() => {
                tab !== 3 && updateTab(tab + 1);
              }}
              value=">"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LoanDetails;
