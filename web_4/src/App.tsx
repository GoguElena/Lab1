import React from 'react';
import './App.css';
import './interface.ts';

const App: React.FC = () => {
  // Utilizarea interfeței într-un obiect
  const myObject: SecondInterface = {
    field1: "Gogu Elena",
    field2: 20,
    field3: "Universitatea Tehnica Moldova",
    field4: "Calculatoare, Informatica si Microelectronica",
    field5: "Informatică și Ingineria Sistemelor ",
    additionalField1: "elena.gogu@iis.utm.md",
    additionalField2: "012345678"
  };
  console.log(myObject);
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Personal Information</h1>
            </header>
            <div className="App-content">
                <p><b>Name:</b> {myObject.field1}</p>
                <p><b>Age:</b> {myObject.field2}</p>
                <p><b>University:</b> {myObject.field3}</p>
                <p><b>Faculty:</b> {myObject.field4}</p>
                <p><b>Department:</b> {myObject.field5}</p>
                <p><b>Email:</b> {myObject.additionalField1}</p>
                <p><b>Contact number:</b> {myObject.additionalField2}</p>
            </div>
        </div>
    );

}

export default App;
