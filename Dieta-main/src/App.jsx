import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import { useState, useEffect } from 'react'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const pacientesLocalStorage = localStorage.getItem("pacientesLocalStorage")
    console.log(pacientesLocalStorage);
  }, [])

  useEffect(() => {
    localStorage.setItem("pacientesLocalStorage", JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    console.log("Eiminando paciente", id)
    const pacientesActualizados = pacientes.filter(original => original.id !== id)
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="mt-[5%] mb-[5%] ">
      <Cabecera />
      <div className="mt-12 md:flex gap-4">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <Listado
          pacientes={pacientes}
        />
      </div>
    </div>
  )
}

export default App

//npm run build
// hacer una cuenta de netlify
// en los sites arrastrar el dist
// lighthouse *bruh*