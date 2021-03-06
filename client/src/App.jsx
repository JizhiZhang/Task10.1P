import React from 'react';
import './App.css';
import PageHeader from './PageHeader';
import RequesterTasks from './RequesterTasks';
import CreateTask from './CreateTask';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <PageHeader />
      <Router>
        <Route path='/create' component={CreateTask} />
        <Route exact path='/' component={RequesterTasks} />
      </Router>
    </div>
  );
}

export default App;
