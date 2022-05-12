import React from 'react';
import logo from './logo.png';
import './App.css'; 
import { invoke } from '@tauri-apps/api/tauri'

function App() {
  return (
    <div className="App">
      <div className="TopBar">
        <img src={logo} className="logo"></img>
      </div>
      <div className="BottomBar">
        <button className="MainButton launch" onClick={test}>Launch  </button>
        <button className="MainButton version">Version  </button>
        <button className="MainButton profile">Profile  </button>
      </div>
    </div>
  );
}

function test()
{
  console.log("UwU")
  invoke("my_custom_command")
}

export default App;
