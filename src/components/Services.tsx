
import { Code2, Cloud, Cpu, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações web modernas, responsivas e personalizadas para conectar seu negócio ao mundo digital.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Automação, implantação e infraestrutura para tornar a entrega de software mais eficiente.",
  },
  {
    icon: Cpu,
    title: "Sistemas Personalizados",
    description:
      "Soluções desenvolvidas de acordo com os processos e desafios específicos de cada negócio.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="w-full bg-[#F5F8FC] px-4 py-16 text-[#0A1730] sm:px-8 sm:py-24"
    >
      {/* Container principal com largura máxima e centralizado */}
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Header da Seção */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              O que fazemos
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Soluções completas
              <br className="hidden sm:inline" /> para o seu negócio
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Oferecemos soluções digitais para transformar desafios em oportunidades e ideias em resultados.
            </p>
          </div>

          <a
            href="/contato"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Ver todos os serviços
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Grid dos Cards de Serviços */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.title}
                className="group flex min-w-0 flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 wrap-break-word">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 wrap-break-word">
                    {service.description}
                  </p>
                </div>

                <a
                  href="/contato"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all duration-200 group-hover:gap-2 group-hover:text-blue-700"
                >
                  Saiba mais
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0B0F19] p-6 text-white shadow-xl sm:p-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              Tem um projeto em mente?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Vamos conversar e encontrar a melhor solução para o seu negócio.
            </p>
          </div>

          <a
            href="/contato"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
          >
            Solicitar orçamento
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}