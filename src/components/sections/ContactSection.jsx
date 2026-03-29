import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const { error } = await supabase
                .from('Contacts')
                .insert([
                    {
                        full_name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                    },
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Supabase Error:', error);
            setStatus('error');
            setErrorMsg(error.message || 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto py-20 px-4 md:px-8 border-t border-white/5 bg-navy-900/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight blue-glow-text">
                    Get in <span className="text-primary italic">Touch</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                    I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-5xl mx-auto w-full">
                {/* Left Column - Socials */}
                <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/10 flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-8 text-white">Follow Me</h3>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <a href="https://www.linkedin.com/in/muhammad-junaid-50a503394/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/30 py-4 px-6 rounded-xl transition-all group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">work</span>
                            <span className="text-sm font-bold text-slate-300 group-hover:text-primary">LinkedIn</span>
                        </a>
                        <a href="https://github.com/junaidgoraya" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/30 py-4 px-6 rounded-xl transition-all group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">code</span>
                            <span className="text-sm font-bold text-slate-300 group-hover:text-primary">GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div className="flex flex-col">
                    <div className="glass-card rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status === 'success' && (
                                <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-xl text-sm font-bold flex items-center gap-2 mb-6">
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Message sent successfully!
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm font-bold flex items-center gap-2 mb-6">
                                    <span className="material-symbols-outlined">error</span>
                                    {errorMsg}
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300">Message *</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-8 bg-primary hover:bg-primary/90 disabled:bg-slate-500 text-white font-bold text-base py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-[0.98]"
                            >
                                <span className="material-symbols-outlined text-[18px]">
                                    {status === 'loading' ? 'sync' : 'send'}
                                </span>
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
