import styles from "./styles.module.scss";

export default function TiposEnergia() {
  const energias = [
    {
      nome: "Solar",
      descricao: "A energia solar utiliza a luz do sol para gerar eletricidade, sendo uma das fontes mais sustentáveis e amplamente utilizadas.",
      imagem: "https://img.freepik.com/fotos-gratis/mae-com-seu-filho-por-paineis-solares_1303-15545.jpg?t=st=1731879735~exp=1731883335~hmac=415a05f2c51040d723bb03a971393dfd75a2167c5d463905bdab01649a5e40ca&w=1380",
    },
    {
      nome: "Eólica",
      descricao: "Energia obtida através do vento, convertida em eletricidade por turbinas eólicas modernas.",
      imagem: "https://img.freepik.com/fotos-gratis/fas-de-vento_1160-382.jpg?t=st=1731879768~exp=1731883368~hmac=39c6770c1785caa1c2c5653e8b49d64fd419200e12953130c5629dd41097602a&w=1380",
    },
    {
      nome: "Hidrelétrica",
      descricao: "A força da água em movimento é usada para gerar energia em usinas hidrelétricas.",
      imagem: "https://img.freepik.com/fotos-gratis/imagem-da-represa-shasta-cercada-por-estradas-e-arvores-com-um-lago-e-montanhas_181624-13762.jpg?t=st=1731879837~exp=1731883437~hmac=c38079eb82e529e491d3a13f10667c7f06b9522d70ea2d7a32d60e1fe6cbbd14&w=1380",
    },
    {
      nome: "Geotérmica",
      descricao: "Aproveita o calor do interior da Terra para aquecimento e geração de energia elétrica.",
      imagem: "https://img.freepik.com/fotos-gratis/paisagem-da-islandia-com-belas-planicies_23-2149099971.jpg?t=st=1731879884~exp=1731883484~hmac=c97a9326a48edd798cd7c8496a223f9d4e9d813c885990b57bb441815d9a4130&w=1380",
    },
    {
      nome: "Biomassa",
      descricao: "Gera energia a partir de materiais orgânicos como resíduos agrícolas e florestais.",
      imagem: "https://img.freepik.com/fotos-gratis/vista-frontal-da-planta-crescendo-a-partir-de-pelotas_23-2148895418.jpg?t=st=1731879905~exp=1731883505~hmac=cb105246ed6a64978d3e2981dc15f5c723abd40c5437759a525522b21ca5bf33&w=1380",
    },
    {
      nome: "Hidrogênio Verde",
      descricao: "Produzido por eletrólise usando energia renovável, é uma alternativa limpa para combustíveis fósseis.",
      imagem: "https://portalhortolandia.com.br/wp-content/uploads/2024/09/H2V-780x470.jpg",
    },
  ];

  return (
    <div className={`${styles.container} container mt-5`}>
      <h1 className={`text-center mb-4 ${styles.title}`}>Tipos de Energia Limpa</h1>
      <div className="row">
        {energias.map((energia, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
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
