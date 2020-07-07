import React, { Component, Fragment } from 'react';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';

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
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div id="app-content">
                    <h1 id="app-title">RoboFriends</h1>
                    <section id="app-main-section">
                        <Search searchChange={this.onSearchChange}/>
                        <CardList robots={filteredRobots}/>
                    </section>
                </div>
            );
        }
    }
}

export default App;