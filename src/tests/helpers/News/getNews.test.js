import { getNews } from '../../../helpers/News/getNews'


describe('Testing getArchived', () => {
    
    test('should return an array with all the News', async() => {
    
        const news = await getNews();  

        expect( news.length > 0 ).toBe( true );

    })


})
