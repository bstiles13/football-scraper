import React from 'react';
import ReactTable from 'react-table'

export default class RushingTable extends React.Component {

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
                            Header: 'Yards',
                            accessor: 'yards',
                        },
                        {
                            Header: 'Touchdowns',
                            accessor: 'touchdowns',
                        },
                        {
                            Header: 'Fumbles',
                            accessor: 'fumbles',
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
            <div className='custom-container-table'>
                {this.renderRows()}
            </div>
        )
    }
}