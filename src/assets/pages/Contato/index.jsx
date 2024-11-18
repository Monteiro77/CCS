import styles from "./styles.module.scss";

export default function Contato() {
  return (
    <div className={`${styles.container} container mt-5`}>
      <h1 className="text-center mb-5" style={{ color: "#436405" }}>
        Fale Conosco
      </h1>
      <div className="row g-5">
        {/* Formulário */}
        <div className="col-lg-7 col-12">
          <div className={styles.formCard}>
            <h2 className={`${styles.sectionTitle} mb-4`}>Envie uma Mensagem</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="nome" className={styles.label}>
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className={styles.input}
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="Seu email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensagem" className={styles.label}>
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  className={styles.textarea}
                  placeholder="Escreva sua mensagem aqui"
                ></textarea>
              </div>
              <button type="submit" className={styles.button}>
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="col-lg-4 col-12">
          <div className={styles.infoCard}>
            <h2 className={`${styles.sectionTitle} mb-4`}>Entre em Contato</h2>
            <ul className={styles.contactList}>
              <li>
                <i className="bi bi-telephone-fill"></i> (11) 95263-7067
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i> ccscompany@hotmail.com
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i> Travessa Vinte e Três de Julho, 123 - Diadema, SP
              </li>
            </ul>
            <h2 className={`${styles.sectionTitle} mt-4 mb-3`}>Redes Sociais</h2>
            <div className="d-flex gap-4">
              <a href="#" className={`${styles.iconLink} fs-4`}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className={`${styles.iconLink} fs-4`}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className={`${styles.iconLink} fs-4`}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className={`${styles.iconLink} fs-4`}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
