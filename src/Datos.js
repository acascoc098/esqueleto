import Button from './Button/Button'

function Datos(){

    const onEnviar = () =>{
        console.log('Se ha pulsado el boton')
    }
    return(
        <div>
            <p>Andrea Castilla Cocera</p>
            <p>acascoc098</p>
            <Button title="Aceptar" type="primary" enviar={onEnviar}/>
            <Button title="Denegar" type="secondary" enviar={onEnviar}/>
        </div>
    )
}

export default Datos;