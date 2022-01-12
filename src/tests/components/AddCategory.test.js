import { shallow } from 'enzyme'
import React from 'react';
import { AddCategory } from '../../components/AddCategory';

import'@testing-library/jest-dom';

describe('Prueba en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);

    })
    
    test('debe mostrar el componente correctamente', () => {
        

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');

        const value = 'hola celes';

        input.simulate('change', { 
            target: {
                 value 
                } 
            });

            expect( wrapper.find('p').text().trim() ).toBe(value);

    });

    test('No debe de postear info con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect( setCategories ).not.toHaveBeenCalled();
        
    });

    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {

        const value = 'hola celes';

        wrapper.find('input').simulate('change', { target: { value }})
        
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').text().trim()).toBe('');
    })
    
    
    
    
})
