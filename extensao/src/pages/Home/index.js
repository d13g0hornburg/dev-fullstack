import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa o Carousel do react-bootstrap


function Home() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-50 bg-light"> {/* Ajusta a altura da área de boas-vindas */}
        <div className="text-center">
          <h1 className="display-4">Página HOME</h1>
          <p className="lead">Bem-vindo à página principal da aplicação!</p>
          <button className="btn btn-primary">Saiba Mais</button>
        </div>
      </div>

      <Carousel className="mt-2" style={{ maxHeight: '400px' }}> {/* Limita a altura máxima do carrossel */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="Primeiro Slide"
            style={{ height: '300px', objectFit: 'cover' }} // Define a altura do slide e ajuste de imagem
          />
          <Carousel.Caption>
            <h3>Primeiro Slide</h3>
            <p>Descrição do primeiro slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Segundo Slide"
            style={{ height: '300px', objectFit: 'cover' }} // Define a altura do slide e ajuste de imagem
          />
          <Carousel.Caption>
            <h3>Segundo Slide</h3>
            <p>Descrição do segundo slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Terceiro Slide"
            style={{ height: '300px', objectFit: 'cover' }} // Define a altura do slide e ajuste de imagem
          />
          <Carousel.Caption>
            <h3>Terceiro Slide</h3>
            <p>Descrição do terceiro slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
