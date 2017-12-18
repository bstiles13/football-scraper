import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import Home from './Home';
import PassingComponent from './PassingComponent';
import RushingComponent from './RushingComponent';
import ReceivingComponent from './ReceivingComponent';
import TacklesComponent from './TacklesComponent';
import SacksComponent from './SacksComponent';
import InterceptionsComponent from './InterceptionsComponent';

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
    this.props.scrapeInterceptions()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={props => <Home stats={this.props.stats} />} />
          <Route path="/passing" render={props => <PassingComponent stats={this.props.stats.passing} />} />
          <Route path="/rushing" render={props => <RushingComponent stats={this.props.stats.rushing} />} />
          <Route path="/receiving" render={props => <ReceivingComponent stats={this.props.stats.receiving} />} />
          <Route path="/tackles" render={props => <TacklesComponent stats={this.props.stats.tackles} />} />
          <Route path="/sacks" render={props => <SacksComponent stats={this.props.stats.sacks} />} />
          <Route path="/interceptions" render={props => <InterceptionsComponent stats={this.props.stats.interceptions} />} />
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
