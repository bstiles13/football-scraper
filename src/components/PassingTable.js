import React from 'react';

export default class PassingTable extends React.Component {

    renderRows() {
        let passingStats = this.props.stats.passing;
        if (passingStats) {
            passingStats.sort(function (a, b) {
                return parseFloat(b.yards) - parseFloat(a.yards);
            });
            return passingStats.map((row, index) => {
                return (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <th>{row.player}</th>
                        <th>{row.team}</th>
                        <td>{row.yards}</td>
                        <td>{row.touchdowns}</td>
                        <td>{row.interceptions}</td>
                        <td>{row.rating}</td>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player</th>
                        <th scope="col">Team</th>
                        <th scope="col">Yards</th>
                        <th scope="col">Touchdowns</th>
                        <th scope="col">Interceptions</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}