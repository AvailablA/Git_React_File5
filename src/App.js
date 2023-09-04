import React from "react";
import ReactDOM from "react-dom";
import Heading from './Heading';
import Para from './Para';
import List from "./List";
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
        <Heading/>
        <Para/>
        <List />
        </>
  );
}

export default App;
