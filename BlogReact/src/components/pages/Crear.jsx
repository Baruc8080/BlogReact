import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../../helpers/Peticion';
import { Global } from '../../helpers/Global';

export const Crear = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState(false); // Agregado el estado resultado

  const guardarArticulo = async (e) => {
    e.preventDefault();
    let NuevoArticulo = formulario;

    const { datos } = await Peticion(Global.url + 'crear', 'POST', NuevoArticulo);

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
      <h1>Crear artículo</h1>
      <p>Formulario para crear un artículo</p>

      <strong>{resultado ? 'Artículo guardado con éxito' : 'Escribe tu Articulo'}</strong>
      <form className="formulario" onSubmit={guardarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};
