import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <div className='header-top'>
                    <h3>{this.props.title} - 2017</h3>
                </div>
                <div className='header-border-one'></div>
                <div className='header-border-two'></div>
                <div className='header-border-three'></div>
            </div>
        )
    }
}