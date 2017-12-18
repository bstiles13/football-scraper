import React from 'react';
import PieChart from './PieChart';

export default class InterceptionsComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='charts-container'>
                    <div className='charts-child'>
                        <h5>Interceptions</h5>
                        <PieChart stats={this.props.stats} type='interceptions' />
                    </div>
                    <div className='charts-child'>
                        <h5>Deflections</h5>
                        <PieChart stats={this.props.stats} type='deflections' />
                    </div>
                    <div className='charts-child'>
                        <h5>Touchdowns</h5>
                        <PieChart stats={this.props.stats} type='touchdowns' />
                    </div>
                </div>
            </div>
        )
    }
}