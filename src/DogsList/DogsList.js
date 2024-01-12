
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
            <ol>
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
        </>
    )
}

export default DogsList