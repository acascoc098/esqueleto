import './StudentLis.css'

const StudentList =  () => {
    const students = [
        {id: 1,firstName: "Ana", lastName: "Pérez"},
        {id: 2,firstName: "Juan", lastName: "de Dios"},
        {id: 3,firstName: "Paco", lastName: "Mer"},
        {id: 4,firstName: "Luis", lastName: "Martínez"},
    ];

    const getInfoS = () => {
        const list = [];
        for (const student of students) {            
            list.push(<p className='primeforma' key={student.id}>{`${student.firstName} ${student.lastName}`}</p>)
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

            {students.map((st) => <p className="secoforma" key={st.id}>{`${st.firstName} ${st.lastName}`}</p>)}
        </>
    )
}

export default StudentList;