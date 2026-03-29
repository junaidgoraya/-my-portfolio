import profilePic from "../../assets/mypic.jpeg";

const SkillBar = ({ title, percentage }) => (
    <div className="mb-6">
        <h4 className="text-slate-200 font-medium mb-3 text-sm md:text-base">{title}</h4>
        <div className="w-full bg-slate-800/50 rounded-full h-2.5">
            <div className="bg-[#00a8ff] h-2.5 rounded-full shadow-[0_0_10px_rgba(0,168,255,0.5)] transition-all duration-1000" style={{ width: percentage }}></div>
        </div>
    </div>
);

export default function AboutSection() {
    return (
        <section id="about" className="max-w-6xl mx-auto py-20 px-4 md:px-8 border-t border-white/5">
            {/* Top Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight blue-glow-text">About Me</h2>
                <p className="text-slate-400 text-lg">Consistency Makes a Man Perfect</p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                <div className="order-2 lg:order-1">
                    <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                        Hello, I'm Muhammad Junaid Goraya
                    </h3>
                    <p className="text-slate-300 font-medium mb-8 text-base">
                        CS student at COMSATS University specializing in React.js development. I build responsive web experiences with clean code and am expanding into full-stack development (MERN).
                    </p>
                    <p className="text-slate-400 text-base leading-relaxed mb-6">
                        Passionate about clear communication, creative problem-solving, and delivering impactful digital solutions. I believe in maintaining a healthy work-life balance and continuously improving my skills.
                    </p>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:scale-105 transition-transform duration-700">
                        <img
                            src={profilePic}
                            alt="Muhammad Junaid"
                            className="w-full h-full object-cover object-[center_60%]"
                        />
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="w-full max-w-4xl mx-auto glass-card p-10 rounded-3xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">Skills & Expertise</h3>
                <SkillBar title="🌐 Frontend: HTML5 | CSS3 | JavaScript | React.js" percentage="90%" />
                <SkillBar title="⚙️ Backend: Node.js | Express.js | MongoDB (Learning)" percentage="50%" />
                <SkillBar title="🛠️ Tools: Git | GitHub | VS Code | Postman" percentage="85%" />
            </div>
        </section>
    );
}
