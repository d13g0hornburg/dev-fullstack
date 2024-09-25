import React, { useEffect, useState } from 'react';


const App = () => {
  const [receitas, setReceitas] = useState([]);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);
  const [tipoSelecionado, setTipoSelecionado] = useState("");

  useEffect(() => {
    fetch("/receitas/todas")
      .then(response => response.json())
      .then(data => setReceitas(data))
      .catch(error => console.error("Erro ao buscar receitas:", error));
  }, []);

  const selecionarReceita = (receita) => {
    setReceitaSelecionada(receita);
  };

  const fecharReceita = () => {
    setReceitaSelecionada(null);
  };

  const receitasFiltradas = tipoSelecionado 
    ? receitas.filter(receita => receita.tipo === tipoSelecionado)
    : receitas;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Coluna da lista de receitas */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', borderRight: '1px solid #ccc' }}>
        <h1>Receitas</h1>

        <div>
          <button onClick={() => setTipoSelecionado("doce")}>Doces</button>
          <button onClick={() => setTipoSelecionado("salgado")}>Salgados</button>
          <button onClick={() => setTipoSelecionado("agridoce")}>Agridoces</button>
          <button onClick={() => setTipoSelecionado("")}>Todas</button>
        </div>

        <div style={{ margin: '20px 0' }}>
          {receitasFiltradas.map(receita => (
            <button 
              key={receita.id} 
              onClick={() => selecionarReceita(receita)} 
              style={{ display: 'block', margin: '5px 0', padding: '10px', width: '100%' }}
            >
              {receita.receita}
            </button>
          ))}
        </div>
      </div>

      {/* Coluna de detalhes da receita selecionada */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {receitaSelecionada ? (
          <div>
            <h2>{receitaSelecionada.receita}</h2>
            <img 
              src={receitaSelecionada.link_imagem} 
              alt={receitaSelecionada.receita} 
              style={{ width: '300px' }} 
            />
            <h3>Ingredientes</h3>
            <p>{receitaSelecionada.ingredientes}</p>
            <h3>Modo de Preparo</h3>
            <p>{receitaSelecionada.modo_preparo}</p>
            <button onClick={fecharReceita}>Fechar</button>
          </div>
        ) : (
          <h2>Selecione uma receita para ver os detalhes.</h2>
        )}
      </div>
    </div>
  );
};

export default App;
