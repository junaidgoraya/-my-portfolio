import aiLearningImg from "../assets/ai-learning.png";
import ecommerceImg from "../assets/ecommerce.png";
import doctorAppImg from "../assets/doctor-app.png";
import trustcomImg from "../assets/trustcom.png";
import adflowImg from "../assets/adflow-pro.png";

export default function Portfolio() {
    const projects = [
        {
            id: 5,
            title: "AdFlow Pro – Ads Management",
            category: "Full-Stack Platform",
            image: adflowImg,
            description: "A full-stack advertisement management platform with Admin, Client, and Public dashboards, role-based authentication, analytics, ad management, and payment tracking.",
            tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
            liveDemo: "https://lab-mid-mwu7.vercel.app/",
            github: "https://github.com/junaidgoraya",
            featured: true
        },
        {
            id: 4,
            title: "TrustCom – Committee Management",
            category: "Full-Stack Web App",
            image: trustcomImg,
            description: "A full-stack Peer-to-Peer Savings Committee Management Platform with Admin Dashboard, User Dashboard, JWT Authentication, Committee Management, Payment Tracking, KYC, and Trust Score.",
            tech: ["Next.js 14", "TypeScript", "MongoDB", "Mongoose", "NextAuth.js", "Tailwind CSS", "shadcn/ui", "Zustand", "TanStack Query", "Stripe", "Vercel"],
            liveDemo: "https://committee-management-iacb.vercel.app",
            github: "https://github.com/junaidgoraya",
            featured: true
        },
        {
            id: 1,
            title: "AI Learning Assistant",
            category: "Full-Stack AI Web Application",
            image: aiLearningImg,
            description: "An AI-powered full-stack learning platform that allows users to upload PDF documents, chat with Google Gemini AI, and generate summaries, flashcards, and quizzes automatically. The application includes secure authentication, a responsive UI, and an interactive dashboard for managing study materials.",
            tech: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "JWT Authentication", "Axios", "Multer"]
        },
        {
            id: 2,
            title: "E-Commerce Website",
            category: "Web Development",
            image: ecommerceImg,
            description: "A premium luxury fashion retail platform with advanced filtering and seamless shopping experience."
        },
        {
            id: 3,
            title: "Doctor App",
            category: "Mobile Apps",
            image: doctorAppImg,
            description: "A comprehensive healthcare solution for doctor appointments and patient health tracking."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
                <div className="max-w-xl">
                    <h1 className="text-slate-900 dark:text-slate-100 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
                        Portfolio
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-light">
                        A curated showcase of high-performance web applications and immersive UI/UX systems.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-bold">
                    <button className="px-4 sm:px-6 py-2 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                        All
                    </button>
                    <button className="px-4 sm:px-6 py-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        Web Development
                    </button>
                    <button className="px-4 sm:px-6 py-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        Mobile Apps
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="flex flex-col h-full group relative"
                    >
                        {project.featured && (
                            <div className="absolute top-3 right-3 bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-md z-10 shadow-lg">
                                Featured
                            </div>
                        )}
                        <div className="relative aspect-video rounded-2xl overflow-hidden glass-card cursor-pointer border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 group-hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1.5">{project.category}</span>
                                <h3 className="text-white font-bold text-base sm:text-lg">{project.title}</h3>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow p-4 sm:p-5 glass-card border border-slate-200 dark:border-white/10 rounded-2xl mt-4 shadow-lg shadow-black/5">
                            <div className="mb-3">
                                <span className="text-primary text-[11px] sm:text-xs font-bold uppercase tracking-widest">{project.category}</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed mb-4 line-clamp-3 flex-grow">
                                {project.description}
                            </p>
                            {project.tech && Array.isArray(project.tech) && (
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.slice(0, 4).map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-[11px] sm:text-xs font-medium rounded border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs font-medium rounded border border-slate-200 dark:border-slate-700">
                                            +{project.tech.length - 4}
                                        </span>
                                    )}
                                </div>
                            )}
                            {(project.liveDemo || project.github) && (
                                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-200 dark:border-white/10">
                                    {project.liveDemo && (
                                        <a 
                                            href={project.liveDemo} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg"
                                        >
                                            <span className="material-symbols-outlined text-sm">external_link</span>
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all border border-slate-700"
                                        >
                                            <span className="material-symbols-outlined text-sm">code</span>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-900 dark:bg-slate-800/50 rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center text-white border border-slate-800 dark:border-white/10 glass-card mx-auto max-w-5xl mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Start your next digital journey</h2>
                <p className="text-slate-400 text-base md:text-lg mb-6 md:mb-10 max-w-2xl mx-auto">
                    Available for select freelance opportunities and full-time remote partnerships.
                </p>
                <div className="flex justify-center">
                    <a
                        href="mailto:junaidgoraya184@gmail.com"
                        className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-primary text-white font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}
