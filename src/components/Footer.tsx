import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#061225] py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-xs text-slate-400 sm:flex-row lg:px-10">
        
        {/* Lado Esquerdo: Logo + Nome + Slogan Menor */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.svg" 
            alt="Sync Developers Logo" 
            className="h-6 w-auto object-contain" 
          />
          <span className="font-bold text-white text-sm">Sync Developers</span>
          <span className="hidden sm:inline text-[11px] text-slate-500">— Conectando ideias, desenvolvendo soluções.</span>
        </div>

        {/* Links Rápidos com Texto Discreto */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <Link to="/" className="transition hover:text-cyan-400">Home</Link>
          <Link to="/sobre" className="transition hover:text-cyan-400">Sobre</Link>
          <Link to="/projetos" className="transition hover:text-cyan-400">Projetos</Link>
          <Link to="/contato" className="transition hover:text-cyan-400">Contato</Link>
        </div>

        {/* Lado Direito: Direitos Autorais Menor */}
        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} Sync Developers. Todos os direitos reservados.
        </p>
        
      </div>
    </footer>
  );
}