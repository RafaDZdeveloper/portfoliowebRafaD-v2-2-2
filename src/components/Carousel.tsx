import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const Carousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <ResponsiveCarousel 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={2000}
        swipeable={true}
        showStatus={false}
        showIndicators={true} // Mantener visibles los indicadores
        renderArrowPrev={() => null} // No renderizar la flecha anterior
        renderArrowNext={() => null} // No renderizar la flecha siguiente
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return <li className="indicator selected" aria-label={`Selected: ${label} ${index + 1}`} title={`Selected: ${label} ${index + 1}`} />;
          }
          return <li className="indicator" onClick={onClickHandler} onKeyDown={onClickHandler} value={index} key={index} role="button" tabIndex={0} title={`${label} ${index + 1}`} aria-label={`${label} ${index + 1}`} />;
        }}
      >
        <div>
          <img src="public/images/buscadorbibidas.png" alt="Imagen 1" />
        </div>
        <div>
          <img src="public/images/appcrypto.png" alt="Imagen 2" />
        </div>
        <div>
          <img src="public/images/appclima.png" alt="Imagen 3" />
        </div>
        <div>
          <img src="public/images/seguimientodepacientes.png" alt="Imagen 4" />
        </div>
        <div>
          <img src="public/calculadoragastos.png" alt="Imagen 5" />
        </div>
        <div>
          <img src="public/images/contadorcalorias.png" alt="Imagen 6" />
        </div>
        <div>
          <img src="public/images/calculadoradescuentos.png" alt="Imagen 7" />
        </div>
        <div>
          <img src="public/images/guitarlab.png" alt="Imagen 8" />
        </div>
      </ResponsiveCarousel>
    </div>
  );
}

export default Carousel;
