import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from "./home/Home";
import Contato from './contato/Contato';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#061225] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;