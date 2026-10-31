import { GithubLogoIcon, LinkedinLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";

function Sobre() {
    return (
        <div className="relative w-full min-h-screen bg-[#03060D] text-white overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-125 h-125 bg-[#0BD1F9] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-150 h-150 bg-[#8B5CFF] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <span className="text-[#0BD1F9] font-bold text-xs uppercase tracking-widest block mb-3">
                            Nossa Essência
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-linear-to-r from-[#0BD1F9] via-[#38B2F6] to-[#8B5CFF] bg-clip-text text-transparent leading-tight">
                            Sincronizamos código de alta performance com a estratégia do seu negócio.
                        </h1>
                        <div className="space-y-4 text-[#64748B] text-sm lg:text-base leading-relaxed">
                            <p>
                                Na <strong className="text-[#00aaff]">Sync Developers</strong>, nós não apenas escrevemos linhas de código; nós construímos as fundações digitais de empresas que lideram o mercado.
                            </p>
                            <p>
                                Combinamos engenharia de software rigorosa com um design centrado na experiência do usuário para transformar desafios complexos em produtos digitais fluidos, seguros e escaláveis.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl font-mono text-sm lg:text-base relative overflow-hidden">
                            <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                                <span className="text-[#64748B] text-xs ml-3">sync-process.sh</span>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <span className="text-[#8B5CFF]">❯ sync init</span>
                                    <p className="text-[#64748B] ml-6 mt-2">// 01. Imersão e alinhamento estratégico</p>
                                </div>

                                <div>
                                    <span className="text-[#38B2F6]">❯ sync architecture --blueprint</span>
                                    <p className="text-[#64748B] ml-6 mt-2">// 02. Modelagem e design de alta performance</p>
                                </div>

                                <div>
                                    <span className="text-[#0BD1F9]">❯ sync build --prod --optimize</span>
                                    <p className="text-[#64748B] ml-6 mt-2">// 03. Engenharia de software e testes rigorosos</p>
                                </div>

                                <div>
                                    <span className="text-[#27c93f]">❯ sync deploy --success</span>
                                    <p className="text-[#F6FAFC] ml-6 mt-2 font-bold">✓ Ecossistema digital sincronizado com o mercado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 py-24 border-t border-white/5">
                <div className="text-center mb-16">
                    <span className="text-[#0BD1F9] font-bold text-xs uppercase tracking-widest block mb-3">
                        Nosso Time
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
                        Conheça quem faz a <span className="bg-linear-to-r from-[#0BD1F9] to-[#8B5CFF] bg-clip-text text-transparent">Sync</span> acontecer
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">

                    <div className="flex flex-col items-center text-center bg-[#0B1221] border border-[#1E293B] rounded-3xl p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-2 hover:border-[#0BD1F9]/50 transition-all duration-300">
                        <div className="absolute top-0 w-full h-1.5 bg-linear-to-r from-[#0BD1F9] to-[#38B2F6] opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-[#0BD1F9] blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                            <img
                                src="https://ik.imagekit.io/dy033dhiwy/integrantes/Joao%20Vitor%20(6)%20(4).jpg"
                                alt="Foto de João Vitor Diniz Alves"
                                className="relative w-36 h-36 rounded-full object-cover border-4 border-[#0B1221] shadow-[0_0_0_2px_#0BD1F9]"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">João Vitor Diniz Alves</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0BD1F9]/10 text-[#0BD1F9] text-xs font-semibold mb-6">
                            Desenvolvedor Full Stack Junior
                        </span>

                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 max-w-sm">
                            Desenvolvedor Full Stack com foco em soluções web, APIs e sistemas personalizados. Trabalho para transformar necessidades de negócio em aplicações funcionais, eficientes e escaláveis, sempre priorizando qualidade, organização e uma boa experiência para o cliente.
                        </p>

                        <div className="flex gap-4 text-[#64748B] mt-auto">
                            <a href="https://github.com/JohnnieDiniz" className="p-2.5 rounded-full bg-white/5 hover:bg-[#0BD1F9]/20 hover:text-[#0BD1F9] transition-all duration-300">
                                <GithubLogoIcon size={22} weight="fill" />
                            </a>
                            <a href="https://www.linkedin.com/in/joaovitordinizalves/" className="p-2.5 rounded-full bg-white/5 hover:bg-[#0BD1F9]/20 hover:text-[#0BD1F9] transition-all duration-300">
                                <LinkedinLogoIcon size={22} weight="fill" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center bg-[#0B1221] border border-[#1E293B] rounded-3xl p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-2 hover:border-[#8B5CFF]/50 transition-all duration-300">
                        <div className="absolute top-0 w-full h-1.5 bg-linear-to-r from-[#8B5CFF] to-[#b08df8] opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-[#8B5CFF] blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                            <img
                                src="https://ik.imagekit.io/dy033dhiwy/integrantes/Maryanne.webp"
                                alt="Foto da Maryane Praxedes"
                                className="relative w-36 h-36 rounded-full object-cover border-4 border-[#0B1221] shadow-[0_0_0_2px_#8B5CFF]"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Maryane Praxedes</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#8B5CFF]/10 text-[#8B5CFF] text-xs font-semibold mb-6">
                            Desenvolvedora Full Stack Junior
                        </span>

                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 max-w-sm">
                            Especialista em desenvolvimento Backend e DevSecOps, com foco na criação de sistemas, APIs e soluções digitais seguras. Atuo integrando desenvolvimento e práticas de segurança ao ciclo de vida do software, priorizando qualidade, eficiência e confiabilidade em cada projeto.
                        </p>

                        <div className="flex gap-4 text-[#64748B] mt-auto">
                            <a href="https://github.com/marypraxedes" className="p-2.5 rounded-full bg-white/5 hover:bg-[#8B5CFF]/20 hover:text-[#8B5CFF] transition-all duration-300">
                                <GithubLogoIcon size={22} weight="fill" />
                            </a>
                            <a href="https://www.linkedin.com/in/marypraxedes/" className="p-2.5 rounded-full bg-white/5 hover:bg-[#8B5CFF]/20 hover:text-[#8B5CFF] transition-all duration-300">
                                <LinkedinLogoIcon size={22} weight="fill" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Sobre;