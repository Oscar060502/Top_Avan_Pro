import React from 'react'
import Pacientes from './Pacientes'

const Listado = ({ pacientes }) => { // Agrega eliminarPaciente en la parte de arriba en listado.jsx

    return (
        <div className='m-4 ml-1 mr-5 md:mt-0 bg-[#CBDF90] rounded-xl p-4 md:w-[50%] lg:w-[60%] mb-0 border-[#9db458] border-4 border-double'>
            <h2 className='text-3xl text-center underline underline-offset-8'>Registro de Cálculos</h2>
            <p className='text-xl mt-5 p-2'>Observa los cálculos realizados por <span className='font-bold text-[#375f3c]'>Persona.</span></p>
            <div className='md:overflow-y-scroll pr-4 rounded-xl bg-slate-200 md:h-[415px] py-1'>
                {
                    pacientes.map(paciente => (
                        <Pacientes
                            key={paciente.id}
                            paciente={paciente}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Listado