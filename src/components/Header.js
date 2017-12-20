import React from 'react';
import SelectYear from './SelectYear';

import { connect } from 'react-redux';
import { toggleYear } from '../actions/toggleAction';

class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <div className='header-top'>
                    <h3 className='header-text'>{this.props.title} - {this.props.toggleYear}</h3>
                    <SelectYear />
                </div>
                <div className='header-border-one'></div>
                <div className='header-border-two'></div>
                <div className='header-border-three'></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        toggleYear: state.toggles.toggleYear
    }
}

export default connect(mapStateToProps)(Header);