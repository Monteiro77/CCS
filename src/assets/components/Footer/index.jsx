// Footer.js
import React from 'react';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className="row text-muted">
        <div className="col-md-3">
          <h5>Information</h5>
          <ul className="list-unstyled">
            <li>Captured CO₂ Levels</li>
            <li>Capture System Efficiency</li>
            <li>Amount of Stored Carbon</li>
            <li>Safety Conditions in Storage Locations</li>
            <li>Continuous Monitoring</li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5>Help Center</h5>
          <ul className="list-unstyled">
            <li>Have an idea but need help building it?</li>
            <li>Get support from our team of specialists</li>
            <li>Contact us for more information</li>
            <li>Frequently Asked Questions</li>
            <li>Documentation</li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5>Company</h5>
          <ul className="list-unstyled">
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5>Legal</h5>
          <ul className="list-unstyled">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Settings</li>
            <li>Copyright © 2023 Company. All rights reserved.</li>
          </ul>
        </div>

      </div>

      <hr />

      <div className={`d-flex justify-content-center align-items-center mt-4 ${styles.contactSection}`}>
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
