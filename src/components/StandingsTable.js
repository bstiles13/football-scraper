import React from 'react';

export default class StandingsTable extends React.Component {

    renderStandings() {
        if (this.props.stats) {
            let standings = this.props.stats;
            standings = standings.sort((a, b) => {
                return b.wins - a.wins;
            })
            switch (this.props.toggles) {
                case 'division':
                    return (
                        <div>
                            {this.renderSplitView(standings, 'division', 'AFC East')}
                            {this.renderSplitView(standings, 'division', 'AFC North')}
                            {this.renderSplitView(standings, 'division', 'AFC South')}
                            {this.renderSplitView(standings, 'division', 'AFC West')}
                            {this.renderSplitView(standings, 'division', 'NFC East')}
                            {this.renderSplitView(standings, 'division', 'NFC North')}
                            {this.renderSplitView(standings, 'division', 'NFC South')}
                            {this.renderSplitView(standings, 'division', 'NFC West')}
                        </div>
                    )
                    break;
                case 'conference':
                    return (
                        <div>
                            {this.renderSplitView(standings, 'conference', 'AFC')}
                            {this.renderSplitView(standings, 'conference', 'NFC')}
                        </div>
                    )
                    break;
                case 'league':
                    return (
                        <div>
                            {this.renderSplitView(standings, 'league', 'League')}
                        </div>
                    )
                    break;
            }
        }
    }

    renderSplitView(standings, type, split) {
        let teams = standings.map((team, i) => {
            if (type == 'league' || team[type] == split) {
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
                    <div className='standings-column standings-column-extended'>{split}</div>
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

    render() {
        return (
            <div id='standings-table'>
                {this.renderStandings()}
            </div>
        )
    }
}