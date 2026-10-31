
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Code2,
  Cloud,
  Cpu,
  Layout,
} from 'lucide-react';

import Footer from '../components/Footer';

const tiposProjeto = [
  {
    id: 'web',
    nome: 'Desenvolvimento Web',
    desc: 'Sites, Landing Pages e Portais',
    icon: Layout,
  },
  {
    id: 'sistema',
    nome: 'Sistema Personalizado',
    desc: 'Plataformas Web, CRMs e ERPs',
    icon: Cpu,
  },
  {
    id: 'cloud',
    nome: 'Cloud & DevOps',
    desc: 'Infraestrutura, Deploy e Automação',
    icon: Cloud,
  },
  {
    id: 'outro',
    nome: 'Outro / Consultoria',
    desc: 'Ajustes, Refatoração ou Consultoria',
    icon: Code2,
  },
];

const faixasOrcamento = [
  'Até R$ 3.000',
  'R$ 3.000 - R$ 7.000',
  'R$ 7.000 - R$ 15.000',
  'Acima de R$ 15.000',
  'Ainda não sei',
];

export default function SolicitarOrcamento() {
  const [projetoSelecionado, setProjetoSelecionado] = useState('web');

  const [orcamentoEstimado, setOrcamentoEstimado] = useState('Ainda não sei');

  const [carregando, setCarregando] = useState(false);

  const [enviado, setEnviado] = useState(false);

  const [erro, setErro] = useState('');

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    descricao: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCarregando(true);
    setErro('');

    const projeto =
      tiposProjeto.find((item) => item.id === projetoSelecionado)?.nome || '';

    const templateParams = {
      nome: formData.nome,
      email: formData.email,
      whatsapp: formData.whatsapp || '',
      empresa: formData.empresa || '',
      projeto: projeto,
      servico: '',
      orcamento: orcamentoEstimado,
      mensagem: '',
      descricao: formData.descricao,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTATO_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setEnviado(true);

      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        empresa: '',
        descricao: '',
      });

      setProjetoSelecionado('web');
      setOrcamentoEstimado('Ainda não sei');
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);

      setErro(
        'Não foi possível enviar sua solicitação. Tente novamente.'
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#061225] text-white">
      <main className="relative isolate flex-1 px-6 pt-32 pb-16 lg:px-10">

        {/* Glow Effects de fundo */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

        <div className="pointer-events-none absolute right-10 top-1/3 -z-10 h-80 w-80 rounded-full bg-purple-600/15 blur-[140px]" />

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Orçamento Gratuito
            </span>

            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Vamos construir o seu <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                projeto juntos?
              </span>
            </h1>

            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Preencha os detalhes abaixo para entendermos a sua necessidade.
              Responderemos com uma proposta personalizada em até 24h.
            </p>
          </div>

          {/* Conteúdo do formulário */}
          <div className="mt-12 mb-16 grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">

            {/* Lado Esquerdo: Formulário */}
            <div className="rounded-2xl border border-white/10 bg-[#0A182E] p-6 shadow-2xl sm:p-8 lg:col-span-8">

              {enviado ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white">
                    Solicitação Recebida!
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 max-w-md">
                    Obrigado pelas informações! A equipe da{' '}
                    <strong>Sync Developers</strong> já está analisando o seu
                    projeto e entrará em contato em breve.
                  </p>

                  <button
                    onClick={() => setEnviado(false)}
                    className="mt-6 rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10"
                  >
                    Solicitar outro orçamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* PASSO 1: Tipo de Projeto */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                      1. Qual o tipo do seu projeto?
                    </label>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {tiposProjeto.map((item) => {
                        const Icone = item.icon;
                        const selecionado =
                          projetoSelecionado === item.id;

                        return (
                          <div
                            key={item.id}
                            onClick={() =>
                              setProjetoSelecionado(item.id)
                            }
                            className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                              selecionado
                                ? 'border-cyan-400 bg-cyan-400/10 text-white shadow-lg shadow-cyan-500/10'
                                : 'border-white/10 bg-[#061225] text-slate-400 hover:border-white/20 hover:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2 rounded-lg ${
                                  selecionado
                                    ? 'bg-cyan-400 text-slate-950'
                                    : 'bg-white/5 text-cyan-400'
                                }`}
                              >
                                <Icone className="h-5 w-5" />
                              </div>

                              <div>
                                <p className="text-sm font-bold text-white">
                                  {item.nome}
                                </p>

                                <p className="text-xs text-slate-400">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* PASSO 2: Faixa de Investimento */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                      2. Estimativa de investimento (Opcional)
                    </label>

                    <div className="flex flex-wrap gap-2">
                      {faixasOrcamento.map((faixa) => {
                        const selecionado =
                          orcamentoEstimado === faixa;

                        return (
                          <button
                            type="button"
                            key={faixa}
                            onClick={() =>
                              setOrcamentoEstimado(faixa)
                            }
                            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                              selecionado
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                : 'border border-white/10 bg-[#061225] text-slate-300 hover:border-white/20'
                            }`}
                          >
                            {faixa}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* PASSO 3: Dados de Contato e Descrição */}
                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                      3. Seus dados e detalhes do projeto
                    </label>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs font-medium text-slate-300">
                          Seu Nome *
                        </label>

                        <input
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              nome: e.target.value,
                            })
                          }
                          placeholder="Ex: Peter Parker"
                          className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-medium text-slate-300">
                          Seu E-mail *
                        </label>

                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="peter@parker.com"
                          className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs font-medium text-slate-300">
                          WhatsApp / Telefone
                        </label>

                        <input
                          type="text"
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              whatsapp: e.target.value,
                            })
                          }
                          placeholder="(11) 99999-9999"
                          className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-medium text-slate-300">
                          Empresa / Marca (Opcional)
                        </label>

                        <input
                          type="text"
                          value={formData.empresa}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              empresa: e.target.value,
                            })
                          }
                          placeholder="Nome da sua empresa"
                          className="w-full rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-300">
                        Conte um pouco sobre a sua ideia *
                      </label>

                      <textarea
                        rows={4}
                        required
                        value={formData.descricao}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            descricao: e.target.value,
                          })
                        }
                        placeholder="Quais as principais funcionalidades? Já possui design? Qual o prazo desejado?"
                        className="w-full resize-none rounded-xl border border-white/10 bg-[#061225] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  {/* Erro de envio */}
                  {erro && (
                    <p
                      role="alert"
                      className="text-sm text-center text-red-400"
                    >
                      {erro}
                    </p>
                  )}

                  {/* Botão */}
                  <button
                    type="submit"
                    disabled={carregando}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:scale-[1.01] hover:shadow-purple-500/25 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {carregando ? (
                      <span>Enviando solicitação...</span>
                    ) : (
                      <>
                        Solicitar Proposta Gratuita
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Lado Direito: Garantias e Card de Confiança */}
            <div className="space-y-6 lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-[#0A182E] p-6 shadow-xl">
                <h3 className="font-heading text-lg font-bold text-white mb-4">
                  Por que escolher a Sync?
                </h3>

                <ul className="space-y-4 text-xs text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <Clock className="h-4 w-4" />
                    </div>

                    <div>
                      <strong className="text-white block">
                        Atendimento Ágil
                      </strong>
                      Resposta em até 24 horas com proposta detalhada.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-400/10 text-purple-400">
                      <ShieldCheck className="h-4 w-4" />
                    </div>

                    <div>
                      <strong className="text-white block">
                        Sem Compromisso
                      </strong>
                      A avaliação do projeto é totalmente gratuita.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                      <Code2 className="h-4 w-4" />
                    </div>

                    <div>
                      <strong className="text-white block">
                        Desenvolvimento Sob Medida
                      </strong>
                      Foco no que seu negócio precisa, sem código desnecessário.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Card de Contato Direto */}
              <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0B1D38] to-[#071324] p-6 text-center">
                <p className="text-xs font-semibold text-cyan-300">
                  Prefere conversar por e-mail?
                </p>

                <p className="mt-1 font-mono text-sm font-bold text-white">
                  developerssync@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
