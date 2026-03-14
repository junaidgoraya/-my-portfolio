import aiLearningImg from "../assets/ai-learning.png";
import ecommerceImg from "../assets/ecommerce.png";
import doctorAppImg from "../assets/doctor-app.png";

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "AI Learning Assistant",
            category: "Web Development",
            image: aiLearningImg,
            description: "An intelligent learning platform with integrated AI chatbot and modular curriculum management."
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
        <div className="max-w-6xl mx-auto py-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
                <div className="max-w-xl">
                    <h1 className="text-slate-900 dark:text-slate-100 text-5xl font-bold leading-tight tracking-tight mb-4">
                        Portfolio
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-light">
                        A curated showcase of high-performance web applications and immersive UI/UX systems.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 text-sm font-bold">
                    <button className="px-6 py-2 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                        All
                    </button>
                    <button className="px-6 py-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        Web Development
                    </button>
                    <button className="px-6 py-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        Mobile Apps
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 px-4">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col gap-4 group">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card cursor-pointer border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-primary-light text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-900 dark:bg-slate-800/50 rounded-[3rem] p-12 md:p-20 text-center text-white border border-slate-800 dark:border-white/10 glass-card mx-auto max-w-5xl mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Start your next digital journey</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                    Available for select freelance opportunities and full-time remote partnerships.
                </p>
                <div className="flex justify-center">
                    <a
                        href="mailto:junaidgoraya184@gmail.com"
                        className="px-10 py-4 rounded-full bg-primary text-white font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 inline-flex items-center gap-2"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}
