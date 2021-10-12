import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import  News  from '../../views/News';




describe('Testing <News /> Component', () => {
    

    let wrapper = shallow(<News />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<News />);
    });

    test('should create the component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });


})

