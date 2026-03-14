import profilePic from "../assets/mypic.jpeg";

const InfoRow = ({ icon, label, value }) => (
    <div className="flex border-b border-slate-200 dark:border-white/5 last:border-b-0 w-full min-h-[5rem]">
        {/* Icon & Label Section - Fixed Width */}
        <div className="w-[180px] bg-slate-100 dark:bg-white/5 p-4 flex items-center gap-4 border-r border-slate-200 dark:border-white/5 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#0077b5] dark:bg-[#0088cc] flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-white text-[20px]">{icon}</span>
            </div>
            <span className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-bold leading-tight">{label}</span>
        </div>

        {/* Value Section - Flexible Width */}
        <div className="flex-1 p-4 flex items-center bg-transparent">
            <span className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold break-words">{value}</span>
        </div>
    </div>
);

const SocialBtn = ({ icon, label, href }) => (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-100 dark:bg-black/20 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/5 py-4 md:py-5 rounded-xl transition-all">
        <span className="material-symbols-outlined text-primary text-xl md:text-2xl">{icon}</span>
        <span className="text-slate-700 dark:text-slate-200 font-bold text-sm md:text-base">{label}</span>
    </a>
);

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto h-full flex flex-col pt-12 md:pt-20 pb-12 px-2 md:px-6">

            {/* Header Section */}
            <div className="flex flex-row items-center gap-6 mb-16 md:mb-24">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#00a8ff] shadow-[0_0_30px_rgba(0,168,255,0.4)] flex-shrink-0">
                    <img
                        src={profilePic}
                        alt="Muhammad Junaid"
                        className="w-full h-full object-cover object-[center_60%] hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-2 md:mb-4 tracking-tight">
                        Muhammad Junaid
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg font-medium">
                        Consistency Makes a Man Perfect
                    </p>
                </div>
            </div>

            {/* Info Grids */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                <div className="glass-card rounded-2xl md:rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col">
                    <InfoRow icon="person" label="Full Name:" value="Muhammad Junaid" />
                    <InfoRow icon="calendar_month" label="Date of Birth:" value="04-02-2004" />
                    <InfoRow icon="call" label="Phone:" value="+923253818184" />
                    <InfoRow icon="location_on" label="Address:" value="Bahawalpur" />
                </div>

                <div className="glass-card rounded-3xl md:rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col">
                    <InfoRow icon="mail" label="Email Address:" value="junaidgoraya184@gmail.com " />
                    <InfoRow icon="work" label="Professional Title:" value="Web Developer" />
                    <InfoRow icon="public" label="Languages:" value="English, Urdu" />
                    <InfoRow icon="flag" label="Nationality:" value="Pakistan" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
                <a href="/resume.pdf" download className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white px-6 md:px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors text-sm md:text-base">
                    <span className="material-symbols-outlined text-[20px] md:text-[24px]">download</span> Download Resume
                </a>
                <a href="/contact" className="bg-primary hover:brightness-110 text-white px-6 md:px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/30 transition-all text-sm md:text-base">
                    <span className="material-symbols-outlined text-[20px] md:text-[24px]">mail</span> Contact Me
                </a>
            </div>

            {/* Follow Me Section */}
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/10 mb-16">
                <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-10">Follow Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    <SocialBtn icon="work" label="LinkedIn" href="https://www.linkedin.com/in/muhammad-junaid-50a503394/" />
                    <SocialBtn icon="share" label="Twitter" href="#" />
                    <SocialBtn icon="code" label="GitHub" href="https://github.com/junaidgoraya" />
                    <SocialBtn icon="play_arrow" label="YouTube" href="#" />
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 dark:border-white/10 pt-8 mt-auto text-sm font-medium text-slate-500">
                © {new Date().getFullYear()} Muhammad Junaid. All Rights Reserved.
            </div>
        </div>
    );
}
