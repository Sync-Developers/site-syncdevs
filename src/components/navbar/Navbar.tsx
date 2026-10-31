import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavbarItens {
    label: string;
    path: string;
}

const navbarItens: NavbarItens[] = [
    { label: 'Home', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Contato', path: '/contato' },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header 
            className={`fixed left-0 right-0 z-50 flex justify-center px-4 w-full transition-all duration-300 ease-in-out ${
                isVisible ? "top-6 translate-y-0 opacity-100" : "-top-20 -translate-y-full opacity-0"
            }`}
        >
            <nav 
                aria-label="Navegação principal"
                className={`flex items-center justify-between w-full max-w-262.5 rounded-full px-6 py-2.5 transition-all duration-300 ${
                    isScrolled 
                        ? "bg-[#0a0f1a]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]" 
                        : "bg-white/5 backdrop-blur-md border border-white/10 shadow-sm"
                }`}
            >
                <Link 
                    to="/" 
                    className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5932ea] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1a]"
                >
                    <img 
                        src="https://ik.imagekit.io/dy033dhiwy/Logo/logo-tema-claro" 
                        alt="Página inicial da Sync Developers" 
                        className="w-auto h-9 md:h-11 object-contain" 
                    />
                </Link>

                <ul className="hidden md:flex items-center gap-2 lg:gap-4">
                    {navbarItens.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5932ea] ${
                                        isActive
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

                <div className="shrink-0">
                    <Link 
                        to="/orcamento" 
                        className="inline-block px-7 py-2.5 rounded-full text-[15px] font-medium text-white transition-all duration-300 bg-[#5932ea] hover:bg-[#4a26cc] shadow-[0_4px_14px_rgba(89,50,234,0.3)] hover:shadow-[0_6px_20px_rgba(89,50,234,0.5)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1a]"
                    >
                        Solicitar Orçamento 
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;