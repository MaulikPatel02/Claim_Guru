import React from "react";
import "../css/Scheduling.css";

export default function Scheduling(props) {
  return (
    <div>
      <div className="primary6">
        <h1 id="pc">Scheduling</h1>
        <br />

        <div id="Sc">
          <div>
            <h1 id="n">Inspection Type</h1>
            <select className="btn  dropdown-toggle drp">
              <option>Inspection Type</option>
            </select>
          </div>

          <div id="time">
            <h1 id="n">Duration of Inspection</h1>

            <div id="time-2">
              <div className="mb-3 NL">
                <input
                  type="text"
                  className="form-control"
                  id="HH"
                  placeholder="HH"
                />
                <svg
                  id="hsvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
              </div>

              <div className="mb-3 NL">
                <input
                  type="text"
                  className="form-control"
                  id="MM"
                  placeholder="MM"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
