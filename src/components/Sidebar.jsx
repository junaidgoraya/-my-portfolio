import { NavLink } from "react-router-dom";
import profilePic from "../assets/mypic.jpeg";

const navLinks = [
    { path: "/", label: "Home", icon: "home" },
    { path: "/about", label: "About", icon: "person" },
    { path: "/services", label: "Service", icon: "layers" },
    { path: "/work", label: "Portfolio", icon: "work" },
    { path: "/contact", label: "Contact", icon: "mail" },
];

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-screen w-64 border-r border-slate-200 dark:border-primary/20 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-xl z-50 flex flex-col">
            <div className="p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/50 shadow-md mb-4 relative">
                    <img src={profilePic} alt="Muhammad Abdullah" className="w-full h-full object-cover object-[center_60%]" />
                </div>
                <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight leading-none mb-2">
                    Muhammad<br />Junaid
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                    Web Developer & <br /> Custom Software Developer
                </p>
            </div>

            <nav className="flex-1 mt-4 px-4 space-y-2">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `sidebar-link flex items-center gap-4 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-all rounded-lg group ${isActive ? "active" : ""
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">{link.icon}</span>
                        <span className="font-medium">{link.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-6 border-t border-slate-200 dark:border-primary/10">
                <a href="mailto:junaidgoraya184@gmail.com" className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">bolt</span>
                    Hire Me
                </a>
                <div className="mt-6 flex items-center justify-between px-2 text-slate-500">
                    <a href="https://github.com/junaidgoraya" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">code</span>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-junaid-50a503394/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">work</span>
                    </a>
                    <a href="mailto:junaidgoraya184@gmail.com" className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">mail</span>
                    </a>
                </div>
            </div>
        </aside>
    );
}
