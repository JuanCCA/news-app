import { deleteArchived } from '../../../helpers/Archived/deleteArchived'


describe('Testing deleteArchived', () => {
    
    test('should return 200 if everything went well', async() => {
        
        const archivedID = ""  // Pass a correct ID from an Archived New to delete 
        const archived = await deleteArchived(archivedID); 
        expect( archived ).toBe( 200 );

    })

    test('should return 500 if something happenend', async() => {
        
        const archived = await deleteArchived(''); //Pass an incorrect ID to return a server error ( 500 )

        expect( archived ).toBe( 500 );

    })
    

})
