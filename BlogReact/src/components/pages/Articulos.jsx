import React, { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const {datos, cargando} = await Peticion(Global.url+"articulos", "GET")

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
  };

  return (
    <>
      {articulos && Array.isArray(articulos) && articulos.length > 0 ? (

        <Listado articulos={articulos} setArticulos={setArticulos}/>
      
): (
        <p>No hay artículos disponibles.</p>
      )}
    </>
  );
};
