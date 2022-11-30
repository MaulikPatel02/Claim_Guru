import React from 'react';
import '../css/Insurance_Details.css'


export default function Insurance_Details(props) {
  return (
    <div>
        <div className='primary3'>
        <h1 id="pc">Insurance Details</h1>
<br />
        <div>
            <h1 id="n">Insurance Carrier</h1>
            <select className="btn  dropdown-toggle drp2">
              <option>Select insurance carrier</option>
            </select>
        </div>
    <br />
        <div>
        <h1 id="n">Policy Number</h1>
        <div className="mb-3 insu">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="text"
              />
            </div>
        </div>
        </div>

        {/* <div id="prev">
        <button className="btn-prev"  onClick={()=>{}}>Cancel</button>
        <button className="btn-next" onClick={()=>{}}>Next</button>
      </div> */}

   
    </div>
  )
}
