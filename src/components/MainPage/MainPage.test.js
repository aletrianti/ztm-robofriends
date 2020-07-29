import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper, wrapperWithRobot;

const robotsArray = [
    {
        id: 1,
        name: 'Robot 1',
        email: 'robot@one.com'
    },
    {
        id: 2,
        name: 'Robot 2',
        email: 'robot@two.com'
    }
];

beforeEach(() => {
    const mockedProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };

    wrapper = shallow(<MainPage {...mockedProps}/>);
});

it('renders MainPage', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly (1)', () => {
    const mockedPropsWithRobot = {
        onRequestRobots: jest.fn(),
        robots: robotsArray,
        searchField: '',
        isPending: false
    };

    wrapperWithRobot = shallow(<MainPage {...mockedPropsWithRobot}/>);

    expect(wrapperWithRobot.instance().filterRobots([])).toEqual([]);
    expect(wrapperWithRobot.instance().filterRobots(robotsArray)).toEqual(robotsArray);
});

it('filters robots correctly (2)', () => {
    const mockedPropsWithRobot = {
        onRequestRobots: jest.fn(),
        robots: robotsArray,
        searchField: 'c',
        isPending: false
    };

    wrapperWithRobot = shallow(<MainPage {...mockedPropsWithRobot}/>);

    expect(wrapperWithRobot.instance().filterRobots([])).toEqual([]);
    expect(wrapperWithRobot.instance().filterRobots(robotsArray)).toEqual([]);
});