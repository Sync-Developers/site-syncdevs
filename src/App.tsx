import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from "./home/Home";
import Contato from './contato/Contato';
import Orcamento from './orcamento/Orcamento';
import Sobre from './pages/sobre/Sobre';
import Projetos from './pages/projetos/Projetos';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#061225] text-white selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/orcamento" element={<Orcamento />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;