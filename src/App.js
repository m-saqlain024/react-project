// import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar'
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light')
  const [label, setlabel] = useState("Enable Light Mode")
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const toggle = () => {
    if (mode === "light") {
      setmode("dark")
      setlabel('Enable Light Mode')
      document.body.style.backgroundColor = "gray"
      showalert("Dark Mode has Been Enabled", "success")
      document.title = "Textutils -  Dark Mode"

    }
    else {
      setmode("light")
      setlabel("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      showalert("Light Mode has Been Enabled", "success")
      document.title = "Textutils - Light Mode"

    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" label={label} abouttitle="About us" mode={mode} toggle={toggle} />
        
        <Alert alert={alert} />
        
          
        
          <div className='container my-3'>
      <Routes>
        
            <Route path='/home' element={<Form heading="Enter the Text to Analyze" showalert={showalert} mode={mode} />} />
            <Route path='/about' element={<About />} />
        </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}
export default App;
