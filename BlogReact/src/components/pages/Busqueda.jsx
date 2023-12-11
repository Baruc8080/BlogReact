import React, { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { useParams } from 'react-router-dom';
import { Listado } from './Listado';

export const Busqueda = () => {
  const [articulos, setArticulos] = useState([]);
  const params = useParams()

  useEffect(() => {
    conseguirArticulos();
  }, []);

  useEffect(() => {
    conseguirArticulos();
  }, [params]);

  const conseguirArticulos = async () => {
    const {datos} = await Peticion(Global.url+"buscar/" +params.busqueda, "GET")

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    } else{
      setArticulos([])
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
