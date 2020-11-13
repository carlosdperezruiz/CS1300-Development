import React from 'react';
import './App.less';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FilterPage } from './Pages/FilterPage';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/Filter" component={FilterPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
