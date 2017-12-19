import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import TacklesTable from './TacklesTable';

export default class TacklesComponent extends React.Component {
    render() {
        return (
            <div>
                <Header title='Tackling Statistics' />
                <div className='defense-container'>
                    <div className='vertical-charts defense-container-charts'>
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
                    <TacklesTable stats={this.props.stats} />
                </div>
            </div>
        )
    }
}