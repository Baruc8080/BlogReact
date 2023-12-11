import React from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Link } from 'react-router-dom'

export const Listado = ({articulos, setArticulos}) => {
  const eliminar = async(id) => {
    let {datos} = await Peticion(Global.url+"articulo/"+id, "DELETE" )
    if(datos.status === "success"){
      let articulosActualizados = articulos.filter(articulo => articulo._id !== id)

      setArticulos(articulosActualizados)
    }
  }
  return (
    articulos.map(articulo => (
        <article key={articulo._id} className="articulo-item">
          <div className='mask'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} alt="" /> }
            {articulo.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" /> }
          </div>

          <div className='datos'>
            <h3 className="title"><Link to={"/articulo/"+articulo._id}>{articulo.titulo}</Link></h3>
            <p className="description">{articulo.contenido}</p>

            <Link to={"/editar/"+articulo._id} className="edit">Editar</Link>
            <button className="delete" onClick={() => {
              eliminar(articulo._id)
            }}>Borrar</button>
          </div>
        </article>
      ))
  )
}
