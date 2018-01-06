import React from 'react';
import ReactTable from 'react-table'

export default class InterceptionsTable extends React.Component {

    renderRows() {
        let stats = this.props.stats;
        if (stats) {
            return (
                <ReactTable
                    data={stats}
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
                            Header: 'Interceptions',
                            accessor: 'interceptions',
                        },
                        {
                            Header: 'Deflections',
                            accessor: 'deflections',
                        },
                        {
                            Header: 'Touchdowns',
                            accessor: 'touchdowns',
                        },
                        {
                            Header: 'Tackles',
                            accessor: 'tackles',
                        }
                    ]}
                    defaultSorted={[
                        {
                            id: "interceptions",
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