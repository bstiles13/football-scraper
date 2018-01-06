import React from 'react';
import ReactTable from 'react-table'

export default class SacksTable extends React.Component {

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
                            Header: 'Sacks',
                            accessor: 'sacks',
                        },
                        {
                            Header: 'Tackles',
                            accessor: 'tackles',
                        },
                        {
                            Header: 'Fumbles',
                            accessor: 'fumbles',
                        }
                    ]}
                    defaultSorted={[
                        {
                            id: "sacks",
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