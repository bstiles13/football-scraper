import React from 'react';
import tasks from '../utils/tasks.js';

export default class StatsPassing extends React.Component {

    componentDidMount() {
        tasks.getPassing();
    }

    render() {
        return (
            <div>
                <h5>Passing Stats</h5>
            </div>
        )
    }

}