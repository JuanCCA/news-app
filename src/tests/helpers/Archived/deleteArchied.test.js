import { deleteArchived } from '../../../helpers/Archived/deleteArchived'


describe('Testing deleteArchived', () => {
    
    test('should return 200 if everything went well', async() => {
        
        const archived = await deleteArchived(""); //TODO 
        console.log(archived)

        expect( archived.length ).toBe( 200 );

    })

    test('should return 500 if something happenend', async() => {
        
        const gifs = await deleteArchived(''); //TODO

        expect( gifs.length ).toBe( 0 );

    })
    

})
