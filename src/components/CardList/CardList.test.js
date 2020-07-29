import React from 'react';
import CardList from './CardList';

it('expects to render CardList component', () => {
    const mockedRobots = [
        {
            id: 1,
            name: 'Robot 1',
            username: 'robot1',
            email: 'robot@one.com'
        }
    ];

    expect(<CardList robots={mockedRobots}/>).toMatchSnapshot();
});