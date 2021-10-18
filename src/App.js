
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom'



function App() {
  const[alert , setAlert]= useState(null);
  const showAlert=(type, body)=>{
    setAlert({
      msg : body,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode , setMode]= useState('light');
  const changeMode =()=>{
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#020d1d';
        showAlert("success", "Dark Mode has Enabled");
        document.title= "TextUtils- DarkMode"
      
      

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Light Mode has Enabled");
      document.title= "TextUtils- LightMode"
    }
  }
  return (
    <>
  <Router>
   <NavBar title="TextUtility" about="About" mode={mode} changeMode={changeMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          
          <Route exact path="/">
          <TextForm heading ="Enter the Text:" mode={mode} showAlert= {showAlert} />
          </Route>
    </Switch>
   </div>
   </Router>
   
   </>
  );
}

export default App;

