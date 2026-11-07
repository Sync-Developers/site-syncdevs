import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import Footer from "../../components/Footer";

function Sobre() {
    return (
        <div className="relative w-full min-h-screen bg-[#061225] text-white overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-72 h-72 sm:w-125 sm:h-125 bg-cyan-500 opacity-10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-150 sm:h-150 bg-purple-500 opacity-10 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
                    <div>
                        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-3">
                            Nossa Essência
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                            Sincronizamos código de alta performance com a estratégia do seu negócio.
                        </h1>
                        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                            <p>
                                Na <strong className="text-cyan-400">Sync Developers</strong>, nós não apenas escrevemos linhas de código; nós construímos as fundações digitais de empresas que lideram o mercado.
                            </p>
                            <p>
                                Combinamos engenharia de software rigorosa com um design centrado na experiência do usuário para transformar desafios complexos em produtos digitais fluidos, seguros e escaláveis.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="bg-[#0A182E] border border-white/10 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xl font-mono text-xs sm:text-sm lg:text-base relative overflow-hidden">
                            <div className="flex items-center gap-2 mb-6 sm:mb-8 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f]"></div>
                                <span className="text-slate-400 text-xs ml-3 font-mono">sync-process.sh</span>
                            </div>

                            <div className="space-y-5 sm:space-y-6 overflow-x-auto">
                                <div>
                                    <span className="text-purple-400 font-semibold">❯ sync init</span>
                                    <p className="text-slate-400 ml-4 sm:ml-6 mt-1 sm:mt-2 text-xs sm:text-sm">// 01. Imersão e alinhamento estratégico</p>
                                </div>

                                <div>
                                    <span className="text-blue-400 font-semibold">❯ sync architecture --blueprint</span>
                                    <p className="text-slate-400 ml-4 sm:ml-6 mt-1 sm:mt-2 text-xs sm:text-sm">// 02. Modelagem e design de alta performance</p>
                                </div>

                                <div>
                                    <span className="text-cyan-400 font-semibold">❯ sync build --prod --optimize</span>
                                    <p className="text-slate-400 ml-4 sm:ml-6 mt-1 sm:mt-2 text-xs sm:text-sm">// 03. Engenharia de software e testes rigorosos</p>
                                </div>

                                <div>
                                    <span className="text-[#27c93f] font-semibold">❯ sync deploy --success</span>
                                    <p className="text-white ml-4 sm:ml-6 mt-1 sm:mt-2 font-bold text-xs sm:text-sm">✓ Ecossistema digital sincronizado com o mercado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/5">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-3">
                        Nosso Time
                    </span>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        Conheça quem faz a <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Sync</span> acontecer
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch max-w-5xl mx-auto">
                    {/* João */}
                    <div className="flex flex-col items-center text-center bg-[#0A182E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden group hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-300">
                        <div className="absolute top-0 w-full h-1.5 bg-linear-to-r from-cyan-400 to-blue-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                            <img
                                src="https://ik.imagekit.io/dy033dhiwy/integrantes/Joao%20Vitor%20(6)%20(4).jpg"
                                alt="Foto de João Vitor Diniz Alves"
                                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-[#0A182E] shadow-[0_0_0_2px_#22d3ee]"
                            />
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">João Vitor Diniz Alves</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-semibold mb-6">
                            Desenvolvedor Full Stack Junior
                        </span>

                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8 max-w-sm">
                            Desenvolvedor Full Stack com foco em soluções web, APIs e sistemas personalizados. Trabalho para transformar necessidades de negócio em aplicações funcionais, eficientes e escaláveis, sempre priorizando qualidade, organização e uma boa experiência para o cliente.
                        </p>

                        <div className="flex gap-4 text-slate-400 mt-auto">
                            <a
                                href="https://github.com/JohnnieDiniz"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub de João Vitor"
                                className="p-3 rounded-full bg-white/5 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 active:scale-95"
                            >
                                <GithubLogoIcon size={22} weight="fill" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/joaovitordinizalves/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn de João Vitor"
                                className="p-3 rounded-full bg-white/5 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 active:scale-95"
                            >
                                <LinkedinLogoIcon size={22} weight="fill" />
                            </a>
                        </div>
                    </div>

                    {/* Maryane */}
                    <div className="flex flex-col items-center text-center bg-[#0A182E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden group hover:-translate-y-2 hover:border-purple-400/50 transition-all duration-300">
                        <div className="absolute top-0 w-full h-1.5 bg-linear-to-r from-purple-400 to-fuchsia-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-purple-400 blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                            <img
                                src="https://ik.imagekit.io/dy033dhiwy/integrantes/Maryanne.webp"
                                alt="Foto da Maryane Praxedes"
                                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-[#0A182E] shadow-[0_0_0_2px_#c084fc]"
                            />
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Maryane Praxedes</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-400/10 text-purple-400 text-xs font-semibold mb-6">
                            Desenvolvedora Full Stack Junior
                        </span>

                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8 max-w-sm">
                            Especialista em desenvolvimento Backend e DevSecOps, com foco na criação de sistemas, APIs e soluções digitais seguras. Atuo integrando desenvolvimento e práticas de segurança ao ciclo de vida do software, priorizando qualidade, eficiência e confiabilidade em cada projeto.
                        </p>

                        <div className="flex gap-4 text-slate-400 mt-auto">
                            <a
                                href="https://github.com/marypraxedes"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub de Maryane"
                                className="p-3 rounded-full bg-white/5 hover:bg-purple-400/20 hover:text-purple-400 transition-all duration-300 active:scale-95"
                            >
                                <GithubLogoIcon size={22} weight="fill" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/marypraxedes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn de Maryane"
                                className="p-3 rounded-full bg-white/5 hover:bg-purple-400/20 hover:text-purple-400 transition-all duration-300 active:scale-95"
                            >
                                <LinkedinLogoIcon size={22} weight="fill" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Sobre;
