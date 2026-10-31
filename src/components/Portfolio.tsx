import React from 'react';
import { ExternalLink, ShieldCheck, HeartHandshake } from 'lucide-react';

const projects = [
  {
    title: "Relaciona",
    category: "Plataforma CRM",
    description: "Controle total da sua operação comercial com gestão de oportunidades, métricas e BI.",
    url: "https://relaciona-front.vercel.app/",
    tag: "React / CRM",
    // Substitua pelo caminho da imagem no seu projeto (ex: '/assets/relaciona.jpg' ou import)
    image: "/relaciona-banner.png" 
  },
  {
    title: "Seguraê",
    category: "Seguros & Proteção Veicular",
    description: "Proteção veicular inteligente, 100% digital e sem burocracia para você e seu veículo.",
    url: "https://segurae-front.vercel.app/",
    tag: "React / Seguros",
    // Substitua pelo caminho da imagem no seu projeto
    image: "/segurae-banner.png" 
  },
];

export default function Portfolio() {
  return (
    <section id="projetos" className="bg-[#F5F8FC] py-20 text-[#0A1730] sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Header da Seção */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Casos de Sucesso
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Nossos trabalhos <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                em destaque
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Conheça os projetos reais desenvolvidos pela Sync Developers, combinando design intuitivo e tecnologia de alta performance.
          </p>
        </div>

        {/* Grid dos Projetos */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
            >
              <div>
                {/* Banner / Imagem do Projeto */}
                <div className="relative mb-6 h-52 w-full overflow-hidden rounded-xl border border-slate-200/60 bg-slate-100 sm:h-60">
                  <img
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {project.tag}
                  </span>
                </div>

                {/* Informações do Projeto */}
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-2 font-heading text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </div>

              {/* Botão de Acesso ao Site */}
              <div className="mt-8 border-t border-slate-100 pt-5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-200 hover:gap-3 hover:text-blue-700"
                >
                  Acessar projeto online
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Banner Inferior */}
        <div className="mt-12 grid grid-cols-1 gap-6 rounded-2xl bg-[#0B0F19] p-8 text-white shadow-xl sm:grid-cols-3 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-white">Código Limpo</h4>
              <p className="mt-1 text-xs text-slate-400">Arquitetura moderna e fácil manutenção.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-white">Atendimento Próximo</h4>
              <p className="mt-1 text-xs text-slate-400">Acompanhamento direto durante todo o projeto.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400">
              <ExternalLink className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-white">Entrega Ágil</h4>
              <p className="mt-1 text-xs text-slate-400">Foco na solução rápida sem perder qualidade.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}