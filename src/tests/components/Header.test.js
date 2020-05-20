// react-test-renderer
import React from 'react'
import Header from '../../components/Header'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
     const wrapper = shallow(<Header />);
    //  expect(wrapper.find('h1').text()).toBe('Expensify');
    //  expect(wrapper.find('h1').length).toBe(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
     
});

