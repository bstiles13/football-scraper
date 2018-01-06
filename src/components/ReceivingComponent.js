import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import ReceivingTable from './ReceivingTable';

export default class ReceivingComponent extends React.Component {
    render() {
        return (
            <div>
                <Header title='Receiving Statistics' />
                <div className='custom-container'>
                    <div className='vertical-charts custom-container-charts'>
                        <div className='charts-child'>
                            <h5>Yards</h5>
                            <PieChart stats={this.props.stats} type='yards' />
                        </div>
                        <div className='charts-child'>
                            <h5>Receptions</h5>
                            <PieChart stats={this.props.stats} type='receptions' />
                        </div>
                        <div className='charts-child'>
                            <h5>Touchdowns</h5>
                            <PieChart stats={this.props.stats} type='touchdowns' />
                        </div>
                        <div className='charts-child'>
                            <h5>Fumbles</h5>
                            <PieChart stats={this.props.stats} type='fumbles' />
                        </div>
                    </div>
                    <div className='custom-container-table'>
                        <ReceivingTable stats={this.props.stats} />
                    </div>
                </div>
            </div>
        )
    }
}