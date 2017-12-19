import React from 'react';

export default class StandingsTable extends React.Component {

    renderStandings(division, min, max) {
        if (this.props.stats) {
            let standings = this.props.stats;
            standings = standings.sort((a, b) => {
                return b.wins - a.wins;
            })
            let teams = standings.map((team, i) => {
                if (team.division == division) {
                    return (
                        <div className='standings-row' key={i} >
                            <div className='standings-column standings-column-extended'>{team.team}</div>
                            <div className='standings-column'>{team.wins}</div>
                            <div className='standings-column'>{team.losses}</div>
                            <div className='standings-column'>{team.ties}</div>
                            <div className='standings-column'>{team.homeWins}</div>
                            <div className='standings-column'>{team.roadWins}</div>
                            <div className='standings-column'>{team.divisionWins}</div>
                            <div className='standings-column'>{team.conferenceWins}</div>
                            <div className='standings-column'>{team.pointsFor}</div>
                            <div className='standings-column'>{team.pointsAgainst}</div>
                            <div className='standings-column'>{team.streak}</div>
                        </div>
                    )
                }
            })
            return (
                <div>
                    <div className='standings-row standings-row-header'>
                        <div className='standings-column standings-column-extended'>{division}</div>
                        <div className='standings-column'>W</div>
                        <div className='standings-column'>L</div>
                        <div className='standings-column'>T</div>
                        <div className='standings-column'>Home</div>
                        <div className='standings-column'>Road</div>
                        <div className='standings-column'>Div</div>
                        <div className='standings-column'>Conf</div>
                        <div className='standings-column'>PF</div>
                        <div className='standings-column'>PA</div>
                        <div className='standings-column'>Strk</div>
                    </div>
                    {teams}
                </div>
            )
        }
    }

    render() {
        return (
            <div id='standings-table'>
                {this.renderStandings('AFC East')}
                {this.renderStandings('AFC North')}
                {this.renderStandings('AFC South')}
                {this.renderStandings('AFC West')}
                {this.renderStandings('NFC East')}
                {this.renderStandings('NFC North')}
                {this.renderStandings('NFC South')}
                {this.renderStandings('NFC West')}
            </div>
        )
    }
}