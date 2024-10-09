import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white py-3 mt-auto">
            <div className="container text-center">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Lost'n'Found App. Todos os direitos reservados.
                </p>
                <div className="mt-2">
                    <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <a href="https://github.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i> {/* Ícone do GitHub */}
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
