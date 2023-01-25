// import logo from './logo.svg';
import Navbar from './components/Navbar'
import Form  from './components/Form';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode , setmode]= useState('light')
  const [label, setlabel]= useState("Enable Light Mode")
  const [alert, setalert]= useState (null)

  const showalert=(message, type)=>{
    setalert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const toggle =()=>{
    if(mode === "light"){
      setmode("dark")
      setlabel('Enable Light Mode')
      document.body.style.backgroundColor="gray"
      showalert("Dark Mode has Been Enabled", "success")
      document.title="Textutils -  Dark Mode"

    }
    else{
      setmode("light")
      setlabel("Enable Dark Mode")
      document.body.style.backgroundColor="white"
      showalert("Light Mode has Been Enabled", "success")
      document.title="Textutils - Light Mode"

    }
  }
  return (
     <>
     <Navbar title="TextUtils" label={label}  abouttitle="About us" mode={mode} toggle={toggle}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
     <Form heading="Enter the Text to Analyze" showalert={showalert} mode={mode}/>
     {/* <About/> */}
     </div>
     </>
  );
}

export default App;
