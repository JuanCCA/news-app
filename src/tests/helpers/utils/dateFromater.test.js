import { formatDate } from '../../../helpers/Utils/dateFormater'


describe('Testing formatDate', () => {
    
    test('should formate the date correctlly ', async() => {
    
        const date = new Date("2012-07-14T01:00:00+01:00") 
        const dateString = formatDate(date)

        expect(dateString).toBe("2012/07/14 01:00");

    })

})
