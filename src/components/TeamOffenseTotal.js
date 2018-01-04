import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import PassingTable from './PassingTable';

export default class TeamOffenseTotal extends React.Component {
    render() {
        return (
            <div>
                <Header title='Total Offense' />
                <div className='horizontal-charts'>
                    <div className='charts-child'>
                        <h5>Total Yards / Game</h5>
                        <PieChart stats={this.props.stats} type='averageTotal' />
                    </div>
                    <div className='charts-child'>
                        <h5>Passing Yards / Game</h5>
                        <PieChart stats={this.props.stats} type='averagePass' />
                    </div>
                </div>
                <div className='horizontal-charts'>
                    <div className='charts-child'>
                        <h5>Rushing Yards / Game</h5>
                        <PieChart stats={this.props.stats} type='averageRush' />
                    </div>
                    <div className='charts-child'>
                        <h5>Points / Game</h5>
                        <PieChart stats={this.props.stats} type='pointsPerGame' />
                    </div>
                </div>
            </div>
        )
    }
}