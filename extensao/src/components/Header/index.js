import {Link} from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header>
            <h2>Lost'n'Found App</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/apoio">Apoio</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/carrossel">Carrossel</Link></li>
                    <li><Link to="/cadastrarItem">Cadastrar Item</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;