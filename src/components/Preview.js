import React from 'react';
import { Link } from 'react-router-dom';
import passingIcon from '../assets/images/passing.png'
import rushingIcon from '../assets/images/rushing.png'
import receivingIcon from '../assets/images/receiving.png'
import tacklesIcon from '../assets/images/tackles.png'
import sacksIcon from '../assets/images/sacks.png'
import interceptionsIcon from '../assets/images/interceptions.png'
import otherIcon from '../assets/images/other.png'

export default class Preview extends React.Component {

    renderRows() {
        let stats = this.props.stats;
        if (stats) {
            stats = stats.sort((a, b) => {
                return parseFloat(b[this.props.preview]) - parseFloat(a[this.props.preview]);
            })
            stats = stats.slice(0, 5);            
            return stats.map((row, i) => {
                return (
                    <div className='preview-row' key={i} style={ i == 0 ? {backgroundColor: '#d6e6ff' } : {} }>
                        <div className='preview-column'>{row.player ? row.player : (i + 1) + '.'}</div>
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
                    <span>{this.props.title.toUpperCase()}</span>
                    <Link to={'/' + this.props.category} style={{color: 'white'}}>Complete List</Link>
                </div>
                <div className='preview-content'>
                    <img src={images[this.props.category]} className='preview-image' style={{width: '120px', height: '110px'}} onError={(event) => event.target.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/PICOL_icon_Football.svg/2000px-PICOL_icon_Football.svg.png")}/>
                    <div className='preview-list'>
                        {this.renderRows()}
                    </div>
                </div>
            </div>
        )
    }
}

const images = {
    passing: passingIcon,
    rushing: rushingIcon,
    receiving: receivingIcon,
    tackles: tacklesIcon,
    sacks: sacksIcon,
    interceptions: interceptionsIcon,
    offensetotal: otherIcon,
    defensetotal: otherIcon    
}