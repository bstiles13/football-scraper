import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import PassingTable from './PassingTable';

export default class PassingComponent extends React.Component {
    render() {
        return (
            <div>
                <Header title='Passing Statistics' />
                <div className='custom-container'>
                    <div className='vertical-charts custom-container-charts'>
                        <div className='charts-child'>
                            <h5>Yards</h5>
                            <PieChart stats={this.props.stats} type='yards' />
                        </div>
                        <div className='charts-child'>
                            <h5>Rating</h5>
                            <PieChart stats={this.props.stats} type='rating' />
                        </div>
                        <div className='charts-child'>
                            <h5>Touchdowns</h5>
                            <PieChart stats={this.props.stats} type='touchdowns' />
                        </div>
                        <div className='charts-child'>
                            <h5>Interceptions</h5>
                            <PieChart stats={this.props.stats} type='interceptions' />
                        </div>
                    </div>
                    <div className='custom-container-table'>
                        <PassingTable stats={this.props.stats} />
                    </div>
                </div>
            </div>
        )
    }
}