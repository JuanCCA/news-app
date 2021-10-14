import { createNew } from '../../../helpers/News/createNew'


describe('Testing createNew', () => {

    const newToSave = {
        title: "asdfa",
        description: "asdfasdfads",
        conent: "asdñfakjsdñflkajsdñflkajsdñflkjasdklfjañlksdf",
        author: "asdkfjañslkdfja"
    }
    
    test('should return 200 if createNew is done correctly', async() => {
    
        const response = await createNew({...newToSave});  

        expect( response ).toBe( 200 );

    })


})