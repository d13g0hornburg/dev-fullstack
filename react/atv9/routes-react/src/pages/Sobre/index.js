import './style.css';

function Sobre() {
    return (
        <div className="sobre-container">
            <h1>SOBRE</h1>
            <p>Conheça um pouco mais sobre nossa empresa, nossa missão, visão e valores.</p>

            <section className="sobre-section">
                <h2>Nossa História</h2>
                <p>Fundada em [ano], nossa empresa tem como objetivo [objetivo]. Ao longo dos anos, temos trabalhado com dedicação para entregar os melhores serviços e produtos para nossos clientes.</p>
            </section>

            <section className="sobre-section">
                <h2>Missão</h2>
                <p>Nossa missão é [descrever missão]. Trabalhamos todos os dias para alcançar esse objetivo e transformar o mercado.</p>
            </section>

            <section className="sobre-section">
                <h2>Visão</h2>
                <p>Almejamos [descrever visão]. Acreditamos no crescimento sustentável e na inovação contínua.</p>
            </section>

            <section className="sobre-section">
                <h2>Valores</h2>
                <ul className="valores-list">
                    <li>Compromisso com a qualidade</li>
                    <li>Inovação constante</li>
                    <li>Transparência e ética</li>
                    <li>Foco no cliente</li>
                </ul>
            </section>
        </div>
    );
}

export default Sobre;
