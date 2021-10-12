import { shallow } from 'enzyme'
import React from 'react'
import New from '../../../components/News/New'



describe('Testing component <New />', () => {
    
    const args = {
        _id:"28929837466959830853",
        title: "TITLE 1",
        description: "Description of the new",
        content: "content of the new",
        date: "2021-09-09T22:00:00.000+00:00",
        author: "Juan Carlos"
    }

    const setNews = jest.fn()

    let wrapper = shallow(<New key={args._id}  {...args} setNews={setNews}/>)

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<New key={args._id}  {...args} setNews={setNews}/>);
    });


    test('should create the component correctly with all of arguments needed', () => {
        
        expect(wrapper).toMatchSnapshot()


    })





})
