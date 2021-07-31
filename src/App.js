import React from "react";
import { useState } from "react";
import vimage from "./images/Vector.png";
import cimage from "./images/close.png";
import asterisk from "./images/asterisk.png";
import flag from "./images/Flag.png";
import drop from "./images/drop.png";
import "./App.css";
import axios from "axios";
import qs from 'qs'


function App() {
  
  const [value, setValue] = useState({
    name:"",
    address:"",
    number:"",
    time:""
  });
  const [dropDownValue,setDropDownValue]=useState("")

  const handleDropdown =(e)=>
  {
    setDropDownValue(e.target.value)
  }
  const handleChange=(e)=>
  {

    setValue({
      ...value,
      [e.target.name]:e.target.value, 
    })
  }
const formPost=(e)=>

{
  e.preventDefault();
  var data = qs.stringify({
    "entry.923575230": value.name,
    "entry.959771919": value.address,
    'entry.1470857061': value.number,
    'entry.766642417': value.time,
    'entry.210369612': dropDownValue,
  });
  var config = {
    method: 'post',
    url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded', 
     },
    data : data
  };
  axios(config)
  .then(function (response) {

    console.log(JSON.stringify(response.data));

    console.log("done");
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

class Button extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      button: true,
      
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.setState({
      button:!this.state.button
    })
  }
  render(){
    return (
    <div className="container">
      <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}> <i className="far fa-smile"></i> {this.props.value}</button>  
    </div>
    )
  }
  
}

  

  return (
    <div className="App">
      <div className="gradient-form">
        <div className="gradient">
          <div className="gradient-content">
            <img className="vector" src={vimage} alt="./images/Vector.png" />
            <h1 className="vector-h"> Polymatic </h1> 
            <h5 className="vector-t"> Redesign Everything. </h5> 
          </div> 
        </div> 
        <div className="form ">
          <form className="form-group">
          
            <img className="close-btn"  src={cimage} alt="" />
            <h1
              className="head-text1"
              style={{
                textAlign: "center",
                fontSize: "45px",
              }}
            >
               
              Get a Free Demo. 
            </h1> 
           
            <h1
              className="head-text2"
              style={{
                textAlign: "center",
                fontSize: "45px",
              }}
            >
               
              It’ s Completely 
              
              <span
                style={{
                  color: "#3584A7",
                  marginLeft: '10px',
                  fontWeight: '800px'
                }}
              >
                 
                 Free! 
              </span> 
            </h1> 
          
            <label className="label">
                            Name <img className="astersick" src={asterisk} alt="" /> 
            </label> 
            <input
              className="input"
              placeholder="Enter your Name"
              value={value.name}
              name="name"
             onChange={handleChange}
            />
            <label className="label">
               
              Address <img className="astersick" src={asterisk} alt="" /> 
            </label> 
            <input
              className="input"
              placeholder="Enter your Address"
              value={value.address}
              name="address"
              onChange={handleChange}
            />
            <label className="label">
               
              Phone Number <img
                className="astersick"
                src={asterisk}
                alt=""
              /> 
            </label> 
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  marginTop: "8px",
                }}
                src={flag}
                alt=""
              />
              <img
                style={{
                  width: "15px",
                  marginTop: "15px",
                  height: "10px",
                }}
                src={drop}
                alt=""
              />
              <span
                style={{
                  width: "55px",
                  marginTop: "10px",
                  height: "10px",
                }}
              >
               
                + 91
              </span>
              <input
                style={{
                  width: "80%",
                }}
                className="input"
                placeholder=""
                value={value.number}
                name="number"
                onChange={handleChange}
              />
            </div>
           
            <label className="label">
             
              Select Demo Time
              <img className="astersick" src={asterisk} alt="" />
            </label>
            
            <div
              className="timeInputs"
              style={{
                display: "flex",
              }}
            >
              <Button
                id="btn"
                 
                class="t-input btn btn-outline-secondary"
                type="button"
                name="time"
                value="1-2"
                onClick={handleChange}
              >
              
                1-2 
                
              </Button> 

             
              
              <Button
                id="btn"
                style = {{borderColor: '1px solid #0000'}}
                class="t-input btn btn-outline-secondary"
                type="button"
                name="time"
                value="3-4"
                onClick={handleChange}
              >
               
                3-4
               
              </Button>
              
              <Button
                
                
                id="btn3"
                
                class="t-input btn btn-outline-secondary"
                type="button"
                name="time"
                value="5-6"
                onClick={handleChange}
              >
                
                5-6
              </Button>
              
              <Button
                id="btn"
                
                class="t-input btn btn-outline-secondary"
                type="button"
                name="time"
                value="7-8"
                onClick={handleChange}
              >
                7-8
              </Button> 
           
            </div> 
            <label className="label"> Where did you hear about us ? </label> 
            
            <div className=" input-group mb-3">
            <select class="input form-select" id="inputGroupSelect02" value={dropDownValue} onChange={handleDropdown}>
                <option style={{ display: "none", border: 'none', width: '100%' }}> Select  </option>
                <option value="Google"> Google </option>
                <option value=" Facebook "> Facebook </option> 
                <option value=" Friends and Families "> Friends and Families </option> 
              </select> 
              
              <label class="input-group-text" for="inputGroupSelect02">
                 
              </label> 
            </div> 
            <button type="submit" className="submit-btn" onClick={formPost}>
               
              Continue 
            </button> 
            <p
              style={{
                textAlign: "center",
                fontSize: "22px",
              }}
            >
               
              By registering here, I agree to PolyMatic’ s Terms & Conditions
              and Privacy Policy 
            </p> 
          </form> 
        </div> 
      </div> 
    </div>
  );
}

export default App;
