import React from 'react';
import axios from 'axios';

export default class StatsPassing extends React.Component {

    componentDidMount() {
        axios.get('/passing').then(data => {
            console.log(data.data);
        });
    }

    render() {
        return (
            <div>
                <h5>Passing Stats</h5>
            </div>
        )
    }

}