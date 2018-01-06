import React from 'react';
import ReactTable from 'react-table'

export default class PassingTable extends React.Component {

    renderRows() {
        let passingStats = this.props.stats;
        if (passingStats) {
            return (
                <ReactTable
                    data={passingStats}
                    columns={[
                        {
                            Header: '#',
                            accessor: 'index',
                            Cell: row => (
                                <div>{row.viewIndex + 1}</div>
                            )
                        },
                        {
                            Header: 'Player',
                            accessor: 'player'
                        },
                        {
                            Header: 'Team',
                            accessor: 'team',
                        },
                        {
                            Header: 'Yards',
                            accessor: 'yards',
                        },
                        {
                            Header: 'Touchdowns',
                            accessor: 'touchdowns',
                        },
                        {
                            Header: 'Interceptions',
                            accessor: 'interceptions',
                        },
                        {
                            Header: 'Rating',
                            accessor: 'rating',
                        }
                    ]}
                    defaultSorted={[
                        {
                            id: "yards",
                            desc: true
                        }
                    ]}
                    className="-striped -highlight"
                    defaultPageSize={50}
                    showPagination={false}
                />
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderRows()}
            </div>
        )
    }
}