import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import RushingTable from './RushingTable';

export default class RushingComponent extends React.Component {
    render() {
        return (
            <div>
                <Header title='Rushing Statistics' />
                <div className='horizontal-charts'>
                    <div className='charts-child'>
                        <h5>Yards</h5>
                        <PieChart stats={this.props.stats} type='yards' />
                    </div>
                    <div className='charts-child'>
                        <h5>Attempts</h5>
                        <PieChart stats={this.props.stats} type='attempts' />
                    </div>
                </div>
                <div className='horizontal-charts'>
                    <div className='charts-child'>
                        <h5>Touchdowns</h5>
                        <PieChart stats={this.props.stats} type='touchdowns' />
                    </div>
                    <div className='charts-child'>
                        <h5>Fumbles</h5>
                        <PieChart stats={this.props.stats} type='fumbles' />
                    </div>
                </div>
                <RushingTable stats={this.props.stats} />
            </div>
        )
    }
}