import styled from "@emotion/styled"

const Contenedor = styled.div`
    
    display:flex;
    align-items:center;
    gap:1rem;
    margin-top:20px;
    color:#FFF;
    font-family: 'Lato',sans-serif;
`
const Texto = styled.p`
     font-size:18px;
    span{
        font-weight:700;
    }

`
const Imagen = styled.img`
    display:block;
    width:120px;
`

const Precio = styled.p`
    font-size:24px;

    span{
        font-weight:700;
    }
`

const Resultados = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL,LASTUPDATE} = resultado;

  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día es de: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día es de: <span>{LOWDAY}</span></Texto>
            <Texto>Variación de las últimas 24 horas es de: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
   )
}

export default Resultados