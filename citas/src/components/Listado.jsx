import React from 'react'
import Paciente from './Paciente'
const Listado = ({ pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className='mr-10 ml-10 sm:mr-10 sm:ml-10 md:mr-10 md:ml-5 md:w-1/2 lg:w-3/5 font-bold rounded-md md:mt-0 mt-5 md:h-screen overflow-y-scroll'>
      <h2 className='text-3xl text-center rounded-md'>Listado Paciente</h2>
      <p className='text-center'>Administra tus <span className='font-bold text-violet-400 '>Pacientes y citas</span></p>
      {
       pacientes.map(paciente => (
         <Paciente 
         key={paciente.id}
         paciente = {paciente}  
         setPaciente={setPaciente}
         eliminarPaciente={eliminarPaciente}
         />
       ))
      }
      
         
      </div>
  )
}

export default Listado
