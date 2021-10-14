import { fetchAnonymous } from '../../../helpers/Petitions/fetch'


describe('Testing fetchAnonymous', () => {
    
    test('should GET ', async() => {
    
        const getArchived = await fetchAnonymous('archived/get_archived', null, 'GET');  

        expect( getArchived.length > 0 ).toBe( true );

    })
})
