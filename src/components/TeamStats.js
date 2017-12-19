import React from 'react';
import Header from './Header';
import Preview from './Preview';

export default class TeamStats extends React.Component {
    render() {
        return (
            <div>
                <Header title='League Leaders' />
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} category='Offense Total Yards' preview='yards' />
                    <Preview stats={this.props.stats.defenseTotal} category='Defense Total Yards' preview='yards' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} category='Offense Passing' preview='yardsPass' />
                    <Preview stats={this.props.stats.defenseTotal} category='Defense Passing' preview='yardsPass' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} category='Offense Rushing' preview='yardsRush' />
                    <Preview stats={this.props.stats.defenseTotal} category='Defense Rushing' preview='yardsRush' />
                </div>
            </div>
        )
    }
}