import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './navbar';
import About from './about';
import Home from './home';
import List from './List';
import Input from './Input';
// import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar /><hr/>
            <Route exact path='/' component={Home} />
            <Route path='/about' render={()=> <About name={'Tom'}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
