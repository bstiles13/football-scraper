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
                        <h5>YDS/G</h5>
                        <PieChart stats={this.props.stats} type='averageTotal' />
                    </div>
                    <div className='charts-child'>
                        <h5>P YDS/G</h5>
                        <PieChart stats={this.props.stats} type='averagePass' />
                    </div>
                </div>
                <div className='horizontal-charts'>
                    <div className='charts-child'>
                        <h5>R YDS/G</h5>
                        <PieChart stats={this.props.stats} type='averageRush' />
                    </div>
                    <div className='charts-child'>
                        <h5>PTS/G</h5>
                        <PieChart stats={this.props.stats} type='pointsPerGame' />
                    </div>
                </div>
            </div>
        )
    }
}