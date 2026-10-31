import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactFooter() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState('');
    const [enviando, setEnviando] = useState(false);

    const enviarMensagem = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) return;

        setEnviando(true);
        setStatus('');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                }
            );

            setStatus('Mensagem enviada com sucesso!');
            form.reset();

        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            setStatus(
                'Não foi possível enviar a mensagem. Tente novamente.'
            );
        } finally {
            setEnviando(false);
        }
    };

    return (
        <footer
            id="contato"
            className="relative overflow-hidden bg-[#061225] pt-20 pb-10 text-white"
        >
            {/* Luzes de fundo */}
            <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Bloco Superior */}
                <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-2 lg:gap-16">

                    {/* Informações de contato */}
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                            Contato
                        </span>

                        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Vamos conversar <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                sobre o seu projeto?
                            </span>
                        </h2>

                        <p className="mt-4 text-base leading-relaxed text-slate-300">
                            Estamos prontos para transformar as suas ideias em
                            soluções digitais de alto impacto. Envie-nos uma
                            mensagem e retornaremos em breve.
                        </p>

                        <div className="mt-8 space-y-5">

                            {/* E-mail */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                                    <Mail className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-xs text-slate-400">
                                        E-mail
                                    </p>
                                    <p className="text-sm font-semibold text-white">
                                        developerssync@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Localização */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                                    <MapPin className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-xs text-slate-400">
                                        Localização
                                    </p>
                                    <p className="text-sm font-semibold text-white">
                                        São Paulo e Rio de Janeiro / Brasil - Remoto
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* GitHub e LinkedIn */}
                        <div className="mt-10 flex flex-wrap items-center gap-3">

                            <a
                                href="https://github.com/Sync-Developers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                                title="GitHub da Sync Developers"
                            >
                                <FaGithub className="h-4 w-4 text-cyan-400" />
                                Sync Developers
                            </a>

                            <a
                                href="https://www.linkedin.com/in/marypraxedes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                            >
                                <FaLinkedin className="h-4 w-4 text-cyan-400" />
                                Maryane Praxedes
                            </a>

                            <a
                                href="https://www.linkedin.com/in/joaovitordinizalves/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                            >
                                <FaLinkedin className="h-4 w-4 text-cyan-400" />
                                João Vitor Diniz
                            </a>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="rounded-2xl border border-white/10 bg-[#0A182E] p-6 shadow-2xl sm:p-8">

                        <form
                            ref={formRef}
                            onSubmit={enviarMensagem}
                            className="space-y-4"
                        >

                            {/* Nome */}
                            <div>
                                <label
                                    htmlFor="user_name"
                                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                                >
                                    Nome
                                </label>

                                <input
                                    id="user_name"
                                    type="text"
                                    name="user_name"
                                    placeholder="Seu nome completo"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                                />
                            </div>

                            {/* E-mail */}
                            <div>
                                <label
                                    htmlFor="user_email"
                                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                                >
                                    E-mail
                                </label>

                                <input
                                    id="user_email"
                                    type="email"
                                    name="user_email"
                                    placeholder="seu.email@empresa.com"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                                />
                            </div>

                            {/* Mensagem */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                                >
                                    Mensagem
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Conte-nos um pouco sobre a sua ideia ou projeto..."
                                    required
                                    className="w-full resize-none rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                                />
                            </div>

                            {/* Botão */}
                            <button
                                type="submit"
                                disabled={enviando}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:scale-[1.01] hover:shadow-purple-500/25 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {enviando
                                    ? 'Enviando...'
                                    : 'Enviar mensagem'}

                                <Send className="h-4 w-4" />
                            </button>

                            {/* Mensagem de retorno */}
                            {status && (
                                <p
                                    role="status"
                                    aria-live="polite"
                                    className="text-center text-sm text-cyan-400"
                                >
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 sm:flex-row">

                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.svg"
                            alt="Sync Developers Logo"
                            className="h-6 w-auto object-contain"
                        />

                        <span className="font-bold text-white">
                            Sync Developers
                        </span>

                        <span className="hidden sm:inline">
                            — Conectando ideias, desenvolvendo soluções.
                        </span>
                    </div>

                    <p>
                        © {new Date().getFullYear()} Sync Developers.
                        Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
