import { shallow } from 'enzyme'
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';


describe('Prueba de GifGridItem', () => {
    
    const title = 'mi titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title= {title} url= {url}/>)
    
    test('debe mostrar el componente <GifGridItem />> correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();


    });

    test('debe tener un parrafo con el title', () => {

        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim() ).toBe(title);
        
    });

    test('debe de tener una imagen igual al url y al alt de los props', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    });

    test('debe tener animate__headShake', () => {
        const div = wrapper.find('div');

        const className = div.prop('className');

        expect(className.includes('animate__headShake')).toBe(true);
    })
    
    
    
    
})
