import React, { Component, Fragment } from 'react';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return (
            <Fragment>
                <h1>RoboFriends</h1>
                <Search searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </Fragment>
        );
    }
}

export default App;