import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import Home from './Home';
import PlayerStats from './PlayerStats';
import PassingComponent from './PassingComponent';
import RushingComponent from './RushingComponent';
import ReceivingComponent from './ReceivingComponent';
import TacklesComponent from './TacklesComponent';
import SacksComponent from './SacksComponent';
import InterceptionsComponent from './InterceptionsComponent';
import TeamStats from './TeamStats';
import TeamOffenseTotal from './TeamOffenseTotal';
import TeamDefenseTotal from './TeamDefenseTotal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scrapeStandings, scrapePassing, scrapeRushing, scrapeReceiving, scrapeTackles, scrapeSacks, scrapeInterceptions, scrapeOffenseTotal, scrapeOffensePassing, scrapeOffenseRushing, scrapeOffenseReceiving, scrapeDefenseTotal, scrapeDefenseDetail } from '../actions/scrapeAction';
import { toggleStandings } from '../actions/toggleAction';

const request = require('request');
const cheerio = require('cheerio');

class App extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.toggles.toggleYear != prevProps.toggles.toggleYear) {
      this.scrape();
    }
  }

  componentDidMount() {
    this.scrape();
  }

  scrape() {
    let year = this.props.toggles.toggleYear;
    this.props.scrapeStandings(year)
    this.props.scrapePassing(year);
    this.props.scrapeRushing(year);
    this.props.scrapeReceiving(year);
    this.props.scrapeTackles(year);
    this.props.scrapeSacks(year);
    this.props.scrapeInterceptions(year);
    this.props.scrapeOffenseTotal(year);
    this.props.scrapeOffensePassing(year);
    this.props.scrapeOffenseRushing(year);
    this.props.scrapeOffenseReceiving(year);
    this.props.scrapeDefenseTotal(year);
    this.props.scrapeDefenseDetail(year);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={props => <Home stats={this.props.stats} toggles={this.props.toggles} toggleStandings={this.props.toggleStandings} />} />
          <Route path="/playerstats" render={props => <PlayerStats stats={this.props.stats} />} />
          <Route path="/passing" render={props => <PassingComponent stats={this.props.stats.passing} />} />
          <Route path="/rushing" render={props => <RushingComponent stats={this.props.stats.rushing} />} />
          <Route path="/receiving" render={props => <ReceivingComponent stats={this.props.stats.receiving} />} />
          <Route path="/tackles" render={props => <TacklesComponent stats={this.props.stats.tackles} />} />
          <Route path="/sacks" render={props => <SacksComponent stats={this.props.stats.sacks} />} />
          <Route path="/interceptions" render={props => <InterceptionsComponent stats={this.props.stats.interceptions} />} />
          <Route path="/teamstats" render={props => <TeamStats stats={this.props.stats} />} />
          <Route path="/offensetotal" render={props => <TeamOffenseTotal stats={this.props.stats.offenseTotal} />} />
          <Route path="/defensetotal" render={props => <TeamDefenseTotal stats={this.props.stats.defenseTotal} />} />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats,
    toggles: state.toggles
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    scrapeStandings: scrapeStandings,
    scrapePassing: scrapePassing,
    scrapeRushing: scrapeRushing,
    scrapeReceiving: scrapeReceiving,
    scrapeTackles: scrapeTackles,
    scrapeSacks: scrapeSacks,
    scrapeInterceptions: scrapeInterceptions,
    scrapeOffenseTotal: scrapeOffenseTotal,
    scrapeOffensePassing: scrapeOffensePassing,
    scrapeOffenseRushing: scrapeOffenseRushing,
    scrapeOffenseReceiving: scrapeOffenseReceiving,
    scrapeDefenseTotal: scrapeDefenseTotal,
    scrapeDefenseDetail: scrapeDefenseDetail,
    toggleStandings: toggleStandings
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
