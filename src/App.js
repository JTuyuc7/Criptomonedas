import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './Components/Formulario';
import Spinner from './Components/Spinner';
import Cotizacion from './Components/Cotizacion';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;

`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700px;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content:"";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {
    const [ moneda, guardarMonenda ] = useState("");
    const [ criptomoneda, guardarCriptomoneda ] = useState("");
    const [ resultado1, guardarResultado ] = useState({});
    const [ cargando, guardarCargando ] = useState(false);

    useEffect(() => {
      const cotizarCriptomonedas = async() =>{
        if(moneda === "") return;
        
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);

        //Mostrar el Spinner
        guardarCargando(true);

        //Ocultar el spiner y mostrar el resultado.
        setTimeout(() =>{
          //Cambiar el estado a false
          guardarCargando(false);

          //Gurdar cotizacion 
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

        }, 3000);
      }
      cotizarCriptomonedas();

    }, [moneda, criptomoneda] );

    // mostrar Spinner o resultado

    const componente = (cargando) ? <Spinner /> 
    :<Cotizacion
    resultado1={resultado1}
    />

  return (

    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>
          Cotiza Criptomonedas al Instante
        </Heading>
        <Formulario
            guardarMonenda={guardarMonenda}
            guardarCriptomoneda={guardarCriptomoneda}
        />

        {componente}

      </div>
    </Contenedor>
  );
}

export default App;
