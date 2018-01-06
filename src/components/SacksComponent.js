import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import SacksTable from './SacksTable';

export default class SacksComponent extends React.Component {
    render() {
        return (
            <div>
                <Header title='Sack Statistics' />
                <div className='custom-container'>
                    <div className='vertical-charts custom-container-charts'>
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
                    <div className='custom-container-table'>
                        <SacksTable stats={this.props.stats} />
                    </div>
                </div>
            </div>
        )
    }
}