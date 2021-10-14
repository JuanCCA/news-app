import { shallow } from 'enzyme';
import FromCreateNew from '../../../components/News/FormCreateNew'
import React from 'react'
import '@testing-library/jest-dom';


describe('Testing <FromCreateNew />', () => {

    let wrapper = shallow(<FromCreateNew />)


    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow(<FromCreateNew />)
    })
    
    test('should create correctly the component', () => {

        expect(wrapper).toMatchSnapshot()

    })


})
