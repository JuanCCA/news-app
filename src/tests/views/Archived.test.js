import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import  Archived  from '../../views/Archived';




describe('Testing <Archived /> Component', () => {
    

    let wrapper = shallow(<Archived />);

    beforeEach( () => {
        wrapper = shallow(<Archived />);
    });

    test('should create the component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

})

