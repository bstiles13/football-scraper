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
                        <h5>Total Yards / Game Allowed</h5>
                        <PieChart stats={this.props.stats} type='averageTotal' descending={true} />
                    </div>
                    <div className='charts-child'>
                        <h5>Passing Yards / Game Allowed</h5>
                        <PieChart stats={this.props.stats} type='averagePass' descending={true} />
                    </div>
                </div>
                <div className='horizontal-charts'>
                    <div className='charts-child'>
                        <h5>Rushing Yards / Game Allowed</h5>
                        <PieChart stats={this.props.stats} type='averageRush' descending={true} />
                    </div>
                    <div className='charts-child'>
                        <h5>Points / Game Allowed</h5>
                        <PieChart stats={this.props.stats} type='averagePoints' descending={true} />
                    </div>
                </div>
            </div>
        )
    }
}