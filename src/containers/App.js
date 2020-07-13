import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList/CardList';
import Search from '../components/Search/Search';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

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
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ?
            <h1>Loading...</h1> :
            (
                <div id="app-content">
                    <h1 id="app-title">RoboFriends</h1>
                    <section id="app-main-section">
                        <Search searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </section>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);