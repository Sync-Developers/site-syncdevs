import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from "./home/Home";
import Contato from './contato/Contato';
import Orcamento from './orcamento/Orcamento';
import Sobre from './pages/sobre/Sobre'

function App() {
  return (
    <BrowserRouter>
      <div>
          <Navbar />
          <main className="pt-25">
              <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
       </main>
      </div>
    </BrowserRouter>
  );
}

export default App;