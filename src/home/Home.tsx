import { Link } from "react-router-dom";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <div
      id="home"
      className="relative isolate min-h-screen overflow-x-hidden bg-[#061225] text-white"
    >
      {/* Background glow global */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-600/20 blur-[120px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 top-10 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-violet-600/20 blur-[120px] sm:blur-[140px]" />

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 sm:gap-16 px-4 sm:px-6 lg:px-10 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:py-12">
        {/* Left side */}
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-3">
            <span className="h-px w-6 sm:w-8 bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Sync Developers
            </span>
            <span className="h-px w-6 sm:w-8 bg-cyan-400 lg:hidden" />
          </div>

          <h1 className="max-w-2xl mx-auto lg:mx-0 text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.15] sm:leading-[1.08] tracking-tight">
            Transformamos ideias em{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              soluções digitais reais.
            </span>
          </h1>

          <p className="mt-5 sm:mt-7 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
            Desenvolvemos soluções digitais que conectam tecnologia,
            criatividade e estratégia para transformar desafios em
            oportunidades.
          </p>

          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <Link
              to="/contato"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/25 active:scale-98"
            >
              Vamos conversar
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="#projetos"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-500/50 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 active:scale-98"
            >
              Conheça nossos projetos
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-10 sm:mt-12 grid max-w-lg mx-auto lg:mx-0 grid-cols-3 divide-x divide-slate-700/80">
            <div className="pr-2 sm:pr-4 text-center lg:text-left">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">
                Código
              </p>
              <p className="mt-1 text-[11px] sm:text-xs md:text-sm leading-tight text-slate-400">
                Bem construído
              </p>
            </div>

            <div className="px-2 sm:px-4 text-center lg:text-left">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">
                Ideias
              </p>
              <p className="mt-1 text-[11px] sm:text-xs md:text-sm leading-tight text-slate-400">
                Sem limites
              </p>
            </div>

            <div className="pl-2 sm:pl-4 text-center lg:text-left">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">
                Pessoas
              </p>
              <p className="mt-1 text-[11px] sm:text-xs md:text-sm leading-tight text-slate-400">
                Em conexão
              </p>
            </div>
          </div>
        </div>

        {/* Right side: technology illustration */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-xl py-6 sm:py-8">
          <div className="absolute inset-4 sm:inset-10 rounded-full bg-blue-600/20 blur-[80px] sm:blur-[90px]" />
          
          {/* Decorative rings */}
          <div className="absolute left-1/2 top-1/2 aspect-square w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20 pointer-events-none" />

          {/* Main code window */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#09182D]/95 shadow-2xl shadow-blue-950/60">
            <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-5 py-3 sm:py-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <span className="text-[11px] sm:text-xs tracking-wide text-slate-400 font-mono">
                sync-project.tsx
              </span>

              <span className="text-xs text-cyan-400 font-mono">{"</>"}</span>
            </div>

            <div className="space-y-3 sm:space-y-4 p-5 sm:p-7 font-mono text-xs sm:text-sm overflow-x-auto">
              <p className="text-slate-500">
                {"// Transformando ideias em soluções"}
              </p>

              <p>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-300">sync</span>{" "}
                <span className="text-white">= {"{"}</span>
              </p>

              <div className="space-y-2 sm:space-y-3 pl-4 sm:pl-5">
                <p>
                  <span className="text-blue-300">criatividade</span>
                  <span className="text-white">: </span>
                  <span className="text-emerald-300">"infinita"</span>,
                </p>
                <p>
                  <span className="text-blue-300">tecnologia</span>
                  <span className="text-white">: </span>
                  <span className="text-emerald-300">"inovadora"</span>,
                </p>
                <p>
                  <span className="text-blue-300">colaboração</span>
                  <span className="text-white">: </span>
                  <span className="text-emerald-300">true</span>,
                </p>
                <p>
                  <span className="text-blue-300">resultado</span>
                  <span className="text-white">: </span>
                  <span className="text-emerald-300">"impacto real"</span>
                </p>
              </div>

              <p className="text-white">{"};"}</p>

              <div className="mt-4 sm:mt-6 flex items-center gap-3 rounded-lg border border-cyan-400/15 bg-cyan-400/5 p-3 sm:p-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-lg sm:text-xl text-cyan-300">
                  {"</>"}
                </div>
                <div>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-white">
                    Ideias em desenvolvimento
                  </p>
                  <p className="mt-0.5 font-sans text-[11px] sm:text-xs text-slate-400">
                    Construindo possibilidades, linha por linha.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards - responsively placed */}
          <div className="hidden sm:block absolute -right-3 top-2 sm:-right-5 sm:top-4 rounded-xl border border-blue-400/25 bg-[#0D1B32]/95 p-3 sm:p-4 shadow-xl shadow-blue-950/40 backdrop-blur-md">
            <p className="text-[10px] sm:text-xs text-slate-400">Nossa essência</p>
            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-cyan-300">
              Inovação + Código
            </p>
          </div>

          <div className="hidden sm:block absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-5 rounded-xl border border-violet-400/25 bg-[#0D1B32]/95 p-3 sm:p-4 shadow-xl shadow-violet-950/40 backdrop-blur-md">
            <p className="text-[10px] sm:text-xs text-slate-400">Nosso propósito</p>
            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-violet-300">
              Soluções com propósito
            </p>
          </div>
        </div>
      </section>

      {/* Seções independentes (Fora da Grid do Hero) */}
      <Services />
      <About />
      <Portfolio />
      <ContactFooter />
    </div>
  );
}
