import React from 'react';
import '../css/Lead_Source.css'


export default function Lead_Source(props) {
  return (
    <div>
        <div className='primary4'>
        <h1 id="pc">Lead Source</h1><br />
        <div>
            <h1 id="n">Source of Lead</h1>
            <select className="btn  dropdown-toggle drp2">
              <option>Select source of lead</option>
            </select>
        </div><br /><br /><br />
        </div>

        {/* <div id="prev">
        <button className="btn-prev"  onClick={()=>{}}>Cancel</button>
        <button className="btn-next"  onClick={()=>{}}>Next</button>
      </div> */}

    
    </div>
  )
}
