import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';


export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch( getPokemons() );

    }, [])
    
    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}
