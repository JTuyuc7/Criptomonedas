import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #b7322c;
    border-radius: 10px;
    padding: 1rem;
    color: #fff;
    display: block;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    font-size: 30px;
    font-family: "Bebas Neue", cursive;
`;

const Error = ({mensaje}) => {
    return ( 
        <MensajeError>{mensaje}</MensajeError>
     );
}
 
export default Error;