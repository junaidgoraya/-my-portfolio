import aiLearningImg from "../../assets/ai-learning.png";
import ecommerceImg from "../../assets/ecommerce.png";
import doctorAppImg from "../../assets/doctor-app.png";

export default function PortfolioSection() {
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
        <section id="portfolio" className="max-w-6xl mx-auto py-20 px-4 md:px-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight blue-glow-text">
                        Portfolio
                    </h2>
                    <p className="text-slate-400 text-lg font-light max-w-lg">
                        A curated showcase of high-performance web applications and immersive UI/UX systems.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 text-sm font-bold">
                    <button className="px-6 py-2 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                        All
                    </button>
                    <button className="px-6 py-2 rounded-full text-slate-500 hover:text-white transition-colors">
                        Web Development
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col gap-6 group glass-card p-4 rounded-[2.5rem]">
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                            </div>
                        </div>
                        <div className="px-2 pb-2">
                            <h3 className="text-white font-bold text-xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
