import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    tecnologias: string[];
    linkSite: string; 
    linkGithub?: string;
    categoria: string;
}

const projetosMock: Projeto[] = [
    {
        id: 1,
        titulo: "Segurae",
        descricao: "Sistema completo para gestão de seguros automotivos com painel administrativo, integração de banco de dados e interface fluida.",
        tecnologias: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
        linkSite: "https://segurae-front.vercel.app/", 
        categoria: "Sistemas Web"
    },
    {
        id: 2,
        titulo: "Relaciona",
        descricao: "Sistema de Gestão de Relacionamento com Clientes (CRM) desenvolvido para centralizar informações de clientes, organizar oportunidades de negócio e otimizar o processo comercial de uma empresa.",
        tecnologias: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
        linkSite: "https://relaciona-front.vercel.app/", 
        categoria: "Sistemas Web"
    }
];

const categorias = ["Todos", "Sistemas Web", "Landing Pages", "APIs"];

function Projetos() {
    const [filtroAtivo, setFiltroAtivo] = useState("Todos");

    const projetosFiltrados = projetosMock.filter(projeto => 
        filtroAtivo === "Todos" ? true : projeto.categoria === filtroAtivo
    );

    return (
        <div className="relative flex flex-col min-h-screen bg-[#061225] overflow-hidden">
            
            <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-150 h-150 bg-purple-500 opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

            <main className="relative z-10 grow w-full max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pb-32">
                
                <div className="text-center mb-10 animate-fade-in-up">
                    <h2 className="text-cyan-400 text-sm font-bold tracking-wider uppercase mb-3">
                        Nosso Portfólio
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Soluções que geram <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">impacto real.</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Conheça as plataformas e sistemas desenvolvidos pela Sync Developers. 
                        Unimos engenharia robusta e design premium para entregar resultados de excelência.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categorias.map(categoria => (
                        <button
                            key={categoria}
                            onClick={() => setFiltroAtivo(categoria)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                filtroAtivo === categoria
                                    ? "bg-cyan-400 text-[#061225] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                                    : "bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400"
                            }`}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projetosFiltrados.map((projeto) => (
                        <article 
                            key={projeto.id} 
                            className="bg-[#0A182E] border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] hover:border-cyan-400/50 flex flex-col group focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 focus-within:ring-offset-[#061225]"
                        >
                            <div className="relative h-56 bg-[#061225] overflow-hidden border-b border-white/10">
                                <div className="absolute top-0 left-0 right-0 h-6 bg-[#0A182E]/80 backdrop-blur-md flex items-center px-3 gap-1.5 z-20 border-b border-white/5">
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
                            
                            <div className="p-8 flex flex-col grow relative z-40 bg-gradient-to-b from-white/5 to-transparent">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {projeto.titulo}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 grow">
                                    {projeto.descricao}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {projeto.tecnologias.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs font-semibold text-cyan-400"
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
                                        className="text-sm font-bold text-white hover:text-cyan-400 transition-colors flex items-center gap-2 focus-visible:outline-none"
                                    >
                                        Visitar aplicação
                                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-32 relative rounded-3xl bg-gradient-to-r from-[#0A182E] to-[#061225] border border-white/10 p-10 md:p-16 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full"></div>
                    <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Pronto para o próximo nível?
                    </h2>
                    <p className="relative z-10 text-slate-400 max-w-2xl mx-auto mb-8">
                        Transforme a estratégia do seu negócio em código de alta performance. Nossa equipe está pronta para desenhar a sua próxima solução digital.
                    </p>
                    <Link 
                        to="/contato" 
                        className="relative z-10 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
                    >
                        Iniciar Projeto Agora
                    </Link>
                </div>

            </main>

            <Footer />
        </div>
    );
}

export default Projetos;