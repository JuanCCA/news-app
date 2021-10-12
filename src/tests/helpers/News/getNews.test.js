import { getNews } from '../../../helpers/News/getNews'


describe('Testing getArchived', () => {
    
    test('should return an array with all the News', async() => {
    
        const news = await getNews("");  
        console.log(news)

        expect( news.length > 0 ).toBe( true );

    })

    //TODO SI EL BAC ESTA CAIDO QUE DEVUELVA UN ERROR Y ASI INFORMAR EN EL FRONT

})
