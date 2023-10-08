import { useState,useEffect } from "react"
import { Error } from "./Error"
const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
   
    const [nombre,setNombre]=useState('')
    const [propietario,setPropietario]=useState('')
    const [email,setEmail]=useState('')
    const [fecha,setFecha]=useState('')
    const [sintomas,setSintomas]=useState('')
    const [error,setError]=useState(false)
    useEffect(() => {
      if(Object.keys(paciente).length !=0){
        const {nombre,propietario,email,fecha,sintomas}=paciente
        setNombre(nombre)
        setPropietario(propietario)
        setEmail(email)
        setFecha(fecha)
        setSintomas(sintomas)
      }
    }, [paciente])
    
    const generarId=(e)=>{
      const random=  Math.random().toString(36).substring(2)
      const fecha= Date.now().toString(36)
      return random+fecha
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      if([nombre,propietario,email,fecha,sintomas].includes('')){
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 5000);
        return
      }
      const objetoPaciente={
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }

      if(paciente.id){
        objetoPaciente.id=paciente.id
        const pacienteActualizado= pacientes.map(pacienteEditar=> 
          pacienteEditar.id===paciente.id?objetoPaciente : pacienteEditar
          )
 
        
        setPacientes(pacienteActualizado)
        setPaciente({})
      }else{
        objetoPaciente.id=generarId()
        setPacientes([...pacientes,objetoPaciente])
      }

      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
      setError(false)

      
    }

    return (
      <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h1 className='font-black text-3xl text-center'>
          Seguimiento Pacientes
        </h1>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className='text-indigo-600 font-bold'>administralos</span>
        </p>
        <form onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          {error && (
            <Error mensaje='Todos los campos son obligatorios'/>
          )}
          <div className='mb-5'>
            <label htmlFor="mascota"  className='block text-gray-700 uppercase font-bold'>
              Nombe Mascota
              </label>
            <input type="text" id='mascota'  
            value={nombre} onChange={(e)=>setNombre(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            placeholder='Nombre de la mascota'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="propietario"  className='block text-gray-700 uppercase font-bold'>
              Nombe Propietario
              </label>
            <input type="text" id='propietario'
            value={propietario} onChange={(e)=>setPropietario(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            placeholder='Nombre del propietario'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="email"  className='block text-gray-700 uppercase font-bold'>
              Email
              </label>
            <input type="email" id='email'
            value={email} onChange={(e)=>setEmail(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            placeholder='Email contacto del propietario'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="alta"  className='block text-gray-700 uppercase font-bold'>
              Alta
              </label>
            <input type="date" id='alta'
            value={fecha} onChange={(e)=>setFecha(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="sintomas"  className='block text-gray-700 uppercase font-bold'>
              Sintomas
              </label>
              <textarea name="" 
              value={sintomas} onChange={(e)=>setSintomas(e.target.value)}
              id="sintomas"  
              placeholder='Describe los sintomas'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'></textarea>
          </div>
          <input type="submit" 
          value={paciente.id?'Editar paciente': 'Agregar paciente'}
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold 
          hover:bg-indigo-700 cursor-pointer transition-colors'/>
        </form>
      </div>
    )
  
}

export default Formulario