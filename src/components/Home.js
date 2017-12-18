import React from 'react';
import axios from 'axios';
import PassingComponent from './PassingComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scrapePassing } from '../actions/scrapeAction';

class Home extends React.Component {

    componentDidMount() {
        this.props.scrapePassing();
    }

    render() {
        return (
            <div>
                <PassingComponent stats={this.props.stats}/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        stats: state.stats
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        scrapePassing: scrapePassing
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);