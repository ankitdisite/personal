
import './App.css';
import React, { useState } from "react";


function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  

  return (
    <div className="App" style={{backgroundColor: 'black', color: 'white', minHeight: '1000vh', padding: '900px'}}>
      <h1>Download Moon Image</h1>
      <select onChange={handleDropdownChange} style={{marginBottom: '20px', fontSize: '16px', padding: '10px'}}>
        <option value="144">144p</option>
        <option value="440">440p</option>
        <option value="720">720p</option>
        <option value="1080">1080p</option>
       
        
      </select>

      <div>
      {selectedOption && selectedOption==="1080" &&(
          <img
            src={require('./nikita.jpeg')}
            //alt={selectedOption}
            style={{ maxWidth: '600px', maxHeight: '500px' }}
          />
        )}
        {selectedOption && selectedOption==="144" &&(
          <img
            src={require('./moon144.jpeg')}
            //alt={selectedOption}
            style={{ maxWidth: '1000px', maxHeight: '900px' }}
          />
        )}
        {selectedOption && selectedOption==="440" &&(
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
        )}
        {/* {selectedOption &&  (
          <img
            src={require(selectedOption)}
            alt={selectedOption}
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
        )} */}
      </div>
    </div>
  );
}

export default App;
