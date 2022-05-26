const Pacientes = ({ paciente }) => {

    return (
        <div className='my-4 ml-3 shadow-xl bg-[#ddd4bb] p-3 rounded-md uppercase text-gray-700 font-semibold'>
            <p>Nombre del Paciente: <span className='font-medium normal-case'>{paciente.nombre}</span></p>
            <p>Gasto Basal: <span className='font-medium normal-case'>{paciente.gb} kcal</span></p>
            <p>Factor de Actividad: <span className='font-medium normal-case'>{paciente.fa} kcal</span></p>
            <p>Termogénesis-Alimentos: <span className='font-medium normal-case'>{paciente.tg} kcal</span></p>
            <p>Gasto Total: <span className='font-medium normal-case'>{paciente.gt} kcal</span></p>
        </div>

    )
}
export default Pacientes