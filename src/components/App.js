import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from '../logo.svg';
import './App.css';
import axios from 'axios';
import PassingComponent from './PassingComponent';
import RushingComponent from './RushingComponent';
import ReceivingComponent from './ReceivingComponent';
import TacklesComponent from './TacklesComponent';
import SacksComponent from './SacksComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scrapePassing, scrapeRushing, scrapeReceiving, scrapeTackles, scrapeSacks, scrapeInterceptions } from '../actions/scrapeAction';

class App extends Component {

  componentDidMount() {
    this.props.scrapePassing();
    this.props.scrapeRushing();
    this.props.scrapeReceiving();    
    this.props.scrapeTackles();    
    this.props.scrapeSacks();    
    this.props.scrapeInterceptions();        
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path="/" render={ props => <PassingComponent stats={this.props.stats.passing}/> } />
          <Route exact path="/rushing" render={ props => <RushingComponent stats={this.props.stats.rushing}/> } />
          <Route exact path="/receiving" render={ props => <ReceivingComponent stats={this.props.stats.receiving}/> } />
          <Route exact path="/tackles" render={ props => <TacklesComponent stats={this.props.stats.tackles}/> } />
          <Route exact path="/sacks" render={ props => <SacksComponent stats={this.props.stats.sacks}/> } />
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
    scrapePassing: scrapePassing,
    scrapeRushing: scrapeRushing,
    scrapeReceiving: scrapeReceiving,
    scrapeTackles: scrapeTackles,
    scrapeSacks: scrapeSacks,
    scrapeInterceptions: scrapeInterceptions
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
