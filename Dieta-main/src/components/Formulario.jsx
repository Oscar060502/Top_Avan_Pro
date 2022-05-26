import { useState, useEffect } from 'react'

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState("")
    const [genero, setGenero] = useState("")
    const [edad, setEdad] = useState("")
    const [estatura, setEstatura] = useState("")
    const [peso, setPeso] = useState("")
    const [actividad, setActividad] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setGenero(paciente.genero);
            setEdad(paciente.edad);
            setEstatura(paciente.estatura);
            setPeso(paciente.peso);
            setActividad(paciente.actividad);
        }
    }, [paciente])

    const validarFormulario = (e) => {
        e.preventDefault()
        if ([nombre, genero, edad, estatura, peso, actividad].includes("")) {
            setError(true)
            return
        }
        // Se coloca en falso al no haber un campo vacío.
        setError(false)

        const generarID = () => {
            const random = Math.random().toString(16).substring(2)
            const fecha = Date.now().toString(36)
            return random + fecha
        }

        const generarGB = () => {
            let gb = 0
            if (genero == 1) {
                gb = 66.5 + (13.75 * parseFloat(peso)) + (5 * parseFloat(estatura)) - (6.78 * parseFloat(edad))
            } else {
                gb = 655.1 + (9.56 * peso) + (1.85 * estatura) - (4.68 * edad)
            }
            return gb
        }

        const generarFA = (gb) => {
            let fa = 0
            switch (actividad) {
                case "1.2":
                    console.log("caso1");
                    fa = gb * 1.2
                    break;
                case "1.3":
                    console.log("caso2");
                    fa = gb * 1.3
                    break;
                case "1.5":
                    console.log("caso3");
                    fa = gb * 1.5
                    break;
                case "1.7":
                    console.log("caso4");
                    fa = gb * 1.7
                    break;
                case "1.9":
                    console.log("caso5");
                    fa = gb * 1.2
                    break;
            }
            return fa
        }

        const limpiarDatos = () => {
            setNombre("")
            setEdad("")
            setEstatura("")
            setPeso("")
        }

        const objetoPaciente = {
            nombre,
            genero,
            edad,
            estatura,
            peso,
            actividad,
        }

        if (paciente.id) { // Actualizar
            objetoPaciente.id = paciente.id
            console.log(objetoPaciente);
            console.log(paciente);
            const pacientesActualizados = pacientes.map(original => original.id === paciente.id ? objetoPaciente : original)
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else { // Agregar
            objetoPaciente.id = generarID()
            objetoPaciente.gb = generarGB().toFixed(2)
            objetoPaciente.fa = (generarFA(objetoPaciente.gb)).toFixed(2)
            objetoPaciente.tg = (objetoPaciente.gb * 0.1).toFixed(2)
            objetoPaciente.gt = (parseFloat(objetoPaciente.fa) + parseFloat(objetoPaciente.tg)).toFixed(2)
            setPacientes([...pacientes, objetoPaciente])
        }

        limpiarDatos()
    }

    return (
        <div className='text-xl mr-2 ml-5 sm:ml-5 md:mr-0 sm:mr-4 bg-[#CBDF90] rounded-xl lg:w-[40%] md:w-[50%] h-fit border-[#9db458] border-4 border-double'>
            <h2 className='text-3xl text-center underline underline-offset-8 pt-[16px]'>Registro Datos</h2>
            <p className='text-xl px-10 mt-5 p-2'>Escribe los datos de la <span className='font-bold text-[#375f3c]'>Persona.</span></p>
            <form action="" className='p-10 pt-0 ' onSubmit={validarFormulario}>
                {error && <p className='text-white text-center m-0 mx-4 mb-4 py-1 bg-[#326425] font-bold uppercase rounded-3xl'>Se requiere llenar todos los campos.</p>}
                <div>
                    <label className=''>Nombre:</label>
                    <input id='Nombre' placeholder='Nombre/Apellidos' type="text" className='border-black border-[1px] block w-full rounded-md p-1 mt-1' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='mt-2'>
                    <label>Género:</label>
                    <fieldset className='flex justify-center gap-[15%]'>
                        <div>
                            <input type="radio" name="Genero" id="Femenino" value={0} onChange={(e) => setGenero(e.target.value)} /> Femenino
                        </div>
                        <div>
                            <input type="radio" className='' name="Genero" id="Masculino" value={1} onChange={(e) => setGenero(e.target.value)} /> Masculino
                        </div>
                    </fieldset>
                </div>

                <div className='mt-2'>
                    <label className=''>Edad:</label>
                    <input id='Edad' placeholder='Mayor de 18' type="number" min='18' className='border-black border-[1px] block w-full rounded-md p-1 mt-1' value={edad} onChange={(e) => setEdad(e.target.value)} />
                </div>

                <div className='mt-2'>
                    <label>Estatura:</label>
                    <input id='Estatura' placeholder='En cm' type="number" className='border-black border-[1px] block w-full rounded-md p-1' value={estatura} onChange={(e) => setEstatura(e.target.value)} />
                </div>

                <div className='mt-2'>
                    <label>Peso:</label>
                    <input id='Peso' type="number" placeholder='En kg' className='border-black border-[1px] block w-full rounded-md p-1' value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>

                <div className='mt-2 flex gap-2'>
                    <label>Factor de Actividad:</label>
                    <select name="Actividad" className="rounded-xl font-thin" id="Actividad" onChange={(e) => setActividad(e.target.value)}>
                        <option value=""></option>
                        <option value={1.2}>Sedentario</option>
                        <option value={1.3}>Ligero</option>
                        <option value={1.5}>Moderado</option>
                        <option value={1.7}>Activo</option>
                        <option value={1.9}>Vigoroso</option>
                    </select>
                </div>

                <div className='mt-2'>
                    <input type="submit" value={paciente.id ? "Editar Paciente" : "Calcular"} className='mt-2 border-2 border-[#8FAD88] bg-[#63805c] rounded-lg p-2 text-white hover:bg-[#475f41] hover:cursor-pointer ease-in duration-200 w-full' />
                </div>
            </form >
        </div >
    )
}

export default Formulario

// Gasto Basal
// Factor Actividad = Gasto Basal * Factor de Actividad
// Termogénesis = Gasto Basal * 0.1
// Gasto Total = Gasto Basal + Termogénesis