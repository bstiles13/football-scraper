import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title"><Link to={'/'} style={{ color: 'white' }}>NFL Stat Tracker</Link></h1>
                </header>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to={'/playerstats'} style={{ color: 'gray' }} className='nav-link'>Player Stats</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/passing'} className='nav-link'>Passing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/rushing'} className='nav-link'>Rushing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/receiving'} className='nav-link'>Receiving</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/tackles'} className='nav-link'>Tackles</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/sacks'} className='nav-link'>Sacks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/interceptions'} className='nav-link'>Interceptions</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/teamstats'} style={{ color: 'gray' }} className='nav-link'>Team Stats</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/interceptions">Offense</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/interceptions">Defense</a>
                    </li>
                </ul>
            </div>
        )
    }
}