import React from 'react'
import { shallow } from 'enzyme'
import CitySearch from './CitySearch'

describe('City Search component', () => {
    test(('render search-input element'), () => {
        const Wrapper = shallow(<CitySearch />);
        expect(Wrapper.find(".search-input")).toHaveLength(1);
    })
    test('renders a list of suggestions', () => {
        const CitySearchWrapper = shallow(<CitySearch />);
        expect(CitySearchWrapper.find('.search-suggestions')).toHaveLength(1);
    });
});