import './style.css';

function Erro() {
    return (
        <div className="erro-container">
            <h1>404 - Página não encontrada</h1>
            <p>Oops! A página que você está tentando acessar não existe ou foi movida.</p>
            <a href="/" className="btn-voltar">Voltar à página inicial</a>
        </div>
    );
}

export default Erro;
