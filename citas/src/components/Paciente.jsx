

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const handleEliminar = () => {
    const respuesta = confirm('Deseas Eliminarlo?')
    if (respuesta) {
        eliminarPaciente(paciente.id);
    }
}
  
  return (
    <div className='mt-5 shadow-md bg-[#e5d6e4] py-5 rounded-md uppercase mb-3 p-8'>
          <p className='text-gray-500 font-bold' >Nombre Paciente: <span className='font-normal normal-case'>{paciente.nombre}</span></p>
          <p className='text-gray-500 font-bold' >Correo: <span className='font-normal normal-case'>{paciente.correo}</span></p>
          <p className='text-gray-500 font-bold' >Sintomas: <span className='font-normal normal-case'>{paciente.sint}</span></p>
          <p className='text-gray-500 font-bold' >Fecha: <span className='font-normal normal-case'>{paciente.fecha}</span></p>
          <div className="flex justify-evenly gap-4 mt-4">
            <input type="submit" value="Editar" className="bg-[#c58dba] rounded-lg w-full hover:cursor-pointer hover:bg-[#964a87] p-2 font-bold" onClick={()=> setPaciente(paciente)} />
            <input type="submit" value="Eliminar" className="bg-[#ce64b9] rounded-lg w-full hover:cursor-pointer hover:bg-[#914481] p-2 font-bold" onClick={handleEliminar} />
          </div>
      </div>
  )
}

export default Paciente 
