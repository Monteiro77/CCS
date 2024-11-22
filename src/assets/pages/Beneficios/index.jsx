import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function BeneficiosDesafios() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(
          "https://6733b896a042ab85d117ce17.mockapi.io/ccs/v1/beneficios"
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados da API");
        }
        const data = await response.json();
        setApiData(data[0]); // Como o objeto de interesse está na primeira posição
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar os dados");
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  return (
    <div className={`${styles.container} container mt-5`}>
      <h1 className="text-center mb-4" style={{ color: "#436405" }}>
        Benefícios e Desafios da Energia Limpa
      </h1>
      <div className="row justify-content-center gap-2">
        {/* Benefícios */}
        <div className="col-5 mb-5">
          <h2 className={styles.sectionTitle}>Benefícios</h2>
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <ul className={styles.list}>
              {apiData.beneficios.map((beneficio, index) => (
                <li key={index} className={styles.listItem}>
                  <span className="fw-bold">{`${index + 1} `}</span>
                  {beneficio}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desafios */}
        <div className="col-5">
          <h2 className={styles.sectionTitle}>Desafios</h2>
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <ul className={styles.list}>
              {apiData.desafios.map((desafio, index) => (
                <li key={index} className={styles.listItem}>
                  <span className="fw-bold">{`${index + 1} `}</span>
                  {desafio}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
