import "./App.css";
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
export const demoClientId = "client_9m1fYK3MPQxwKsib5CxtpB";
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
      // document.title="Word Counter - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title="Word Counter - Light Mode"
    }
  }
  return (
    <>
        <Router>
        <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
      
          <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try Word Counter-Remove ectra spaces, Character Counter" mode={mode} clientId={demoClientId}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
