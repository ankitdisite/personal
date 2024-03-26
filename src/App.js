
import './App.css';
import React, { useState } from "react";


function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState('');
  const [password, setPassword] = useState('');
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedPassword(password);
    // You can add further logic here, such as sending the password to a server for validation
    // or performing any other action you need.
  };

  

  return (
    <div className="App" style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', minWidth: '1000px', padding: '20px',  alignItems: 'center', justifyContent: 'center' }}>
      <h1>Fuck off You dont deserve this</h1>
      {/* {/* <select onChange={handleDropdownChange} style={{marginBottom: '20px', fontSize: '16px',minWidth:"500px", padding: '10px'}}>
        <option value="144">144p</option>
        <option value="440">440p</option>
        <option value="720">720p</option>
        <option value="1080">1080p</option>
       
        
      </select> */}

      {/* <div>
      {selectedOption && selectedOption==="1080" &&(
    <div>
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={handleChange}
    />
    <button onClick={handleSubmit}>Submit</button>
  </div>
           */}
        {/* )}
        {submittedPassword && selectedOption==="1080" && submittedPassword==="ankitLovesNik" &&(
<img
            src={require('./nikita.jpeg')}
            //alt={selectedOption}
            style={{ maxWidth: '600px', maxHeight: '500px'}}
          />
        )} */}
        {/* {selectedOption && selectedOption==="144" &&(
          <img
            src={require('./moon144.jpeg')}
            //alt={selectedOption}
            style={{ maxWidth: '1000px', maxHeight: '900px' }}
          />
        )} */}
        {/* {selectedOption && selectedOption==="440" &&(
          <img
            src={require('./moon440.jpeg')}
            //alt={selectedOption}
            style={{ maxWidth: '1000px', maxHeight: '900px' }}
          />
        )}
        {selectedOption && selectedOption==="720" &&(
          <img
            src={require('./moon720.jpg')}
            //alt={selectedOption}styl
            style={{ maxWidth: '1000px', maxHeight: '1000px' }}
          />
        )}
        { selectedOption==="" &&(
          <img
            src={require('./moon144.jpeg')}
            //alt={selectedOption}styl
            style={{ maxWidth: '1000px', maxHeight: '1000px' }}
          />
        )} */}
        {/* {selectedOption &&  (
          <img
            src={require(selectedOption)}
            alt={selectedOption}
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
        )} */}
      {/* </div>  */}
    </div>
  );
}

export default App;
