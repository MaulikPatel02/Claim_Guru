import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Primary_Contact from "./components/leads/Primary _Contact";
import Navbar from "./components/Navbar";
import Loss_Details from "./components/leads/Loss_Details";
import Insurance_Details from "./components/leads/Insurance_Details";
import Lead_Source from "./components/leads/Lead_Source";
import Notes from "./components/leads/Notes";
import Scheduling from "./components/leads/Scheduling";
import { useState,} from "react";

function App() {

  // let history=useHistory();

  const arr = {
    Primary_Contact: true,
    Loss_Details: false ,
    Insurance_Details: false,
    Lead_Source: false,
    Notes: false,
    Scheduling: false
  }

const [show, setShow] = useState(arr);

 const HandlerNext=()=>{

  if(show.Primary_Contact){
    setShow({...show,Primary_Contact:false,Loss_Details:true});
  }

  
  else if(show.Loss_Details){
    console.log("==>",show.Loss_Details);
    setShow({...show,Loss_Details:false,Insurance_Details: true});
  }

  else if(show.Insurance_Details === true){
    setShow({...show,Insurance_Details:false,Lead_Source: true});
  }

  else if(show.Lead_Source === true){
    setShow({...show,Lead_Source: false,Notes: true});
  }
  else if(show.Notes === true){
    setShow({...show,Notes: false,Scheduling: true});

  }

  else if(show.Scheduling === true){
    setShow({...show,Notes: false,Scheduling: false,Primary_Contact:true});
  }
 }
  
 const cancleBtn = () =>{

  setShow({...show,Primary_Contact:true,Loss_Details:false});

  
  if(show.Scheduling === true){
    setShow({...show,Scheduling: false,Notes: true});
  }
  else if(show.Notes === true){
    setShow({...show,Notes: false,Lead_Source:true});
  }
  
  else if(show.Lead_Source === true){
    setShow({...show,Lead_Source: false,Insurance_Details: true});
  }
  else if(show.Insurance_Details === true){
    setShow({...show,Insurance_Details:false,Loss_Details: true});
  }
  if(show.Loss_Details === true){
    setShow({...show,Loss_Details:false,Primary_Contact: true});
    
  }
 
 
 }

  return (
    <div>
      <BrowserRouter>
        <div className="nav row">
          <div className="navBAR">
            <Navbar />
          </div>
          <div className="home_page">
            <div className="header01">
              <Header showState={show}/>
            </div>
            {show.Primary_Contact && <Primary_Contact />}
            {show.Loss_Details && <Loss_Details />}
            {show.Insurance_Details && <Insurance_Details />}
            {show.Lead_Source && <Lead_Source />}
            {show.Notes &&  <Notes />}
            {show.Scheduling && <Scheduling />}

            <div id="prev">
            <button className="btn-prev" onClick={cancleBtn} >
              Cancel
            </button>
            <button className="btn-next" onClick= {HandlerNext}>
              Next
            </button>
          </div>
          </div>
         
        </div>

        <div className="container">
          <Routes>
            <Route path="/Dashboard" />
            <Route path="/Leads" />
            <Route path="/Clients" />
            <Route path="/Vendors" />
            <Route path="/Claims" />
            <Route path="/Carriers" />
            <Route path="/Profile" />
            <Route path="/Admin" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
