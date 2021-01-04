import React from 'react';
import styled from '@emotion/styled';


const ResultadoDiv = styled.div`
    background-color: #fff;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
    text-align: center;
    display: block;
`;

const Info = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 22px;
`;

const Cotizacion = ({resultado1}) => {
    if(Object.keys(resultado1).length === 0 )return null;

    console.log(resultado1);

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado1.PRICE}</span></Precio>
            <Info>El precio mas alto del Dia: <span>{resultado1.HIGHDAY}</span></Info>
            <Info>El precio mas bajo del Dia: <span>{resultado1.LOWDAY}</span></Info>
            <Info>Variacion Ulitmas 24 horas: <span>{resultado1.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualizacion: <span>{resultado1.LASTUPDATE}</span></Info>
            
        </ResultadoDiv>

     );
}
 
export default Cotizacion;