import { shallow } from 'enzyme'
import React from 'react'
import ArchivedNew from '../../../components/Archived/ArchivedNew'



describe('Testing component <ArchivedNew />', () => {
    
    const args = {
        _id:"28929837466959830853",
        title: "TITLE 1",
        description: "Description of the new",
        content: "content of the new",
        archiveDate: "2021-09-09T22:00:00.000+00:00",
        author: "Juan Carlos"
    }

    const setArchived = jest.fn()

    let wrapper = shallow(<ArchivedNew key={args._id}  {...args} setArchived={setArchived}/>)

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<ArchivedNew key={args._id}  {...args} setArchived={setArchived}/>);
    });


    test('should create the component correctly with all of arguments needed', () => {
        
        expect(wrapper).toMatchSnapshot()


    })





})
