import React, { useState, useEffect } from 'react';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('/random');
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
    <div>
      <h1>Citação Aleatória</h1>
      <p>"{quote}"</p>
      <h4>- {author}</h4>
      <button onClick={fetchQuote}>Nova Citação</button>
    </div>
  );
};

export default App;