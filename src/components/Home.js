import React from 'react';
import Standings from './Standings';
import Preview from './Preview';

export default class Home extends React.Component {

    handleClick() {
        console.log('works');
    }

    render() {
        return (
            <div id='home'>
                <div className='header'>
                    <div className='header-top'>
                        <h3>NFL Overview - 2017</h3>
                        <div className='header-buttons'>
                        <button type="button" className="btn btn-sm btn-outline-primary" onClick={this.handleClick.bind(this)}>Division</button>
                        <button type="button" className="btn btn-sm btn-outline-primary" onClick={this.handleClick.bind(this)}>Conference</button>
                        <button type="button" className="btn btn-sm btn-outline-primary" onClick={this.handleClick.bind(this)}>League</button>
                        </div>
                    </div>
                    <div className='header-border-one'></div>
                    <div className='header-border-two'></div>
                    <div className='header-border-three'></div>
                </div>
                <Standings stats={this.props.stats.standings} />
                <div className='home-row'>
                    <Preview stats={this.props.stats.passing} category='passing' preview='yards' />
                    <Preview stats={this.props.stats.tackles} category='tackles' preview='tackles' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.rushing} category='rushing' preview='yards' />
                    <Preview stats={this.props.stats.sacks} category='sacks' preview='sacks' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.receiving} category='receiving' preview='yards' />
                    <Preview stats={this.props.stats.interceptions} category='interceptions' preview='interceptions' />
                </div>
            </div>
        )
    }
}