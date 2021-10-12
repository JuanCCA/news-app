import { archiveNew } from '../../../helpers/News/archiveNew'


describe('Testing archiveNew', () => {
    
    test('should return 200 if is archived', async() => {
    
        const response = await archiveNew("");  

        expect( response ).toBe( 200 );

    })

    //TODO SI EL BAC ESTA CAIDO QUE DEVUELVA UN ERROR Y ASI INFORMAR EN EL FRONT

})
