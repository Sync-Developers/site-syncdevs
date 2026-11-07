import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarItem {
    label: string;
    path: string;
}

const navbarItems: NavbarItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Contato', path: '/contato' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Fecha o menu mobile caso o usuário navegue pelo histórico (voltar/avançar)
    useEffect(() => {
        const handlePopState = () => {
            setMobileMenuOpen(false);
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    // Bloqueia rolagem do body quando o menu mobile está aberto
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    // Trata tecla Escape para fechar o menu mobile
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Controle de exibição no scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Se o menu mobile estiver aberto, mantém a navbar visível
            if (mobileMenuOpen) {
                setIsVisible(true);
                return;
            }

            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            if (currentScrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, mobileMenuOpen]);

    return (
        <header
            className={`fixed left-0 right-0 z-50 flex flex-col items-center px-4 w-full transition-all duration-300 ease-in-out ${isVisible ? "top-3 sm:top-5 translate-y-0 opacity-100" : "-top-24 -translate-y-full opacity-0"
                }`}
        >
            <nav
                aria-label="Navegação principal"
                className={`flex items-center justify-between w-full max-w-5xl rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ${isScrolled || mobileMenuOpen
                        ? "bg-[#0a0f1a]/95 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                        : "bg-white/5 backdrop-blur-md border border-white/10 shadow-sm"
                    }`}
            >
                {/* Logo */}
                <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5932ea] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1a]"
                >
                    <img
                        src="https://ik.imagekit.io/dy033dhiwy/Logo/logo-tema-claro"
                        alt="Sync Developers"
                        className="w-auto h-8 sm:h-9 md:h-10 object-contain"
                    />
                </Link>

                {/* Links Desktop e Tablet (md+) */}
                <ul className="hidden md:flex items-center gap-1 lg:gap-3">
                    {navbarItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-3.5 lg:px-5 py-2 rounded-full text-xs lg:text-[15px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5932ea] ${isActive
                                        ? 'bg-[#5932ea] text-white shadow-[0_0_15px_rgba(89,50,234,0.4)]'
                                        : 'text-neutral-300 hover:text-white hover:bg-white/10'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Ações à direita */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Botão de Orçamento - Visível em desktop e tablet */}
                    <Link
                        to="/orcamento"
                        className="hidden sm:inline-flex items-center justify-center px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-300 bg-[#5932ea] hover:bg-[#4a26cc] shadow-[0_4px_14px_rgba(89,50,234,0.3)] hover:shadow-[0_6px_20px_rgba(89,50,234,0.5)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1a]"
                    >
                        <span className="hidden lg:inline">Solicitar</span>
                        <span className="lg:ml-1">Orçamento</span>
                    </Link>

                    {/* Botão Hamburguer Mobile (< md) */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={mobileMenuOpen}
                        className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5932ea]"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Backdrop escuro do menu mobile */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 top-0 -z-10 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Menu Dropdown Mobile (< md) */}
            <div
                className={`w-full max-w-5xl md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
                        ? "max-h-96 opacity-100 translate-y-2 pointer-events-auto"
                        : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="rounded-2xl border border-white/10 bg-[#0a0f1a]/95 backdrop-blur-2xl p-5 shadow-2xl">
                    <ul className="flex flex-col gap-1.5">
                        {navbarItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                            ? 'bg-[#5932ea] text-white shadow-[0_0_15px_rgba(89,50,234,0.4)]'
                                            : 'text-slate-200 hover:text-white hover:bg-white/5'
                                        }`
                                    }
                                >
                                    <span>{item.label}</span>
                                    <ArrowRight className="h-4 w-4 opacity-50" />
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Botão de Orçamento no Menu Mobile */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <Link
                            to="/orcamento"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-[#5932ea] shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-98"
                        >
                            <span>Solicitar Orçamento</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
