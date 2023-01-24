// import logo from './logo.svg';
import Navbar from './components/Navbar'
import Form  from './components/Form';
import About from './components/About';
function App() {
  return (
     <>
     <Navbar title="TextUtils"  abouttitle="About us"/>
     <div className='container my-3'>

     {/* <Form heading="Enter the Text to Analyze"/> */}
     <About/>
     </div>
     </>
  );
}

export default App;
