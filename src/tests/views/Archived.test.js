import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import  Archived  from '../../views/Archived';




describe('Testing <Archived /> Component', () => {
    

    let useFetchArchived = jest.fn()
    let wrapper = shallow(<Archived />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<Archived />);
    });

    test('should create the component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should call useFetchArchived', () => {
  

        
    })
    




})

