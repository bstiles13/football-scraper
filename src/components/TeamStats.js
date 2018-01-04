import React from 'react';
import Header from './Header';
import Preview from './Preview';

export default class TeamStats extends React.Component {
    render() {
        return (
            <div>
                <Header title='League Leaders' />
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} title='Offense Total Yards' category='other' preview='yards' />
                    <Preview stats={this.props.stats.defenseTotal} title='Defense Total Yards' category='other' preview='yards' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} title='Offense Passing' category='other' preview='yardsPass' />
                    <Preview stats={this.props.stats.defenseTotal} title='Defense Passing' category='other' preview='yardsPass' />
                </div>
                <div className='home-row'>
                    <Preview stats={this.props.stats.offenseTotal} title='Offense Rushing' category='other' preview='yardsRush' />
                    <Preview stats={this.props.stats.defenseTotal} title='Defense Rushing' category='other' preview='yardsRush' />
                </div>
            </div>
        )
    }
}