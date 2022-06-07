import "./styles.css";
import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import BusinessDetails from "./components/BusinessDetails";
import LoanDetails from "./components/LoanDetails";

const App = () => {
  const [tab, setTab] = useState(1);

  const updateTab = (number) => {
    setTab(number);
  };

  const checkValidation = () => {
    if (personalFormData.aadharNumber.length !== 12) {
      updateTab(1);
      alert("Aadhar Number is not valid");
      return false;
    } else if (
      personalFormData.firstName.length < 3 ||
      personalFormData.lastName.length < 3
    ) {
      updateTab(1);
      alert("Enter valid name");
      return false;
    } else if (!personalFormData.age || personalFormData.age == 0) {
      updateTab(1);
      alert("Enter valid age");
      return false;
    } else if (
      !personalFormData.email.includes("@") ||
      !personalFormData.email.includes(".")
    ) {
      updateTab(1);
      alert("Enter valid email");
      return false;
    } else if (personalFormData.mobileNumber.length !== 10) {
      updateTab(1);
      alert("Enter valid mobile number");
      return false;
    } else if (personalFormData.address.length < 10) {
      updateTab(1);
      alert("Enter valid address");
      return false;
    } else if (businessFormData.businessName.length < 3) {
      updateTab(2);
      alert("Enter valid business name");
      return false;
    } else if (businessFormData.businessDomain.length < 3) {
      updateTab(2);
      alert("Enter valid business domain");
      return false;
    } else if (businessFormData.businessAddress.length < 10) {
      updateTab(2);
      alert("Enter valid business address");
      return false;
    } else if (businessFormData.businessPremises.length < 3) {
      updateTab(2);
      alert("Enter valid business premises");
      return false;
    } else if (loanFormData.emi <= 0) {
      console.log(loanFormData.emiVal);
      updateTab(3);
      alert("Click on EMI field to evaluate EMI value");
      return false;
    } else {
      return true;
    }
  };

  const resetFormData = () => {
    personalFormData.firstName = "";
    personalFormData.middleName = "";
    personalFormData.lastName = "";
    personalFormData.age = 0;
    personalFormData.mobileNumber = 0;
    personalFormData.email = "";
    personalFormData.aadharNumber = 0;
    personalFormData.address = "";
    personalFormData.pincode = 0;

    businessFormData.businessName = "";
    businessFormData.businessDomain = "";
    businessFormData.businessNature = "";
    businessFormData.businessPremises = "";
    businessFormData.businessPartners = "";
    businessFormData.gstNumber = "";
    businessFormData.businessAddress = "";
    businessFormData.pincode = 0;
    businessFormData.state = "";

    loanFormData.loanAmount = 0;
    loanFormData.monthlyIncome = 0;
    loanFormData.loanType = "";
    loanFormData.loanRate = 0;
    loanFormData.loanTenure = 0;
    loanFormData.emiVal = 0;

    updateTab(1);
  };

  const [personalFormData, setPersonalFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: 0,
    mobileNumber: 0,
    email: "",
    aadharNumber: 0,
    address: "",
    pincode: 0,
  });

  const [businessFormData, setBusinessFormData] = useState({
    businessName: "",
    businessDomain: "",
    businessNature: "",
    businessPremises: "",
    businessPartners: "",
    gstNumber: "",
    businessAddress: "",
    pincode: 0,
    state: "",
  });

  const [loanFormData, setLoanFormData] = useState({
    loanAmount: 0,
    monthlyIncome: 0,
    loanType: "",
    loanRate: 0,
    loanTenure: 0,
    emiVal: 0,
  });

  const [emiVal, setEmiVal] = useState(0);

  console.log(tab);

  return (
    <>
      <div className="pageContainer">
        <p className="title">Loan Application</p>
        <div className="tabs">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                onClick={() => {
                  updateTab(1);
                }}
                className={`nav-link ${
                  tab === 1 ? `active` : `text-secondary`
                }`}
                aria-current="page"
              >
                Personal Details
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  updateTab(2);
                }}
                className={`nav-link  ${
                  tab === 2 ? `active` : `text-secondary`
                }`}
                aria-current="page"
              >
                Business Details
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  updateTab(3);
                }}
                className={`nav-link ${
                  tab === 3 ? `active` : `text-secondary`
                }`}
                aria-current="page"
              >
                Loan Application Details
              </a>
            </li>
          </ul>
        </div>
        <div className="pageHolder">
          {tab === 1 ? (
            <>
              <PersonalDetails
                formData={personalFormData}
                setFormData={setPersonalFormData}
                updateTab={updateTab}
                tab={tab}
              />
            </>
          ) : tab === 2 ? (
            <>
              <BusinessDetails
                formData={businessFormData}
                setFormData={setBusinessFormData}
                updateTab={updateTab}
                tab={tab}
              />
            </>
          ) : tab === 3 ? (
            <>
              <LoanDetails
                loanFormData={loanFormData}
                businessFormData={businessFormData}
                personalFormData={personalFormData}
                checkValidation={checkValidation}
                formData={loanFormData}
                setFormData={setLoanFormData}
                emiVal={emiVal}
                setEmiVal={setEmiVal}
                updateTab={updateTab}
                tab={tab}
                resetFormData={resetFormData}
              />
            </>
          ) : (
            <>
              <h1>No such tab exist</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
