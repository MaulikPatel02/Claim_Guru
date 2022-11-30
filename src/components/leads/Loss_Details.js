import React from "react";
import "../css/Loss_Details.css";


export default function Loss_details(props) {
  return (
    <div>
      <div className="primary2">
        <h1 id="pc">Loss Details</h1>
        <br />
        <div className="Date">
          <div id="DLOSS">
            <h2 id="n">Date of Loss</h2>
            <input type="date" />
          </div>
          <div id="doss">
            <h2 id="n">Cause of Loss</h2>
            <select className="btn  dropdown-toggle drp">
              <option>Cause of Loss</option>
            </select>
          </div>
        </div>
        <br />
        <h2 id="n">Loss Description</h2>
        <div className="form-floating t-1">
          <textarea
            className="form-control t-2"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
          <label id="ara" htmlFor="floatingTextarea2">Loss Description</label>
        </div>
      </div>
      {/* <div id="prev">
        <button className="btn-prev"  onClick={()=>{}}>Cancel</button>
        <button className="btn-next"  onClick={()=>{}}>Next</button>
      </div> */}
    
    </div>
  );
}
