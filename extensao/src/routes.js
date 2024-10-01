import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Apoio from './pages/Apoio';
import Sobre from './pages/Sobre';
import Carrossel from './pages/Carrossel';
import CadastrarItem from './pages/CadastrarItem';
import Headers from './components/Header';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Headers/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/apoio" element={<Apoio/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/carrossel" element={<Carrossel/>}/>
                <Route path="/cadastrarItem" element={<CadastrarItem/>}/>
            </Routes>
        </BrowserRouter>
    )
} export default RoutesApp;