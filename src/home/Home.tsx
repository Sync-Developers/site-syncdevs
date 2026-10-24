import { Contact } from "lucide-react";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <main
      id="home"
      className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#061225] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-10 -z-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:px-10 lg:py-12">
        {/* Left side */}
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Soluções em tecnologia
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
            Transformamos ideias em{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              soluções digitais reais.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            Desenvolvemos soluções digitais que conectam tecnologia,
            criatividade e estratégia para transformar desafios em
            oportunidades.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contato"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
            >
              Vamos conversar
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/projetos"
              className="inline-flex items-center justify-center rounded-full border border-slate-500/50 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Conheça nossos projetos
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-slate-700/80">
            <div className="pr-4">
              <p className="text-xl font-bold text-cyan-400 sm:text-2xl">
                Código
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                Bem construído
              </p>
            </div>

            <div className="px-4">
              <p className="text-xl font-bold text-cyan-400 sm:text-2xl">
                Ideias
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                Sem limites
              </p>
            </div>

            <div className="pl-4">
              <p className="text-xl font-bold text-cyan-400 sm:text-2xl">
                Pessoas
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                Em conexão
              </p>
            </div>
          </div>
        </div>

        {/* Right side: technology illustration */}
        <div className="relative mx-auto w-full max-w-xl py-8">
          <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-[90px]" />
          {/* Decorative rings */}
          <div className="absolute left-1/2 top-1/2 aspect-square w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />
          <div className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20" />

          {/* Main code window */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#09182D]/95 shadow-2xl shadow-blue-950/60">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <span className="text-xs tracking-wide text-slate-500">
                sync-project.tsx
              </span>

              <span className="text-xs text-cyan-400">{"</>"}</span>
            </div>

            <div className="space-y-4 p-6 font-mono text-xs sm:p-8 sm:text-sm">
              <p className="text-slate-500">
                {"// Transformando ideias em soluções"}
              </p>

              <p>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-300">sync</span>{" "}
                <span className="text-white">= {"{"}</span>
              </p>

              <div className="space-y-3 pl-5">
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

              <div className="mt-6 flex items-center gap-3 rounded-lg border border-cyan-400/15 bg-cyan-400/5 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-xl text-cyan-300">
                  {"</>"}
                </div>
                <div>
                  <p className="font-sans font-semibold text-white">
                    Ideias em desenvolvimento
                  </p>
                  <p className="mt-1 font-sans text-xs text-slate-400">
                    Construindo possibilidades, linha por linha.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -right-2 top-0 rounded-xl border border-blue-400/25 bg-[#0D1B32]/95 p-4 shadow-xl shadow-blue-950/40 sm:-right-5">
            <p className="text-xs text-slate-400">Nossa essência</p>
            <p className="mt-1 text-sm font-bold text-cyan-300">
              Inovação + Código
            </p>
          </div>

          <div className="absolute -bottom-1 -left-2 rounded-xl border border-violet-400/25 bg-[#0D1B32]/95 p-4 shadow-xl shadow-violet-950/40 sm:-left-5">
            <p className="text-xs text-slate-400">Nosso propósito</p>
            <p className="mt-1 text-sm font-bold text-violet-300">
              Soluções com propósito
            </p>
          </div>
        </div>
      </section>
      <Services />
      <About />
      <Portfolio />
      <ContactFooter/>
    </main>
  );
}