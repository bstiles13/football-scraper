import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleYear } from '../actions/toggleAction';

class SelectYear extends React.Component {

    handleChange(e) {
        this.props.toggleYear(e.target.value);
    }

    renderOptions() {
        let years = [2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
        let toggle = this.props.defaultYear;
        return years.map((year, i) => {
            return <option key={i} selected={year == toggle ? 'selected' : null}>{year}</option>
        })
    }

    render() {
        return (
            <div className="form-group">
                <select className="form-control form-control-sm" onChange={this.handleChange.bind(this)}>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        defaultYear: state.toggles.toggleYear
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleYear: toggleYear
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectYear);