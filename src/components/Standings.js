import React from 'react';
import BarChart from './BarChart';
import StandingsTable from './StandingsTable';

export default class Home extends React.Component {
    render() {
        return (
            <div id='standings'>
                <div className='standings-charts'>
                    <BarChart stats={this.props.stats} sort='top' />
                    <BarChart stats={this.props.stats} sort='bottom' />
                </div>
                <div className='standings-table'>
                    <StandingsTable stats={this.props.stats} />
                </div>
            </div>
        )
    }
}