// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import { useState } from "react";



import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const[green,setGreen]=useState('light')
  const [alert,setAlert]=useState(null);
  

let SwitchGreen=()=>{
  if(green==='light'){setGreen('success')
  document.body.style.backgroundColor='#2D6'
}
else{setGreen('light')
document.body.style.backgroundColor='white'
}
}


   let SwitchMode = () => {
    if (mode === "light") {
      setMode("dark");
    document.body.style.backgroundColor='#2D4263'
    setAlert('success','Dark mode has been enabled')}
   
    else {setMode('light')
    document.body.style.backgroundColor='white'
    setAlert('success','Light mode has been enabled')
  }
  // switch (mode) {
  //   case 'light': setMode("dark");
  //   document.body.style.backgroundColor='#2D4263'
      
  //     break;
  //     case 'dark':setMode('light')
  //     document.body.style.backgroundColor='white'
  //     break;
  //     case 'light':setMode('success')
  //     document.body.style.backgroundColor='white'
  
  //   default:setMode('light')
  //     break;
  // }

   
  
  
  };

  let ShowAlert=(type ,msg)=>{
    setAlert({type:type,message:msg})
  }

  return (
    <Router>
    <>     
      <Navbar mode={mode} SwitchMode={SwitchMode} green={SwitchGreen}  TitleOfDocument='Text Editor'/>
      
          
        
        <div>
        <Routes>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <TextArea  mode={mode} green={green}/>
          </Route>
        </Routes>
      
          
      {/* <Alert alert={alert}/> */}
      </div> 
    </>
    </Router>
  );
}

export default App;
