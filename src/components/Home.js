import React from 'react';
import StatsPassing from './StatsPassing';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scrapePassing } from '../actions/scrapeAction';

class Home extends React.Component {

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