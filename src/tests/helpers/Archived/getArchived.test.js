import { getArchived } from '../../../helpers/Archived/getArchived'


describe('Testing getArchived', () => {
    
    test('should return an array with all the documents archived', async() => {
        
        const archived = await getArchived("");  
        console.log(archived)

        expect( archived.length > 0 ).toBe( true );

    })

})
