import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Skepticism from '../pages/Skepticism';

const MainContent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/skepticism" exact component={Skepticism} />
      </Switch>
    </Router>
  );
};

export default MainContent;