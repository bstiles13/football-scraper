import React from 'react';
import ReactTable from 'react-table'

export default class TeamOffenseTotalTable extends React.Component {

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
                            Header: 'Team',
                            accessor: 'team'
                        },
                        {
                            Header: 'Yards',
                            accessor: 'averageTotal',
                        },
                        {
                            Header: 'Passing',
                            accessor: 'averagePass',
                        },
                        {
                            Header: 'Rushing',
                            accessor: 'averageRush',
                        },
                        {
                            Header: 'Points',
                            accessor: 'averagePoints',
                        }
                    ]}
                    defaultSorted={[
                        {
                            id: "averageTotal",
                            desc: true
                        }
                    ]}
                    className="-striped -highlight"
                    defaultPageSize={32}
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