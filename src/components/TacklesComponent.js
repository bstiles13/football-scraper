import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import TacklesTable from './TacklesTable';

export default class TacklesComponent extends React.Component {
    render() {
        return (
            <div>
                <Header title='Tackling Statistics' />
                <div className='custom-container'>
                    <div className='vertical-charts custom-container-charts'>
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
                    <div className='custom-container-table'>
                        <TacklesTable stats={this.props.stats} />
                    </div>
                </div>
            </div>
        )
    }
}