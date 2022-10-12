import { useEffect, useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"

const Header = () => {
  const [datos, setDatos] = useState([])
  const [loading, setLoading] = useState(true)
  const ruta = "https://api.tvmaze.com/search/shows?q=america"
  const Datos = async () => {
    
    const request = await fetch(ruta)
    const respuesta = await request.json()
    console.log(respuesta);
     setDatos(respuesta)
     setLoading(false)
  }
  useEffect (() =>{
      Datos()
  },[])

  return (
    <>
    {/* <BrowserRouter> */}
    <Link to={`details/${datos?.show?.id}`}>
    <div className="row mt-5 m-2">
        {loading
          ? <p className='text-center text-white'>Cargando...</p>
          : datos.map((datos) => (
            <div key={datos.show.id} className="col mb-4">
            <div className="card" style={{minwidth :"200px"}}>
                <img src={datos.show.image.medium} alt=""/>
                <div className="card-body">
             <h5 className="card-title">{datos.show.name}</h5>
                </div>
            </div>
          </div>
        ))}
        
      </div>
        
        </Link>
       {/*  </BrowserRouter> */}
    </>
  )
}

export default Header