import React from 'react';

export default class StatsPassing extends React.Component {

    componentDidMount() {
        this.props.scrape();
    }

    render() {
        return (
            <div>
                <h5>Passing Stats</h5>
            </div>
        )
    }

}