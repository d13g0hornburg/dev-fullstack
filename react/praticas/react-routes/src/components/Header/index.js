import {Link} from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <h2>Minha empresa</h2>
            <div>
            <Link to="/">Página Inicial</Link> 
            <Link to="/contato">Contato</Link>
            <Link to="/sobre">Sobre</Link> 
            
            </div>
        </header>
    )
}export default Header;