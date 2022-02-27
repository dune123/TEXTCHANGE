import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  //const[alert,setalert]=useState(null);
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
     <Navbar title="Text Change" mode={mode} togglemode={togglemode} key={new Date()}/>
     <div className="container my-3">
     <Switch>
     <Route  path="/about">
       <About mode={mode}/>
     </Route>
     <Route >
     <Textform heading="Enter the Text to analyze" mode={mode}/>
     </Route>
     </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;
