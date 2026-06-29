export default function Services() {
    return (
        <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4">
            <div className="mb-12 md:mb-16">
                <div className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
                    PLATFORM OVERVIEW
                </div>
                <p className="text-slate-500 mb-6 md:mb-8 font-medium text-sm sm:text-base">Service Packages & Pricing</p>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                    <div className="max-w-2xl">
                        <h1 className="text-slate-900 dark:text-slate-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 md:mb-6">
                            Flexible solutions for your <span className="text-primary italic">digital evolution.</span>
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
                            Combining high-end design with performant development. Choose a package that fits your project needs or book a custom consultation.
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 font-bold text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                {/* Tier 1 */}
                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-white/5 text-primary flex items-center justify-center mb-6 sm:mb-8">
                        <span className="material-symbols-outlined text-2xl sm:text-3xl">terminal</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Web Development</h3>
                    <p className="text-slate-500 text-sm mb-6 sm:mb-8 flex-1 leading-relaxed">
                        Building blazing fast, SEO-optimized web applications using Next.js, React, and Tailwind CSS. Focused on scalability.
                    </p>

                    <div className="mb-6 sm:mb-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl sm:text-5xl font-bold dark:text-white">$80</span>
                            <span className="text-slate-500 font-medium text-sm">/ hr</span>
                        </div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>Custom React Components</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>Headless CMS Integration</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>API Development</span>
                        </li>
                    </ul>

                    <button className="w-full py-3.5 sm:py-4 rounded-xl border-2 border-slate-200 dark:border-white/10 font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors mt-auto text-sm sm:text-base">
                        Start Project
                    </button>
                </div>

                {/* Tier 2 (Popular) */}
                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-primary/50 relative flex flex-col hover:border-primary transition-all md:scale-105 md:z-10 shadow-2xl shadow-primary/10">
                    <div className="absolute top-0 right-4 sm:right-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 sm:px-4 py-1.5 rounded-b-lg">
                        Most Popular
                    </div>

                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary text-white flex items-center justify-center mb-6 sm:mb-8 shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-2xl sm:text-3xl">palette</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">UI/UX Design</h3>
                    <p className="text-slate-500 text-sm mb-6 sm:mb-8 flex-1 leading-relaxed">
                        High-fidelity prototyping and user-centric interface design. Creating memorable digital experiences that convert.
                    </p>

                    <div className="mb-6 sm:mb-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl sm:text-5xl font-bold dark:text-white">$95</span>
                            <span className="text-slate-500 font-medium text-sm">/ hr</span>
                        </div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>User Journey Mapping</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>Interactive Prototyping</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>Design System Audit</span>
                        </li>
                    </ul>

                    <button className="w-full py-3.5 sm:py-4 rounded-xl bg-primary text-white font-bold hover:brightness-110 transition-all mt-auto shadow-lg shadow-primary/20 text-sm sm:text-base">
                        Book Design
                    </button>
                </div>

                {/* Tier 3 */}
                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-white/5 text-primary flex items-center justify-center mb-6 sm:mb-8">
                        <span className="material-symbols-outlined text-2xl sm:text-3xl">smartphone</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Mobile Apps</h3>
                    <p className="text-slate-500 text-sm mb-6 sm:mb-8 flex-1 leading-relaxed">
                        Cross-platform mobile applications that feel native. Specialized in React Native for seamless iOS & Android.
                    </p>

                    <div className="mb-6 sm:mb-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl sm:text-5xl font-bold dark:text-white">$110</span>
                            <span className="text-slate-500 font-medium text-sm">/ hr</span>
                        </div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>App Store Optimization</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>Push Notifications setup</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg mt-0.5">check_circle</span>
                            <span>Biometric Auth Integration</span>
                        </li>
                    </ul>

                    <button className="w-full py-3.5 sm:py-4 rounded-xl border-2 border-slate-200 dark:border-white/10 font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors mt-auto text-sm sm:text-base">
                        Get Quote
                    </button>
                </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10 pt-12 md:pt-16 flex flex-col items-center pb-8">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-24 mb-12 md:mb-16 opacity-50 grayscale">
                    {/* Trust badges placeholders */}
                    <div className="flex items-center gap-2 font-bold text-base sm:text-lg"><span className="material-symbols-outlined">bolt</span> VELOCITY</div>
                    <div className="flex items-center gap-2 font-bold text-base sm:text-lg"><span className="material-symbols-outlined">shield</span> SECURE</div>
                    <div className="flex items-center gap-2 font-bold text-base sm:text-lg"><span className="material-symbols-outlined">currency_bitcoin</span> CRYPTOPAY</div>
                    <div className="flex items-center gap-2 font-bold text-base sm:text-lg"><span className="material-symbols-outlined">public</span> GLOBAL</div>
                </div>

                <p className="text-slate-500 text-sm text-center">
                    Don't see what you're looking for? <a href="#" className="text-primary font-bold hover:underline">Request a custom quote</a> for enterprise-level projects.
                </p>
            </div>
        </div>
    );
}
