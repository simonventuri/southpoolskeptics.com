import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Home from './pages/Home';
import Skepticism from './pages/Skepticism';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Header />
      <MainContent>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/skepticism" component={Skepticism} />
        </Switch>
      </MainContent>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));