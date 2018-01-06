import React from 'react';
import ReactTable from 'react-table'

export default class TacklesTable extends React.Component {

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
                            Header: 'Tackles',
                            accessor: 'tackles',
                        },
                        {
                            Header: 'Solo',
                            accessor: 'solo',
                        },
                        {
                            Header: 'Assisted',
                            accessor: 'assisted',
                        }
                    ]}
                    defaultSorted={[
                        {
                            id: "tackles",
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