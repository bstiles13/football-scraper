import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import PassingTable from './PassingTable';

export default class TeamDefenseTotal extends React.Component {
    render() {
        return (
            <div>
                <Header title='Total Defense' />
                <div className='horizontal-charts'>
                    <div className='charts-child'>
                        <h5>YDS/G Allowed</h5>
                        <PieChart stats={this.props.stats} type='averageTotal' />
                    </div>
                    <div className='charts-child'>
                        <h5>P YDS/G Allowed</h5>
                        <PieChart stats={this.props.stats} type='averagePass' />
                    </div>
                </div>
                <div className='horizontal-charts'>
                    <div className='charts-child'>
                        <h5>R YDS/G Allowed</h5>
                        <PieChart stats={this.props.stats} type='averageRush' />
                    </div>
                    <div className='charts-child'>
                        <h5>PTS/G Allowed</h5>
                        <PieChart stats={this.props.stats} type='pointsPerGame' />
                    </div>
                </div>
            </div>
        )
    }
}