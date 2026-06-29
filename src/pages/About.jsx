import profilePic from "../assets/mypic.jpeg";

const SkillBar = ({ title, percentage }) => (
    <div className="mb-6">
        <h4 className="text-slate-200 font-medium mb-3 text-sm md:text-base">{title}</h4>
        <div className="w-full bg-slate-800/50 rounded-full h-2.5">
            <div className="bg-[#00a8ff] h-2.5 rounded-full shadow-[0_0_10px_rgba(0,168,255,0.5)] transition-all duration-1000" style={{ width: percentage }}></div>
        </div>
    </div>
);

export default function About() {
    return (
        <div className="max-w-6xl mx-auto pt-4 pb-12 md:pt-8 md:pb-20 px-4 md:px-8 h-full flex flex-col">

            {/* Top Header */}
            <div className="text-center mb-8 md:mb-10 lg:mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4 tracking-tight">About Me</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg">Get to know me better</p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
                {/* Left Text Column */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#00a8ff] mb-4">
                        Hello, I'm Muhammad Junaid Goraya
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 font-medium mb-6 md:mb-8 text-sm md:text-base">
                        Consistency Makes a Man Perfect in Their Skill Set. - M. Junaid
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                        CS student at COMSATS University specializing in React.js development. I build responsive web experiences with clean code and am expanding into full-stack development (MERN). Passionate about clear communication, creative problem-solving, and delivering impactful digital solutions.
                    </p>
                </div>

                {/* Right Image Column */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#00a8ff] shadow-[0_0_40px_rgba(0,168,255,0.4)] flex-shrink-0">
                        <img
                            src={profilePic}
                            alt="Muhammad Junaid"
                            className="w-full h-full object-cover object-[center_60%] hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Sections: Skills and Interests */}
            <div className="flex flex-col gap-12 md:gap-16">
                {/* Skills */}
                <div className="w-full max-w-4xl mx-auto">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-10">Skills & Expertise</h3>
                    <SkillBar title="🌐 Frontend: HTML5 | CSS3 | JavaScript | React.js" percentage="90%" />
                    <SkillBar title="⚙️ Backend: Node.js | Express.js | MongoDB (Learning)" percentage="50%" />
                    <SkillBar title="🛠️ Tools: Git | GitHub | VS Code | Postman" percentage="85%" />
                </div>

                {/* Interests */}
                <div className="w-full max-w-4xl mx-auto">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Personal Interests</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                        When I'm not coding, I enjoy exploring new technologies, reading about design trends, and spending time with my family. I believe in maintaining a healthy work-life balance and continuously improving my skills.
                    </p>
                </div>
            </div>

        </div>
    );
}
