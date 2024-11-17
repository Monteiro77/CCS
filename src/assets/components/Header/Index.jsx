import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../images/logo-ccs.svg";
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'; // Importando as classes CSS Modules

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          {/* Logo com Link para a Home */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Logo CCS" style={{ width: '150px' }} />
          </Link>

          {/* Menu de navegação */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className={styles.navbarTogglerIcon}></span> {/* Usando a classe CSS Module */}
          </button>

          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/sensores" className="nav-link">Sensores</Link>
              </li>
              <li className="nav-item">
                <Link to="/armazenamento" className="nav-link">Armazenamento</Link>
              </li>
              <li className="nav-item">
                <Link to="/tipos-energia" className="nav-link">Tipos de Energia</Link>
              </li>
              <li className="nav-item">
                <Link to="/armazenamento" className="nav-link">Benefícios</Link>
              </li>
              <li className="nav-item">
                <Link to="/armazenamento" className="nav-link">Contato</Link>
              </li>
            </ul>

            {/* Botões de Login e Registrar */}
            <div className="d-flex align-items-center">
              <button className={`btn ${styles.loginButton} me-2`}>Login</button> {/* Usando a classe CSS Module */}
              <div className="btn-group">
                <button type="button" className={`btn btn-outline-success ${styles.registerButton}`} data-bs-toggle="dropdown" aria-expanded="false">
                <Link to="/register" className="nav-link"> Registrar </Link>
                 
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
