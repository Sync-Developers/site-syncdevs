import { Link, NavLink } from "react-router-dom";

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
    return (

        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="fixed top-0.5 left-0 flex justify-center px-4">
                <img src="https://ik.imagekit.io/dy033dhiwy/Logo/logo-fundo-transparente.png" alt="Sync Developers" className="w-45 h-20" />
            </div>
             <div className="fixed top-6 right-0 flex justify-center px-6 hover:scale-105 transition-transform duration-200">
                <Link to="/contato" className="px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 bg-indigo-600 text-white shadow-md hover:bg-indigo-700">
                    Solicitar Orçamento 
                </Link>
            </div>
                <nav className="flex items-center gap-2 px-4 py-2 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-xl ">
                    {navbarItens.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}

                            className={({ isActive }) =>
                                `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ` +
                                `${isActive
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
        </div>
    );
}

export default Navbar;
