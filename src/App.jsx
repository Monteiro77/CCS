import { Outlet } from 'react-router-dom';
import Header from './assets/components/Header/Index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header /> {/* Header fixado em todas as páginas */}
      <main>
        <Outlet /> {/* Renderiza o conteúdo da rota ativa */}
      </main>
    </>
  );
}

export default App;
