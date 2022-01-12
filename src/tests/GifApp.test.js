import { shallow } from 'enzyme'
import React from 'react';
import GifApp from '../GifApp';

describe('Prueba de GifApp', () => {
    
    test('debe mostrarse correctamente', () => {

        const wrapper = shallow( <GifApp />);

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar una lista de categoria', () => {
        
        const categories = ['Blanck Pink','shakira'];
        const wrapper = shallow( <GifApp defaultCategories={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length);

    })
    
    
})
