import { useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width:100%;
    padding:10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size:20px;
    border-radius:5px;
    transition: background-color .3s ease;
    margin-top:30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;

}
`

const Formulario = ({setMonedas}) => {
    //hooks
    const [criptos, setCriptos]=useState([])
    const [moneda, SelectMonedas] = useSelectMonedas('seleciona tu moneda', monedas);
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('seleciona tu criptomoneda', criptos);
    const [error, setError]=useState(false)
   
//consumir contenido de una API
    useEffect(() => {
      const consultarAPI = async()=>{
          const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
          
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          const arrayCriptos = resultado.Data.map (cripto=>{
            const objeto ={
               id:      cripto.CoinInfo.Name,
               nombre:  cripto.CoinInfo.FullName
            } 
            return objeto;
          }) 
          setCriptos(arrayCriptos)
      }
      consultarAPI();
    }, [])
    
    const handleSubmit= (e)=>{
        e.preventDefault();
       
        if ([moneda, criptomoneda].includes('')){
            setError(true)
            return;
        }
        setError(false);
        setMonedas({moneda, criptomoneda})
    }
  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error>}

   <form
   onSubmit={handleSubmit}
   >
       <SelectMonedas />
        <SelectCriptomoneda/>
       <InputSubmit 
       type="submit" 
       value="Cotizar" />

   </form>
       
      </>
  )
}

export default Formulario