import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default () => {
  return (
    <section className="about-background">
      <Jumbotron>
        <h1 id="jumbo">Sobre</h1>
        <h4>
          Somos uma plataforma destinada a ajudar as mulheres a identificarem
          empresas na área de tecnologia que possuam ambiente inclusivo e
          seguro.
        </h4>
      </Jumbotron>
    </section>
  );
};
