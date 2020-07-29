import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage/MainPage';
import { setSearchField, requestRobots } from '../actions';

import './App.scss';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        err: state.requestRobots.err
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App extends Component {
    render() {
        return <MainPage {...this.props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);