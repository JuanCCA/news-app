import { archiveNew } from '../../../helpers/News/archiveNew'


describe('Testing archiveNew', () => {
    
    test('should return 200 if is archived', async() => {
    
        const newID = "" // Pass archived new ID
        
        const response = await archiveNew(newID);  

        expect( response ).toBe( 200 );

    })


})
