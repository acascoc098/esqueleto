import './DogsList.css'

const DogsList = () => {
    const dogs = [
        {edad: 5, nombre: "Luna", raza: "Labrador"},
        {edad: 7, nombre: "Koi", raza: "Bodeguero"},
        {edad: 14, nombre: "Nala", raza: "Pastor alemán"},
        {edad: 15, nombre: "Canela", raza: "Mestiza"}
    ];

    const getDogs = () => {
        const listd = [];
        for (const dog of dogs) {
            //dog.edad > 8 ? listd.push(<p>{`${dog.nombre} ${dog.raza}`}</p>) : menor++;
            if (dog.edad > 8){
                listd.push(<li>{`${dog.nombre} ${dog.raza}`}</li>);
            };
        };
        return listd;
    }

    return (
        <>
            <ol>Llamando a una función
                {getDogs()}
            </ol>

            <ol>Chapuza
                {dogs.map((dg) => {if (dg.edad > 8){
                        //Chapuza
                        //dogs.map((<p>{`${dg.nombre} ${dg.raza}`}</p>))}
                        return <li>{`${dg.nombre} ${dg.raza}`}</li>
                        }
                    }
                )}
            </ol>

            <ol>Bien hecho
                {dogs.filter((dg)=>dg.edad > 8).map(
                    (dg) => <li>{`${dg.nombre} ${dg.raza}`}</li>
                )}
            </ol>

            <table>
                <tr>
                    <th>Edad</th>
                    <th>Nombre</th>
                    <th>Raza</th>
                </tr>
                {dogs.map((dg) => 
                    <tr>
                        <td>{`${dg.edad}`}</td>
                        <td>{`${dg.nombre}`}</td>
                        <td>{`${dg.raza}`}</td>
                    </tr>)}
            </table>
        </>
    )
}

export default DogsList