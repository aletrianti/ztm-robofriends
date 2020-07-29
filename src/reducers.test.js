import * as reducers from './reducers';

import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants';

describe('searchRobots', () => {
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
    });

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots('', {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' });
    });
});

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        err: ''
    };

    const robotsArray = [
        {
            id: 1,
            name: 'Robot 1',
            email: 'robot@one.com'
        }
    ];

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            err: ''
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: robotsArray
        })).toEqual({
            robots: robotsArray,
            isPending: false,
            err: ''
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Error!'
        })).toEqual({
            robots: [],
            isPending: false,
            err: 'Error!'
        });
    });
});