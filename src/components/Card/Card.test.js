import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('expects to render Card component', () => {
    expect(<Card/>).toMatchSnapshot();
    expect(shallow(<Card/>).length).toEqual(1);
});