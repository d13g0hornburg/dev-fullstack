import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Sobre() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-4">Sobre Nós</h1>
        <p className="lead">
          Esta é a página sobre o nosso projeto. Aqui você pode saber mais sobre o propósito e a equipe por trás da Lost'n'Found App.
        </p>
        <button className="btn btn-primary">Saiba Mais</button>
      </div>
    </div>
  );
}

export default Sobre;
