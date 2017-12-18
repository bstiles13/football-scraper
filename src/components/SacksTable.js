import React from 'react';

export default class SacksTable extends React.Component {

    renderRows() {
        let passingStats = this.props.stats;
        if (passingStats) {
            passingStats.sort(function (a, b) {
                return parseFloat(b.sacks) - parseFloat(a.sacks);
            });
            return passingStats.map((row, index) => {
                return (
                    <div className='custom-row' key={index}>
                        <th className='custom-column custom-column-shorten'>{index + 1}</th>
                        <th className='custom-column custom-column-extended'>{row.player}</th>
                        <th className='custom-column'>{row.team}</th>
                        <td className='custom-column'>{row.sacks}</td>
                        <td className='custom-column'>{row.tackles}</td>
                        <td className='custom-column'>{row.fumbles}</td>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className='custom-table'>
                <div className='custom-row custom-header'>
                    <div className='custom-column custom-column-shorten'>#</div>
                    <div className='custom-column custom-column-extended'>Player</div>
                    <div className='custom-column'>Team</div>
                    <div className='custom-column'>Sacks</div>
                    <div className='custom-column'>Tackles</div>
                    <div className='custom-column'>Fumbles</div>
                </div>
                {this.renderRows()}
            </div>
        )
    }
}