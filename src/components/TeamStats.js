import React from 'react';
import Header from './Header';
import Preview from './Preview';

export default class TeamStats extends React.Component {
    render() {
        return (
            <div>
                <Header title='League Leaders' />
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} title='Offense Total Yards' category='offensetotal' preview='yards' />
                    <Preview stats={this.props.stats.defenseTotal} title='Defense Total Yards' category='defensetotal' preview='yards' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} title='Offense Passing' category='offensetotal' preview='yardsPass' />
                    <Preview stats={this.props.stats.defenseTotal} title='Defense Passing' category='defensetotal' preview='yardsPass' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} title='Offense Rushing' category='offensetotal' preview='yardsRush' />
                    <Preview stats={this.props.stats.defenseTotal} title='Defense Rushing' category='defensetotal' preview='yardsRush' />
                </div>
            </div>
        )
    }
}