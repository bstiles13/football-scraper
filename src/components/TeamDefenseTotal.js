import React from 'react';
import Header from './Header';
import PieChart from './PieChart';
import TeamDefenseTotalTable from './TeamDefenseTotalTable';

export default class TeamDefenseTotal extends React.Component {
    render() {
        return (
            <div>
                <Header title='Total Defense' />
                <div className='custom-container'>
                    <div className='vertical-charts custom-container-charts'>
                        <div className='charts-child'>
                            <h5>Total Yards / Game Allowed</h5>
                            <PieChart stats={this.props.stats} type='averageTotal' descending={true} />
                        </div>
                        <div className='charts-child'>
                            <h5>Passing Yards / Game Allowed</h5>
                            <PieChart stats={this.props.stats} type='averagePass' descending={true} />
                        </div>
                        <div className='charts-child'>
                            <h5>Rushing Yards / Game Allowed</h5>
                            <PieChart stats={this.props.stats} type='averageRush' descending={true} />
                        </div>
                        <div className='charts-child'>
                            <h5>Points / Game Allowed</h5>
                            <PieChart stats={this.props.stats} type='averagePoints' descending={true} />
                        </div>
                    </div>
                    <div className='custom-container-table'>
                        <TeamDefenseTotalTable stats={this.props.stats} />
                    </div>
                </div>
            </div>
        )
    }
}