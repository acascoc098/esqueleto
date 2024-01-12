
const StudentList =  () => {
    const students = [
        {firstName: "Ana", lastName: "Pérez"},
        {firstName: "Juan", lastName: "de Dios"},
        {firstName: "Paco", lastName: "Mer"},
        {firstName: "Luis", lastName: "Martínez"},
    ];

    const getInfoS = () => {
        const list = [];
        for (const student of students) {            
            list.push(<p>{`${student.firstName} ${student.lastName}`}</p>)
        }
        return list;
    }

    /*const prueba = [
        <p>{students[0].firstName}</p>,
        <p>{students[0].lastName}</p>
    ]*/

    return (
        <>
            {/*{students} Esto sería una forma de hacerlo, 
            pero hay que convertilo en jsx, como en prueba -> {prueba}*/}
            {getInfoS()}
        </>
    )
}

export default StudentList;