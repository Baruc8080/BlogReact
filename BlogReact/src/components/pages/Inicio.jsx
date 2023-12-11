import React from 'react'
import { Link } from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido a "The Daily Tech"</h1>
      <p>Tu destino diario para sumergirte en el fascinante mundo de la tecnología. En este rincón virtual, exploraremos las últimas tendencias en el universo tech, desde los avances más vanguardistas hasta los secretos más profundos del hacking ético. ¿Eres un entusiasta de los videojuegos? También estás en el lugar adecuado, ya que desentrañaremos los mundos virtuales, desmenuzaremos las últimas novedades y te mantendremos al tanto de todo lo relacionado con tus juegos favoritos.

      Nuestro objetivo en "The Daily Tech" es ofrecerte una experiencia única, donde la información fluya tan rápido como la evolución tecnológica. Prepárate para sumergirte en artículos informativos, reseñas apasionadas, y análisis profundos que te mantendrán al tanto de lo que está sucediendo en el vertiginoso universo tecnológico.

      Sintoniza con nosotros diariamente para descubrir cómo la tecnología está dando forma a nuestro presente y futuro. ¡Únete a la conversación, comparte tu pasión y descubre con nosotros el emocionante viaje de "The Daily Tech"!</p>
      <Link to="/articulos" className='button'>Ver los articulos</Link>
    </div>
  )
}
