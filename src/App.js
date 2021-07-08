import './App.css';
import Dashboard from './pages/Dashboard';
import React, { useEffect, useState } from "react";
import axios from 'axios'
import feedbackContext from './utils/FeedbackContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FeedbackDetails from './pages/FeedbackDetails';

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
            <Router>
              <Switch>
                <Route path="/feedback/:id" component={FeedbackDetails} />
                <Route path="/" component={Dashboard} />
              </Switch>
            </Router>
        </div>
      </feedbackContext.Provider>
  );
}

export default App;
