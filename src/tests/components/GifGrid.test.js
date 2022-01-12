import { shallow } from 'enzyme'
import React from 'react';
import '@testing-library/jest-dom'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')  // se finje su llamada a ese archivo


describe('Prueba en GifGrid', () => {

    const category = "mi categoria";
    
    
    test('debe mostrarse correctamente', () => {
        

        useFetchGifs.mockReturnValue( {
            data: [],
            loading:true
        });
        const wrapper = shallow( <GifGrid category= {category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se carga imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id:'DFG',
            url: 'https://localhost/cualka/cuak.jpg',
            title:'cualka'
        }]

        useFetchGifs.mockReturnValue( {
            data: gifs,
            loading:false
        });

        const wrapper = shallow( <GifGrid category= {category} />);

        expect(wrapper).toMatchSnapshot();

        expect( wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
    
    
})
