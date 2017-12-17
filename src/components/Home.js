import React from 'react';
import axios from 'axios';
import StatsPassing from './StatsPassing';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scrapePassing } from '../actions/scrapeAction';

class Home extends React.Component {

    componentDidMount() {
        axios.get('/scrapepassing');
    }

    render() {
        return (
            <div>
                <StatsPassing scrape={this.props.scrapePassing}/>
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