import React from 'react';
import { Link } from 'react-router-dom';

export default class Preview extends React.Component {

    renderRows() {
        let stats = this.props.stats;
        if (stats) {
            stats = stats.slice(0, 5);
            stats = stats.sort((a, b) => {
                return parseFloat(b[this.props.preview]) - parseFloat(a[this.props.preview]);
            })
            return stats.map((row, i) => {
                return (
                    <div className='preview-row' key={i}>
                        <div className='preview-column'>{row.player}</div>
                        <div className='preview-column'>{row.team}</div>
                        <div className='preview-column'>{row[this.props.preview]}</div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className='preview-container'>
                <div className='preview-header'>
                    <span>{this.props.category.toUpperCase()}</span>
                    <Link to={'/' + this.props.category} style={{color: 'white'}}>Complete List</Link>
                </div>
                <div className='preview-content'>
                    <img src={images[this.props.category]} className='preview-image' style={{width: '150px', height: '150px'}}/>
                    <div className='preview-list'>
                        {this.renderRows()}
                    </div>
                </div>
            </div>
        )
    }
}

const images = {
    passing: 'http://downloadclipart.org/do-upload/clipart/2016-07/American_football_player_icon.png',
    rushing: 'https://image.flaticon.com/icons/png/512/53/53336.png',
    receiving: 'https://cdn3.iconfinder.com/data/icons/american-football-2/292/american-football-player-014-512.png',
    tackles: 'https://cdn3.iconfinder.com/data/icons/american-football-2/239/american-football-player-016-512.png',
    sacks: 'https://images.vexels.com/media/users/3/131988/isolated/preview/bdddce6b399e0b4b6a09aed763849530-el-jugador-de-rugby-la-celebraci-n-de-la-silueta-by-vexels.png',
    interceptions: 'https://image.flaticon.com/icons/png/512/53/53505.png'
}