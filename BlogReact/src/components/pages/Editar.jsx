import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../../helpers/Peticion';
import { Global } from '../../helpers/Global';

export const Editar = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState(false); // Agregado el estado resultado
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

  const editarArticulo = async (e) => {
    e.preventDefault();
    let NuevoArticulo = formulario;

    const { datos } = await Peticion(Global.url + 'articulo/'+params.id, 'PUT', NuevoArticulo);

    if (datos.status === 'success') {
      setResultado(true);

      const fileInput = document.querySelector("#file");

      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);

      const subida = await Peticion(Global.url + 'subir-imagen/' + datos.articulo._id, 'POST', formData, true);
    }
  };

  return (
    <div className="jumbo">
      <h1>Editar artículo</h1>
      <p>Formulario para editar {articulo.titulo}</p>

      <strong>{resultado ? 'Artículo guardado con éxito' : 'Escribe tu Articulo'}</strong>
      <form className="formulario" onSubmit={editarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" onChange={cambiado} defaultValue={articulo.titulo}/>
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado} defaultValue={articulo.contenido} />
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <div className='mask'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} alt="" /> }
            {articulo.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" /> }
          </div>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};
