import { getGifs } from "../../helpers/getGifs"



describe('Prueba con getGifs Fetch', () => {
    
    test('debe de traer 10 elementos', async() => {

        const gifs = await getGifs('shakira');

        expect(gifs.length).toBe(10);
        
    });
    
    test('debe de traer diez elementos', async() => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
        
    });
})
