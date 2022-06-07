import React from "react";

const PersonalDetails = ({ tab, updateTab, formData, setFormData }) => {
  return (
    <div className="personalDetailsHolder">
      <p className="pageTitle">Please enter your personal details</p>
      <div className="personalDetailsForm">
        <div className="mb-3">
          <div className="inputFlex">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="firstName"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.firstName}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Middle Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="middleName"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.middleName}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="lastName"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.lastName}
              />
            </div>
          </div>
          <div className="inputFlex">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Age *
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="age"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.age}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Mobile no. *
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="mobileNumber"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.mobileNumber}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email *
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.email}
              />
            </div>
          </div>
          <div className="inputFlex">
          <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Aadhar Number *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="aadharNumber"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.aadharNumber}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Address *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="address"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.address}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Pincode *
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="pincode"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.pincode}
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
        className={`${tab === 1 ? "disabledInput" : ""}`}
          value="<"
        />
        {tab === 3 ? (
          <>
            <input type="button" value="SUBMIT" />
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

export default PersonalDetails;
