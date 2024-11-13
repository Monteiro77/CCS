// Footer.js
import React from 'react';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className="row text-muted">
        <div className="col-md-3">
          <h5>Informações</h5>
          <ul className="list-unstyled">
            <li>Níveis de CO₂ capturados</li>
            <li>Eficiência do sistema de captura</li>
            <li>Quantidade de carbono armazenado</li>
            <li>Condições de segurança nos locais de armazenamento</li>
            <li>Monitoramento contínuo</li>
          </ul>
        </div>
        
        <div className="col-md-3">
          <h5>Central de Ajuda</h5>
          <ul className="list-unstyled">
            <li>Tem uma ideia mas precisa de ajuda para construí-la?</li>
            <li>Obtenha suporte da nossa equipe de especialistas</li>
            <li>Entre em contato conosco para obter mais informações</li>
            <li>Perguntas frequentes</li>
            <li>Documentação</li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5>Empresa</h5>
          <ul className="list-unstyled">
            <li>Sobre nós</li>
            <li>Carreiras</li>
            <li>Parceiros</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5>Legal</h5>
          <ul className="list-unstyled">
            <li>Política de Privacidade</li>
            <li>Termos de Serviço</li>
            <li>Configurações de Cookies</li>
            <li>Direitos Autorais © 2023 Empresa. Todos os direitos reservados.</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className={`d-flex justify-content-center mt-4 ${styles.contactSection}`}>
        <h6>Got an idea but need help building it?</h6>
        <form className={`d-flex ${styles.contactForm}`}>
          <input type="text" className="form-control" placeholder="Enter your idea" />
          <button type="submit" className={`btn btn-success ${styles.submitButton}`}>Enviar</button>
        </form>
      </div>
      <hr />

      <div className="text-center mt-4 text-muted">
        <p>© 2024 CCS | Todos os direitos reservados.</p>
        <div>
          <a href="#">Política de Privacidade</a> | 
          <a href="#"> Termos de Serviço</a> | 
          <a href="#"> Configurações de Cookies</a>
        </div>
        <div className="mt-2">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
          <a href="#"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
}
