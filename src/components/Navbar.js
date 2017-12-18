import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li class="nav-item">
                    <span class="nav-link disabled" href="#">Player Stats</span>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Passing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/rushing">Rushing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/receiving">Receiving</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/tackles">Tackles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/sacks">Sacks</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/interceptions">Interceptions</a>
                </li>
                <li class="nav-item">
                    <span class="nav-link disabled" href="#">Team Stats</span>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/interceptions">Offense</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/interceptions">Defense</a>
                </li>
            </ul>
        )
    }
}