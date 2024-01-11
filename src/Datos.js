import Button from './Button'

function Datos(){

    const onEnviar = () =>{
        console.log('Se ha pulsado el boton')
    }
    return(
        <div>
            <p>Andrea Castilla Cocera</p>
            <p>acascoc098</p>
            <Button title="Aceptar" enviar={onEnviar}/>
        </div>
    )
}

export default Datos;