import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = ( { defaultCategories = [] }) => {
    
    const [categories, setCategories] = useState( defaultCategories )

    // const handleAdd = () => {
    //     setCategories((categ) => [...categ, 'SoyNueva']);
    // }
    
    return (
        <>
            <h2> GifApp </h2>
            <AddCategory setCategories= { setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category  => (
                        <GifGrid
                            key={category} 
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

GifApp.propTypes = {
    inicio: PropTypes.string.isRequired
}

GifApp.defaultProps = {
    inicio : 'Gif-App'
}

export default GifApp

