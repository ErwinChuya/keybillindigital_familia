import React from 'react';
import './estilos.css';

const frmAlbum = () => {
  const images = [
    { src: 'foto1.jpg', descripcion: 'Un día especial en la playa' },
    { src: 'foto2.jpg', descripcion: 'Celebrando el cumpleaños de mamá' },
    { src: 'foto3.jpg', descripcion: 'Excursión al bosque' },
    { src: 'foto4.jpg', descripcion: 'La graduación de Ana' },
    { src: 'foto5.jpg', descripcion: 'Nuestro viaje a las montañas' },
    { src: 'foto6.jpg', descripcion: 'Navidad en familia' },
    { src: 'foto7.jpg', descripcion: 'Un picnic en el parque' },
    { src: 'foto8.jpg', descripcion: 'Visita al museo' },
    { src: 'foto9.jpg', descripcion: 'Fiesta sorpresa para papá' },
    { src: 'foto10.jpg', descripcion: 'Día de campo con amigos' },
  ];

  return (
    <div className="album-container">
      {images.map((image, index) => (
        <div key={index} className="photo-container">
          <img src={require(`./${image.src}`)} alt={`Foto ${index + 1}`} className="photo" />
          <p className="description">{image.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default frmAlbum;
