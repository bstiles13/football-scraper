import React from 'react';
import Preview from './Preview';

export default class PlayerStats extends React.Component {
    render() {
        return (
            <div>
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