import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Prueba en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {

        const { result,waitForNextUpdate } = renderHook(() => useFetchGifs('Shakira'));

        const { data, loading } = result.current;

        await waitForNextUpdate();


        expect(data).toEqual([]);
        expect(loading).toBe(true);

        
    });

    test('debe retornar un arreglo de imgs en el loading en false', async() => {
        
        const { result,waitForNextUpdate } = renderHook(() => useFetchGifs('Shakira'));

        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
