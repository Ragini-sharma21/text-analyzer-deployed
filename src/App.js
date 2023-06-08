
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // let name="ragini";
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
       } )
       setTimeout(()=>{
           setAlert(null);
       },1500);
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success");
      document.title="Textutils-dark mode ";

    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title="Textutils-light mode ";
    }
  }
  
  return (
    
    <>
    { /* <nav>
      <li>home</li>
      <li>services</li>
      <li>contact</li>
    </nav>
    <div className="container">
      <h1>hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam tempore quibusdam quisquam dolores eveniet molestias consequatur officiis, eius debitis ab nostrum rerum magnam laboriosam labore, sed placeat, provident saepe?</p>
    </div> */ }

<BrowserRouter>
  <Navbar title ="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>   {/*need to add every component here which we are making and import it upper */}
  <Alert alert={alert}/>
<div className="container my-5" >


<Routes>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>

</div>
</BrowserRouter>

    </>
  );
}

export default App;
