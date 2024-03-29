import Button from './Button/Button'
import StudentList from './StudentList/StudentList'
import DogsList from './DogsList/DogsList'


function Datos(){

    const onEnviar = () =>{
        console.log('Se ha pulsado el boton')
    }
    return(
        <div>
            <StudentList/>
            <p>Andrea Castilla Cocera</p>
            <p>acascoc098</p>
            <DogsList/>
            <Button title="Aceptar" type="primary" enviar={onEnviar}/>
            <Button title="Denegar" type="secondary" enviar={onEnviar}/>
        </div>
    )
}

export default Datos;