import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './styles.module.scss';
import { FaChartLine, FaCloudUploadAlt, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import InfoCard from '../../components/InfoCard';

// Registrando os componentes do Chart.js necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Dados de exemplo para o gráfico de emissões de CO₂
  const data = {
    labels: ['América do Norte', 'América do Sul', 'Europa', 'África', 'Ásia', 'Oceania'],
    datasets: [
      {
        label: 'Emissões de CO₂ (milhões de toneladas)',
        data: [5000, 3000, 4500, 2500, 8000, 2000],  // Emissões por região
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Emissões Globais de CO₂ por Região',
      },
    },
  };

  return (
    <>
      {/* Conteúdo principal do Dashboard */}
      <main className="container h-full p-2">
        <h1 className="text-center mb-5">Dashboard Interativo</h1>

        {/* Seção de gráfico central */}
        <div className={styles.chartSection}>
          <div className={styles.chartContainer}>
            {/* Gráfico de Barras de Emissões de CO₂ */}
            <Bar data={data} options={options} />
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

