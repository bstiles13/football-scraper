import React from 'react';
import PieChart from './PieChart';

export default class SacksComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='charts-container'>
                    <div className='charts-child'>
                        <h5>Sacks</h5>
                        <PieChart stats={this.props.stats} type='sacks' />
                    </div>
                    <div className='charts-child'>
                        <h5>Tackles</h5>
                        <PieChart stats={this.props.stats} type='tackles' />
                    </div>
                    <div className='charts-child'>
                        <h5>Fumbles</h5>
                        <PieChart stats={this.props.stats} type='fumbles' />
                    </div>
                </div>
            </div>
        )
    }
}