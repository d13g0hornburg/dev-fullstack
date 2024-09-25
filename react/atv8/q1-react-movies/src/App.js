import React, { useState } from "react";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "ac1e8252"; // Substituir com a chave do OMDb API

  const searchMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
    const data = await response.json();
    setMovies(data.Search || []); // Corrigido: 'Search' é o campo correto no retorno da API
  };

  return (
    <div className="container">
      <h1 className="heading">Localizar Filmes!</h1>
      <div className="searchContainer">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite termos para localizar filmes..."
          className="input"
        />
        <button onClick={searchMovies} className="button">Localizar</button>
      </div>
      <div className="movieList">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img src={movie.Poster} alt={movie.Title} className="image" /> {/* Corrigido aqui */}
            <h3 className="title">{movie.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
