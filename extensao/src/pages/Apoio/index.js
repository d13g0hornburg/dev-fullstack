import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Apoio() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-4">Página de Apoio</h1>
        <p className="lead">
          Aqui você encontrará recursos e suporte para utilizar nossa aplicação.
        </p>
        <button className="btn btn-primary">Ver Mais</button>
      </div>
    </div>
  );
}

export default Apoio;
