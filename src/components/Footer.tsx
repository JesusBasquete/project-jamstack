export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-column">
                        <h3 className="footer-title">Conteúdos Sebrae RS</h3>
                        <ul className="footer-links">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Cursos</a></li>
                            <li><a href="#">Eventos</a></li>
                            <li><a href="#">Consultorias</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-title">Atendimento</h3>
                        <ul className="footer-links">
                            <li><a href="#">Encontre o SEBRAE</a></li>
                            <li><a href="#">Ouvidoria</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-title">Siga o SEBRAE RS</h3>
                        <div className="social-links" style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                        </div>
                        <p>0800 570 0800</p>
                        <p>Whatsapp: (51) 3216-5000</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="footer-copyright">SEBRAE RS © Copyright 2025 - Todos os direitos reservados</span>
                </div>
            </div>
        </footer>
    );
}