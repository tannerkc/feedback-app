import './App.css';
import Dashboard from './pages/Dashboard';
import React, { useEffect, useState } from "react";
import axios from 'axios'
import feedbackContext from './utils/FeedbackContext'

function App() {

  const [feedbackData, setFeedbackData] = useState([])

  useEffect(()=>{
    axios.get('data.json').then((res)=>{
      setFeedbackData(res.data.productRequests)
    })
  }, [])

  return (
      <feedbackContext.Provider value={feedbackData}>
        <div className="App">
            <Dashboard />
        </div>
      </feedbackContext.Provider>
  );
}

export default App;
