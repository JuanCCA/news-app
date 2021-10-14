import { shallow } from 'enzyme';
import CreateNew from '../../../components/News/CreateNew'
import React from 'react'
import '@testing-library/jest-dom';


describe('Testing <CreateNew />', () => {

    let wrapper = shallow(<CreateNew />)
    const setShow = jest.fn()

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow(<CreateNew />)
    })
    
    test('should create correctly the component', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('should show modal when button pressed', () => {

        wrapper.find('#buttonModal').simulate('click')

        expect(setShow).toHaveBeenCalled(); //TODO


    })


    

})
