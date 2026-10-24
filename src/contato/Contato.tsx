import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    servico: 'Desenvolvimento Web',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);

    setTimeout(() => {
      setCarregando(false);
      setEnviado(true);
      setFormData({ nome: '', email: '', servico: 'Desenvolvimento Web', mensagem: '' });
    }, 1200);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#061225] text-white">
      {/* 
        pt-32 para descolar o texto da Navbar no topo
        pb-16 para dar margem entre o conteúdo e o Footer
        flex-1 para garantir que o rodapé vá para o fundo em telas grandes
      */}
      <main className="relative isolate flex-1 px-6 pt-32 pb-16 lg:px-10">
        {/* Glow Effect */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

        <div className="mx-auto max-w-7xl">
          {/* Header da Página */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Fale Conosco
            </span>

            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Vamos transformar a sua ideia em{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                uma solução real?
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Tem um projeto em mente, precisa de um orçamento ou quer tirar dúvidas?
              Preencha o formulário abaixo ou entre em contacto diretamente connosco.
            </p>
          </div>

          {/* Cards de Conteúdo com Margem Inferior (mb-16) para afastar do Footer */}
          <div className="mt-12 mb-16 grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
            
            {/* Lado Esquerdo: Informações */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#0A182E] p-6 shadow-xl sm:p-8">
                <h3 className="font-heading text-xl font-bold text-white mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400">E-mail Comercial</p>
                      <p className="mt-1 text-sm font-semibold text-white">developerssync@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400">Atendimento</p>
                      <p className="mt-1 text-sm font-semibold text-white">São Paulo e Rio de Janeiro / Brasil — 100% Remoto</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400">Tempo de Resposta</p>
                      <p className="mt-1 text-sm font-semibold text-white">Até 24 horas</p>
                    </div>
                  </div>
                </div>

                {/* Redes & Desenvolvedores */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    REDES & DESENVOLVEDORES
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://github.com/Sync-Developers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <svg className="h-4 w-4 fill-cyan-400" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Sync Developers
                    </a>

                    <a
                      href="https://www.linkedin.com/in/marypraxedes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <svg className="h-4 w-4 fill-cyan-400" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      Maryane Praxedes
                    </a>

                    <a
                      href="https://www.linkedin.com/in/joaovitordinizalves/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <svg className="h-4 w-4 fill-cyan-400" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      João Vitor Diniz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito: Formulário */}
            <div className="rounded-2xl border border-white/10 bg-[#0A182E] p-6 shadow-2xl sm:p-8 lg:col-span-7">
              {enviado ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Mensagem Enviada!</h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-md">
                    Obrigado por entrar em contato. Analisaremos a sua mensagem e responderemos o mais breve possível.
                  </p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="mt-6 rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading text-xl font-bold text-white">Envie uma mensagem</h3>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-300">Seu Nome *</label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: Peter Parker"
                        className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-300">Seu E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="peter@parker.com"
                        className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-300">Tipo de Serviço</label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    >
                      <option value="Desenvolvimento Web">Desenvolvimento Web (Sites / Landing Pages)</option>
                      <option value="Sistemas Personalizados">Sistemas Personalizados / Web Apps</option>
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="Outro">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-300">Sua Mensagem *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Descreva brevemente o seu projeto, prazos ou objetivos..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={carregando}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:scale-[1.01] hover:shadow-purple-500/25 active:scale-95 disabled:opacity-50"
                  >
                    {carregando ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      {/* Footer simples no final da página */}
      <Footer />
    </div>
  );
}