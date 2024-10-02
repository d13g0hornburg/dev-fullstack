import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apoio from './pages/Apoio';
import Sobre from './pages/Sobre';
import Carrossel from './pages/Carrossel';
import CadastrarItem from './pages/CadastrarItem';
import Headers from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap

function RoutesApp() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100"> {/* Container flexível */}
                <Headers />
                <div className="flex-grow-1"> {/* Permite que o conteúdo cresça */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/apoio" element={<Apoio />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/carrossel" element={<Carrossel />} />
                        <Route path="/cadastrarItem" element={<CadastrarItem />} />
                    </Routes>
                </div>
                <Footer /> {/* Footer que ficará na parte inferior */}
            </div>
        </BrowserRouter>
    );
}

export default RoutesApp;
