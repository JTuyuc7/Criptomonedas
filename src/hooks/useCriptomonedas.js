import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;

`;

const Select = styled.select`
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
    display: block;
    -webkit-appearance: none;
    border: none;
    font-size: 1.5rem;
    
`;

const useCriptomonedas = (label, stateInicial, opciones) => {

    
    //State del custom hook
    const [ state, actualizarState ] = useState(stateInicial);

    const SelectCripto = () => ( 
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value=""> - Seleccione - </option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name} >{opcion.CoinInfo.FullName} </option>
                ) )}
            </Select>

        </Fragment>
        
    );
    // Retornar state, interfaz y funcion que modifica el state

    
    return [state, SelectCripto, actualizarState];
}

export default useCriptomonedas;