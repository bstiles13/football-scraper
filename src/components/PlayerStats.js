import React from 'react';
import Header from './Header';
import Preview from './Preview';

export default class PlayerStats extends React.Component {
    render() {
        return (
            <div>
                <Header title='League Leaders' />
                <div className='home-row'>
                    <Preview stats={this.props.stats.passing} title='passing' category='passing' preview='yards' />
                    <Preview stats={this.props.stats.tackles} title='tackles' category='tackles' preview='tackles' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.rushing} title='rushing' category='rushing' preview='yards' />
                    <Preview stats={this.props.stats.sacks} title='sacks' category='sacks' preview='sacks' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.receiving} title='receiving' category='receiving' preview='yards' />
                    <Preview stats={this.props.stats.interceptions} title='interceptions' category='interceptions' preview='interceptions' />
                </div>
            </div>
        )
    }
}