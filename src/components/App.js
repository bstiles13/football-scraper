import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from '../logo.svg';
import './App.css';
import axios from 'axios';
import PassingComponent from './PassingComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scrapePassing } from '../actions/scrapeAction';

class App extends Component {

  componentDidMount() {
    this.props.scrapePassing();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path="/" render={ props => <PassingComponent stats={this.props.stats}/> } />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    scrapePassing: scrapePassing
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
