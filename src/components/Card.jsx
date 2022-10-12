import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"


const Card = () => {
  const {id} = useParams()
  const [info, setInfo] = useState([] || {})
  const [loading, setLoading] = useState(true)
 
  const getDatos = async () => {
      const ruta = `https://api.tvmaze.com/shows/${id}`
      try {
        const req = await window.fetch(ruta)
        const res = await req.json()
        setInfo(res)
        console.log(res);
        setLoading(false)
      } catch (error) {
        setLoading(true)
      }
    }
  
    useEffect(() => {
      getDatos()
    }, [id])
  return (
    <div className='Container'>
       
           {
            !loading 
              ? (
                <div className="container mt-5 ">
                    <h1>{info?.name}</h1><p className="inline-block">Duracion Episodio - {info?.schedule?.time}</p>
                    <img src={info?.image?.medium} alt=""/><p className="btn btn-primary inline-block mx-2">Lenguaje: {info?.language}</p>
                    <p className="btn btn-primary inline-block">Terminada en: {info?.ended}</p><p className="btn btn-primary inline-block mx-2">Genero: {info?.genres?.join(', ')}</p>
                    <br/>

                    <p className="mt-4">{info?.summary}</p>

                    <br/>
                    <div className="container">
                      <p>Dias de capitulos: {info?.schedule?.days.join(', ')}</p>
                      <p>Estado: {info?.status}</p><p className="inline-block">Rating: {info?.rating?.average} </p>
                      <p>Ciudad: {info?.network?.country?.name}</p>
                      
                    </div>
                </div>
               

              )
              :<h5>Cargando...</h5>
           }

        </div>
  )
}



export default Card