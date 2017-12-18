import React from 'react';
import PieChart from './PieChart';

export default class StatsPassing extends React.Component {
    render() {
        return (
            <div>
                <div className='charts-container'>
                    <div className='charts-child'>
                        <h5>Yards</h5>
                        <PieChart stats={this.props.stats} type='yards' />
                    </div>
                    <div className='charts-child'>
                        <h5>Touchdowns</h5>
                        <PieChart stats={this.props.stats} type='touchdowns' />
                    </div>
                    <div className='charts-child'>
                        <h5>Interceptions</h5>
                        <PieChart stats={this.props.stats} type='interceptions' />
                    </div>
                    <div className='charts-child'>
                        <h5>Rating</h5>
                        <PieChart stats={this.props.stats} type='rating' />
                    </div>
                </div>
            </div>
        )
    }
}