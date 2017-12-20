import React from 'react';
import Standings from './Standings';
import SelectYear from './SelectYear';

export default class Home extends React.Component {

    handleClick(e) {
        this.props.toggleStandings(e.target.value);
    }

    render() {
        return (
            <div id='home'>
                <div className='header'>
                    <div className='header-top'>
                        <h3 className='header-text'>NFL Overview - {this.props.toggles.toggleYear}</h3>
                        <div className='header-buttons'>
                            <button type="button" className="btn btn-sm btn-outline-primary" value='division' onClick={this.handleClick.bind(this)}>Division</button>
                            <button type="button" className="btn btn-sm btn-outline-primary" value='conference' onClick={this.handleClick.bind(this)}>Conference</button>
                            <button type="button" className="btn btn-sm btn-outline-primary" value='league' onClick={this.handleClick.bind(this)}>League</button>
                            <SelectYear />
                        </div>
                    </div>
                    <div className='header-border-one'></div>
                    <div className='header-border-two'></div>
                    <div className='header-border-three'></div>
                </div>
                <Standings stats={this.props.stats.standings} toggles={this.props.toggles.toggleStandings} />
            </div>
        )
    }
}