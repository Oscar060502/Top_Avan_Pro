import  {useState, useEffect} from "react"

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {
    
    
    const[nombre,setNombre] = useState("")
    const[correo,setCorreo] = useState("")
    const[sint,setSint] = useState("")
    const[fecha,setFecha] = useState("") 
    
    const[error,setError] = useState(false)
    
    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setCorreo(paciente.correo)
        setSint(paciente.sint)
        setFecha(paciente.fecha)
        }
        
    },[paciente])


    const generarID = () =>{
        const random = Math.random().toString(16).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    
    const validarFormulario = (e) =>{
       e.preventDefault()
        if([nombre,correo,sint,fecha].includes('')){
            setError(true)
            return
        }
        
        setError(false)
        const objetoPaciente = {
            nombre,
            correo,
            sint,
            fecha,
        }

        if (paciente.id) {
           
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(remplazo => (remplazo.id === paciente.id ? objetoPaciente : remplazo));
            setPacientes(pacientesActualizados)
            setPaciente({});
        }
        else {
            // AGREGAMOS PACIENTES
            objetoPaciente.id = generarID();
            setPacientes([...pacientes, objetoPaciente]);
        }
       const limpiarDatos = () =>{
            setNombre('')
            setCorreo('')
            setSint('')
            setFecha('')
        } 
        limpiarDatos();
    }
    
        

    return (
    <div className='ml-10 mr-10 h-fit sm:mr-10 sm:ml-10 md:mr-5 md:ml-10 md:w-1/2 lg:w-2/5 rounded-md'>
        <h2 className='bg-[#967aa1] text-3xl text-center rounded-md'>Seguimiento de los pacientes</h2>
        {error && <p className="bg-[#ad0b2e] rounded-md sm:text-center sm:1 p-4 m-5">Por favor rellene todos los campos</p>}
        <form className='p-10' onSubmit={validarFormulario}>
                <div>
                    <label>Nombre paciente </label>
                    <input type="text" id='nombre' className='block w-full rounded-md' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </div>
            
                <div>
                    <label>Correo </label>
                    <input type="email" id='correo' className='block w-full rounded-md'value={correo} onChange ={(e) => setCorreo(e.target.value)}/>
                </div>
                <div>
                    <label>Sintomas</label>
                    <textarea className='block w-full rounded-md' name="" id="sintomas" cols="30" rows="10" value={sint} onChange={(e) => setSint(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Fecha de cita </label>
                    <input type="date" id='fecha' className='block w-full rounded-md' value={fecha} onChange={(e) => setFecha(e.target.value)}/>   
                </div>
            <div>
                <input type="submit" value={paciente.id? 'Actualizar Paciente' : 'Agregar'}  className='m-1 p-2 bg-[#a9a3cc] hover:bg-[#585279] rounded hover:cursor-pointer w-full'  />
            </div>
        </form>
    </div>
  )
}

export default Formulario
