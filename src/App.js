
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  // const [alert, setAlert] = useState(null);

  // const showAlert= (message,type)=>
  // {
  //   setAlert({
  //     msg:message,
  //     type:type
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // }
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      // showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      // showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}

{/* <Alert alert={alert}/>  */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;
