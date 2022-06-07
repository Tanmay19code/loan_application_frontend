import React from "react";

const BusinessDetails = ({ tab, updateTab, formData, setFormData }) => {
  return (
    <div className="personalDetailsHolder">
      <p className="pageTitle">Please enter your Business details</p>
      <div className="personalDetailsForm">
        <div className="mb-3">
          <div className="inputFlex">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Business Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="businessName"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.businessName}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Business Domain *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="businessDomain"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.businessDomain}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nature of Business * 
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="businessNature"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.businessNature}
              />
            </div>
          </div>
          <div className="inputFlex">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Business Premises *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="businessPremises"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.businessPremises}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Any Business Partner? If yes, please mention their names *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="businessPartners"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.businessPartners}
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                GST number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="gstNumber"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.gstNumber}
              />
            </div>
          </div>
          <div className="inputFlex">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Address *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="businessAddress"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.businessAddress}
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
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                State *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="state"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.state}
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

export default BusinessDetails;
