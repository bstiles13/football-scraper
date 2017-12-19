import React from 'react';
import BarChart from './BarChart';

export default class Home extends React.Component {
    render() {
        return (
            <div id='standings'>
                <div className='standings-child'>
                    <BarChart stats={this.props.stats} sort='top' />
                    <BarChart stats={this.props.stats} sort='bottom' />
                </div>
                <div className='standings-child'>

                </div>
            </div>
        )
    }
}