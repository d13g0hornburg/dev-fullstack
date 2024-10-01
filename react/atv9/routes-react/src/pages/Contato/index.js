import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contato() {
    return (
        <div className="contato-container">
            <h1>CONTATO</h1>
            <p>Entre em contato conosco através dos canais abaixo:</p>
            <div className="icon-container">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://t.me/USERNAME" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram"></i>
                </a>
            </div>
        </div>
    );
}

export default Contato;
