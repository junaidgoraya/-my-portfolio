export default function ServicesSection() {
    return (
        <section id="services" className="max-w-6xl mx-auto py-20 px-4 md:px-8 border-t border-white/5">
            <div className="mb-16 text-center">
                <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
                    PLATFORM OVERVIEW
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight blue-glow-text">
                    Flexible solutions for your <span className="text-primary italic">digital evolution.</span>
                </h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Combining high-end design with performant development. Choose a package that fits your project needs or book a custom consultation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {/* Tier 1 */}
                <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 text-primary flex items-center justify-center mb-8">
                        <span className="material-symbols-outlined text-3xl">terminal</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
                    <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed">
                        Building blazing fast, SEO-optimized web applications using Next.js, React, and Tailwind CSS.
                    </p>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-white">$80</span>
                            <span className="text-slate-500 font-medium">/ hr</span>
                        </div>
                    </div>

                    <button className="w-full py-4 rounded-xl border-2 border-white/10 text-white font-bold hover:bg-white/5 transition-colors mt-auto">
                        Start Project
                    </button>
                </div>

                {/* Tier 2 (Popular) */}
                <div className="glass-card rounded-3xl p-8 border-2 border-primary/50 relative flex flex-col scale-105 z-10 shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-lg">
                        Most Popular
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg shadow-primary/30 animate-pulse">
                        <span className="material-symbols-outlined text-3xl">palette</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
                    <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed">
                        High-fidelity prototyping and user-centric interface design creating memorable experiences.
                    </p>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-white">$95</span>
                            <span className="text-slate-500 font-medium">/ hr</span>
                        </div>
                    </div>

                    <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:brightness-110 transition-all mt-auto shadow-lg shadow-primary/20">
                        Book Design
                    </button>
                </div>

                {/* Tier 3 */}
                <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 text-primary flex items-center justify-center mb-8">
                        <span className="material-symbols-outlined text-3xl">smartphone</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white">Mobile Apps</h3>
                    <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed">
                        Cross-platform mobile applications that feel native with React Native for iOS & Android.
                    </p>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-white">$110</span>
                            <span className="text-slate-500 font-medium">/ hr</span>
                        </div>
                    </div>

                    <button className="w-full py-4 rounded-xl border-2 border-white/10 text-white font-bold hover:bg-white/5 transition-colors mt-auto">
                        Get Quote
                    </button>
                </div>
            </div>
        </section>
    );
}
