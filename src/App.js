import './App.css';
import Dashboard from './pages/Dashboard';
import React, { useEffect, useState } from "react";
import axios from 'axios'

var feedbackContext = React.createContext(null);

function App() {

  const [feedbackData, setFeedbackData] = useState([])

  useEffect(()=>{
    axios.get('data.json').then((data)=>{
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      <feedbackContext.Provider value={feedbackData}>
          <Dashboard />
      </feedbackContext.Provider>
    </div>
  );
}

export default App;
