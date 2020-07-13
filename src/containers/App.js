import React, { Component } from 'react';
import CardList from '../components/CardList/CardList';
import Search from '../components/Search/Search';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import './App.scss';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    render() {
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div id="app-content">
                    <h1 id="app-title">RoboFriends</h1>
                    <section id="app-main-section">
                        <Search searchChange={this.onSearchChange}/>
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

export default App;