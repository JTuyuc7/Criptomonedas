import React, { useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomonedas from '../hooks/useCriptomonedas';
import Error from './Error';
import Axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .4s ease;

    &:hover{
        background-color: #326ac0;
        cursor:pointer;
    }
`;


const Formulario = ({ guardarMonenda, guardarCriptomoneda }) => {

    // State del listado de Criptomonedas
    const [ listadocripto, guardarCriptomonedas ] = useState([]);
    const [ error, guardarError ] = useState(false);

    const MONEDAS = [
        { codigo: "USD", nombre: "Dolar de Estados Unidos" },
        { codigo: "MXN", nombre: "Peso Mexicano" },
        { codigo: "EUR", nombre: "Euro" },
        { codigo: "GBP", nombre: "Libra Esterlina" },
        { codigo: "GTQ", nombre: "Quetzal Guatemalteco" }
    ];

    // Utilizar useMoneda
    const [ moneda, SelectMonedas ] = useMoneda("Elige tu Moneda", "" , MONEDAS);
    // Usar useCriptomoneda

    const [ criptomoneda, SelectCripto ] = useCriptomonedas("Elige tu Criptomoneda", "", listadocripto );

    useEffect(() =>{
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await Axios.get(url);

            guardarCriptomonedas(resultado.data.Data);
        }
        consultarApi();

    }, [] );
    //Cuando el usuario hace submit 
    const cotizarMoneda = e =>{
        e.preventDefault();

        //Validar si todos los campos estan llenos

        if(moneda.trim()=== "" || criptomoneda === ""){
            guardarError(true);
            return;
        }

        //Guardar los datos al componente principal

        guardarError(false);
        guardarMonenda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return ( 
        <form
            onSubmit = { cotizarMoneda }
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null }
            <SelectMonedas />

            <SelectCripto />

            <Boton
                type="submit"
                value="Calcular"
            />

            
        </form>
     );
}
 
export default Formulario;
