import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header className="header-container">
            <h2 className="logo">Minha Empresa</h2>
            <nav className="nav-links">
                <Link to="/">Página Inicial</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </header>
    );
}

export default Header;
