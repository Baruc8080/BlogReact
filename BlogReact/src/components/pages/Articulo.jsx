import React, { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';

export const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const params = useParams()

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const {datos} = await Peticion(Global.url+"articulo/" + params.id, "GET")

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
  };

  return (
    <>

        <div className='jumbo'>
          <>
          <div className='mask'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} alt="" /> }
            {articulo.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" /> }
          </div>
          <h1>{articulo.titulo}</h1>
          <span>{articulo.fecha}</span>
          <p>{articulo.contenido}</p>
          </>
        </div>
          
    </>
  );
};
