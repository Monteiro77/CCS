import { Outlet } from 'react-router-dom';
import Header from './assets/components/Header/Index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
    </>
  );
}

export default App;
