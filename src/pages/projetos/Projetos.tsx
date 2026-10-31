import { Link } from "react-router-dom";

interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    tecnologias: string[];
    linkSite: string; 
    linkGithub?: string;
}

const projetosMock: Projeto[] = [
    {
        id: 1,
        titulo: "Segurae",
        descricao: "Sistema completo para gestão de seguros automotivos com painel administrativo, integração de banco de dados e interface fluida.",
        tecnologias: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
        linkSite: "https://segurae-front.vercel.app/", 
    },
    {
        id: 2,
        titulo: "CRM",
        descricao: "Sistema de Gestão de Relacionamento com Clientes (CRM) desenvolvido para centralizar informações de clientes, organizar oportunidades de negócio e otimizar o processo comercial de uma empresa.",
        tecnologias: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
        linkSite: "https://relaciona-front.vercel.app/", 
    }
];

function Projetos() {
    return (
        <div className="min-h-screen bg-[#0a0f1a] pt-32 pb-20 px-6">
            <div className="max-w-262.5-auto">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-[#5932ea] text-sm font-bold tracking-wider uppercase mb-3">
                        Nosso Portfólio
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Soluções que geram <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5932ea] to-[#00b4d8]">impacto real.</span>
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Conheça as plataformas e sistemas desenvolvidos pela Sync Developers. 
                        Unimos engenharia robusta e design premium para entregar resultados de excelência.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projetosMock.map((projeto) => (
                        <article 
                            key={projeto.id} 
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(89,50,234,0.15)] flex flex-col group focus-within:ring-2 focus-within:ring-[#5932ea] focus-within:ring-offset-2 focus-within:ring-offset-[#0a0f1a]"
                        >
                            <div className="relative h-56 bg-[#050505] overflow-hidden border-b border-white/10">
                                <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-800/80 backdrop-blur-md flex items-center px-3 gap-1.5 z-20 border-b border-white/5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                </div>

                                <div className="absolute top-6 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] z-10 pointer-events-none transition-transform duration-700 group-hover:scale-[0.26]">
                                    <iframe
                                        src={projeto.linkSite}
                                        title={`Prévia do projeto ${projeto.titulo}`}
                                        className="w-full h-full border-none bg-white"
                                        loading="lazy"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="absolute inset-0 z-30 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                            </div>
                            
                            <div className="p-6 flex flex-col grow relative z-40 bg-linear-to-b from-white/2 to-transparent">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5932ea] transition-colors">
                                    {projeto.titulo}
                                </h3>
                                <p className="text-neutral-400 text-sm mb-6 grow">
                                    {projeto.descricao}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {projeto.tecnologias.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-neutral-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                    <Link 
                                        to={projeto.linkSite}
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        className="text-sm font-medium text-white hover:text-[#5932ea] transition-colors flex items-center gap-2 focus-visible:outline-none"
                                    >
                                        Visitar aplicação
                                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projetos;