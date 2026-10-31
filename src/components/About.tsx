import React from 'react';
import { Target, Eye, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#061225] py-20 text-white sm:py-28">
      {/* Luzes de fundo de cor (Glow Effect) */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-80 w-80 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Bloco Principal: Imagem + História */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Lado Esquerdo: Maquete do Notebook / Imagem */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Moldura / Glow atrás da imagem */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-xl opacity-70" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A182E] shadow-2xl">
              {/* Barra superior do mockup */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#071223] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">sync-developers.br</span>
              </div>

              {/* Conteúdo Visual do Mockup */}
              <div className="relative p-6 sm:p-8">
                <div className="flex flex-col items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-b from-blue-950/40 to-[#0B1B33] p-8 text-center">
                  {/* Símbolo Sync */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 text-3xl font-black text-white shadow-lg shadow-blue-500/30">
                    S
                  </div>
                  
                  <h4 className="font-heading text-xl font-bold text-white">
                    Sync Developers
                  </h4>
                  <p className="mt-2 text-xs text-slate-400">
                    Conectando ideias, desenvolvendo soluções.
                  </p>

                  <div className="mt-6 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Prontos para novos desafios
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Texto Institucional */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Sobre a Sync Developers
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Mais que código, <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                parceria para crescer
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-300">
              A Sync Developers nasceu da paixão por tecnologia e do desejo de criar soluções que realmente fazem a diferença. Acreditamos que cada projeto é único. Por isso, trabalhamos lado a lado com os nossos clientes para entender as suas necessidades e entregar resultados que geram valor.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Combinamos design moderno, arquitetura de software sólida e metodologias ágeis para transformar desafios complexos em produtos digitais intuitivos e de alta performance.
            </p>

            <div className="mt-8">
              <a
                href="/sobre"
                className="group inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Conheça a nossa história
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bloco Inferior: Missão, Visão e Valores (Cards) */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Missão */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1A30]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[#0E213D]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-slate-950">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">
              Missão
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Entregar soluções digitais de alto impacto que impulsionem negócios, combinando tecnologia moderna e foco nas pessoas.
            </p>
          </div>

          {/* Visão */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1A30]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#0E213D]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">
              Visão
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Ser referência no desenvolvimento de software, reconhecidos pela qualidade, inovação e compromisso real com os resultados.
            </p>
          </div>

          {/* Valores */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1A30]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-[#0E213D]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">
              Valores
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Transparência, inovação constante, trabalho em equipe e excelência em cada linha de código que escrevemos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}