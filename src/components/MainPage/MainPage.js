import React, { Component } from 'react';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import Search from '../Search/Search';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './MainPage.scss';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = robots => {
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render() {
        const { onSearchChange, robots, isPending } = this.props;

        return isPending ?
            <h1>Loading...</h1> :
            (
                <div id="app-content">
                    <Header />
                    <section id="app-main-section">
                        <Search searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={this.filterRobots(robots)}/>
                            </ErrorBoundary>
                        </Scroll>
                    </section>
                </div>
            );
    }
}

export default MainPage;