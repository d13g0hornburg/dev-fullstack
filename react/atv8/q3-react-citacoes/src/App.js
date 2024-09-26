import React, { useState, useEffect } from 'react';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('/random');  // Ou a URL completa com CORS Anywhere ou AllOrigins
      console.log(response);  // Para ver o que está retornando
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Erro ao buscar citação:', error);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Citação Aleatória</h1>
      <p>"{quote}"</p>
      <h3>- {author}</h3>
      <button onClick={fetchQuote}>Gerar Nova Citação</button>
    </div>
  );
};

export default App;
