import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./component/List";
import Form from "./component/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Form />
        <List articles={[1,2,3]}/>
      </header>
    </div>
  );
}

export default App;
