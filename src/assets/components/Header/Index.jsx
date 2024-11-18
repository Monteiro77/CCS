import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JavaScript do Bootstrap
import logo from "../../images/logo-ccs.svg";
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo CCS" className={styles.logo} />
          </Link>

          {/* Menu hambúrguer */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
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
                <Link to="/beneficios" className="nav-link">Benefícios</Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link">Contato</Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className={`btn ${styles.loginButton} me-2`}>Login</button>
              <Link to="/register" className={`btn btn-outline-success ${styles.registerButton}`}>Registrar</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
