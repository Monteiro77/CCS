import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function TiposEnergia() {
  const [energias, setEnergias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fazendo o consumo da API
    const fetchEnergias = async () => {
      try {
        const response = await fetch("https://6733b896a042ab85d117ce17.mockapi.io/ccs/v1/tipos-energia");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados da API");
        }
        const data = await response.json();
        setEnergias(data); // Atualizando o estado com os dados da API
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnergias();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Carregando...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-5">Erro: {error}</div>;
  }

  return (
    <div className={`${styles.container} container mt-5`}>
      <h1 className={`text-center mb-4 ${styles.title}`}>Tipos de Energia Limpa</h1>
      <div className="row">
        {energias.map((energia) => (
          <div key={energia.id} className="col-lg-4 col-md-6 mb-4">
            <div className={`${styles.card} card h-100`}>
              <img src={energia.imagem} alt={energia.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className={`${styles.cardTitle} card-title`}>{energia.nome}</h5>
                <p className={`${styles.cardText} card-text`}>{energia.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
