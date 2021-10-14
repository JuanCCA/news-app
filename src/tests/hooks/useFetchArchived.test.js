import { renderHook } from '@testing-library/react-hooks';
import { useFetchArchived } from '../../hooks/useFetchArchived';

describe('Testing hook useFetchArchived', () => {


    test('should return initial state', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchArchived() );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('should return an array of archived news and loading -> false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchArchived() );
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length > 0).toBe( true ); // Number of Archived documents in DB
        expect( loading ).toBe( false );
    });
    
})