import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "../css/Primary _Contact.css";
import "react-phone-number-input/style.css";


function Primary_Contact(props) {
  const [value, setValue] = useState();
  return (
    <div>
      <div className="primary">
        <form>
          <h1 id="pc">Primary Contact</h1>
<br />
          <h2 id="n">Name</h2>
          <div id="name">
            <select className="noption">
              <option>Name</option>
            </select>
            <div className="mb-3 nI">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="First Name"
              />
            </div>
            <div className="mb-3 NL">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Last Name"
              />
            </div>
          </div>
<br />
          <h1 id="n">Phone</h1>
          <div id="number">
            <div id="n">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              
              />
            </div>
            <div id="emailadd"> 
               <h1 id="n">Email</h1> 
            <div className="mb-3 numb">
           <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
              />
            </div>
            </div> 
          </div>
<br />
          <div id="address">
            <h1 id="n">Address</h1>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              type='text'
              placeholder="Street address"
            ></input>
          </div>
<br />
          <div id="city">
            <div>
              <h1 id="n">City</h1>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div id="states">
              <h1 id="n">State</h1>
              <select className="btn  dropdown-toggle drp">
                <option>State</option>
              </select>
            </div>
          </div>
<br />
          <div id="zip">
            <div>
              <h1 id="n">Zip Code</h1>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Zip code"
                />
              </div>
            </div>

            <div id="country">
              <h1 id="n">Country</h1>
              <select className="btn  dropdown-toggle drp">
                <option>State</option>
              </select>
            </div>
          </div>
<br />
          <div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                //  checked
              />
              <label
                id="n"
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Is Policyholder an organization?
              </label>
            </div>
          </div><br />

          <div id="org">
            <h1 id="n">Organization Name</h1>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Organization Name"
              />
            </div>
          </div>
        </form>
      </div>
      {/* <div id="prev">
        <button className="btn-prev" onClick={()=>{}} >Cancel</button>
        <button className="btn-next" onClick={()=>{}}>Next</button>
      </div> */}
    </div>
  );
}
export default Primary_Contact;
