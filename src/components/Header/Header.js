import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return <h1 id="app-title">RoboFriends</h1>;
    }
}

export default Header;