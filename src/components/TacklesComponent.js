import React from 'react';
import PieChart from './PieChart';

export default class TacklesComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='charts-container'>
                    <div className='charts-child'>
                        <h5>Tackles</h5>
                        <PieChart stats={this.props.stats} type='tackles' />
                    </div>
                    <div className='charts-child'>
                        <h5>Solo</h5>
                        <PieChart stats={this.props.stats} type='solo' />
                    </div>
                    <div className='charts-child'>
                        <h5>Assisted</h5>
                        <PieChart stats={this.props.stats} type='assisted' />
                    </div>
                </div>
            </div>
        )
    }
}