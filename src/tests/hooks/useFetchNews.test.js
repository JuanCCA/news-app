import { renderHook } from '@testing-library/react-hooks';
import { useFetchNews } from '../../hooks/useFetchNews';

describe('Testing hook useFetchNews', () => {


    test('should return initial state', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchNews() );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('should return an array of news and loading -> false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchNews() );
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length > 0 ).toBe( true ); // Number of News in DB
        expect( loading ).toBe( false );
    });
    
})