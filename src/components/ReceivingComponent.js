import React from 'react';
import PieChart from './PieChart';

export default class ReceivingComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='charts-container'>
                    <div className='charts-child'>
                        <h5>Yards</h5>
                        <PieChart stats={this.props.stats} type='yards' />
                    </div>
                    <div className='charts-child'>
                        <h5>Receptions</h5>
                        <PieChart stats={this.props.stats} type='receptions' />
                    </div>
                </div>
                <div className='charts-container'>
                    <div className='charts-child'>
                        <h5>Touchdowns</h5>
                        <PieChart stats={this.props.stats} type='touchdowns' />
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