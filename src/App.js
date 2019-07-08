import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./component/List";
import Form from "./component/Form";
import Post from "./component/posts";


class App extends React.Component {

render(){
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    </header>
    < div className = "row mt-5" >
    < div className = "col-md-4 offset-md-1" >
    < h2 > Artikel < / h2 >
    <List />
    < / div >
    < div className = "col-md-4 offset-md-1" >
    < h2 > Tambahkan artikel baru < / h2 >
    <Form />
    
    < / div >

    <div className="col-md-4 offset-md-1">
      <h2>API posts</h2>
      <Post />
    </div>
    < / div >
    </div>
    );
    }
}

export default App;
