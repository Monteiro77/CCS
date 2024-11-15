import React from 'react';
import styles from './styles.module.scss';

// Importando ícones de exemplo (pode adaptar conforme necessário)
import { FaChartLine, FaCloudUploadAlt, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import InfoCard from '../../components/InfoCard';

export default function Dashboard() {
  return (
    <>

      {/* Conteúdo principal do Dashboard */}
      <main className="container h-full p-2">
        <h1 className="text-center mb-5">Dashboard Interativo</h1>

        {/* Seção de gráfico central */}
        <div className={styles.chartSection}>
          <div className={styles.chartContainer}>
            {/* Placeholder para gráfico */}
            <div className={styles.chartPlaceholder}>
              Gráfico Principal Aqui
            </div>
          </div>
        </div>

        {/* Cards de informações */}
        <div className="row mt-5">
          <div className="col-md-3">
            <InfoCard 
              icon={FaChartLine} 
              title="Níveis de CO₂ capturados" 
              description="Monitore os níveis atuais de captura de CO₂." 
            />
          </div>
          <div className="col-md-3">
            <InfoCard 
              icon={FaCloudUploadAlt} 
              title="Eficiência do sistema" 
              description="Acompanhe a eficiência da captura." 
            />
          </div>
          <div className="col-md-3">
            <InfoCard 
              icon={FaDatabase} 
              title="Carbono Armazenado" 
              description="Quantidade total de carbono armazenado." 
            />
          </div>
          <div className="col-md-3">
            <InfoCard 
              icon={FaShieldAlt} 
              title="Condições de Segurança" 
              description="Segurança nas áreas de armazenamento monitorada." 
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer />
      </>
  );
}
