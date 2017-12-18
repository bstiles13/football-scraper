import React from 'react';

export default class InterceptionsTable extends React.Component {

    renderRows() {
        let passingStats = this.props.stats;
        if (passingStats) {
            passingStats.sort(function (a, b) {
                return parseFloat(b.interceptions) - parseFloat(a.interceptions);
            });
            return passingStats.map((row, index) => {
                return (
                    <div className='custom-row' key={index}>
                        <th className='custom-column custom-column-shorten'>{index + 1}</th>
                        <th className='custom-column custom-column-extended'>{row.player}</th>
                        <th className='custom-column'>{row.team}</th>
                        <td className='custom-column'>{row.interceptions}</td>
                        <td className='custom-column'>{row.deflections}</td>
                        <td className='custom-column'>{row.touchdowns}</td>
                        <td className='custom-column'>{row.tackles}</td>
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
                    <div className='custom-column'>Interceptions</div>
                    <div className='custom-column'>Deflections</div>
                    <div className='custom-column'>Touchdowns</div>
                    <div className='custom-column'>Tackles</div>
                </div>
                {this.renderRows()}
            </div>
        )
    }
}