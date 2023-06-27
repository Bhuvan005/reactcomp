import React from "react";
//import logo from './logo.svg';
//import './App.css';
import FunctionalComp from "./Components/functionalComp";
import { ClassComp1 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter"
import ParentComp from "./Components/ParentComp";

function App() {
  return (
  <div>
    <h1>Hello</h1>
    <h1>User</h1>
    <FunctionalComp/>
    <ClassComp1/>
    <Click/> 
    <Counter/> 
    <ParentComp/>
  </div>
  );
}

export default App;
