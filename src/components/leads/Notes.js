import React from 'react';
import '../css/Notes.css';


export default function Notes(props) {
  return (
    <div>
        <div className='primary5'>
        <h1 id="pc">Notes</h1><br />
        <div className="form-floating t-1">
          <textarea
            className="form-control t-22"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
          <label id='ara' htmlFor="floatingTextarea2">text</label>
        </div>
        </div>

        
        {/* <div id="prev">
        <button className="btn-prev"  onClick={()=>{}}>Cancel</button>
        <button className="btn-next"  onClick={()=>{}}>Next</button>
      </div> */}

     
    </div>
  )
}
