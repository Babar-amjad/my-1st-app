
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
 import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import Home from './components/Home';
import Contact from './components/contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import contact from './components/contact';
import Help from './components/Help';


const name="Babar";
function App() {
const [mode , setMode]=useState('dark')
const[alert,setAlert]=useState(null)
const showAlert=(message,type)=>{
setAlert({
msg:'message',
type:'type'
})
}
  const togglemode=()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='gray';
      showAlert("dark mode has been unabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='orange';
      showAlert("dark mode has been unabled","success")
    }
  }


  return (
     <BrowserRouter>
     <Navbar  mode={mode}/>
      <Routes>
        <Route path="home" element={<Home />}>
        </Route>
        <Route path="about" element={<About/>}> 
        </Route>
        <Route path="contact" element={<Contact/>}>
        </Route>
        { <Route path="help" name={"Babar Amjad"} element={<Help/>}>

        </Route> }
      </Routes>
    </BrowserRouter>
  );
}


export default App;
