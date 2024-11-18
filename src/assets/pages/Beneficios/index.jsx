import styles from "./styles.module.scss";

export default function BeneficiosDesafios() {
  const beneficios = [
    "Redução da emissão de gases do efeito estufa, ajudando a combater as mudanças climáticas.",
    "Fontes de energia renováveis são inesgotáveis, garantindo sustentabilidade a longo prazo.",
    "Criação de empregos na instalação e manutenção de tecnologias limpas.",
    "Melhoria na qualidade do ar, reduzindo impactos na saúde pública.",
    "Independência energética, reduzindo a dependência de combustíveis fósseis importados.",
  ];

  const desafios = [
    "Custo inicial elevado para implementação de tecnologias renováveis.",
    "Dependência de fatores naturais, como sol ou vento, que podem ser variáveis.",
    "Necessidade de espaço físico para instalações, como fazendas solares ou parques eólicos.",
    "Desafios no armazenamento de energia devido à intermitência de algumas fontes.",
    "Adaptação de redes elétricas existentes para integrar energias renováveis.",
  ];

  return (
    <div className={`${styles.container} container mt-5`}>
      <h1 className="text-center mb-4" style={{color: "#436405"}}>Benefícios e Desafios da Energia Limpa</h1>
      <div className="row justify-content-center gap-2">
        {/* Benefícios */}
        <div className="col-5 mb-5">
          <h2 className={styles.sectionTitle}>Benefícios</h2>
          <ul className={styles.list}>
            {beneficios.map((beneficio, index) => (
              <li key={index} className={styles.listItem}>
               <span className="fw-bold">
                    {`${index + 1} `}
                </span>
                {`${beneficio}` }
              </li>
            ))}
          </ul>
        </div>

        {/* Desafios */}
        <div className="col-5">
          <h2 className={styles.sectionTitle}>Desafios</h2>
          <ul className={styles.list}>
            {desafios.map((desafio, index) => (
              <li key={index} className={styles.listItem}>
                <span className="fw-bold">
                    {`${index + 1} `}
                </span>
                {`${desafio}` }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
