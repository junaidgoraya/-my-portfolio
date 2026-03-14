import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
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
            if (error.message === 'Failed to fetch') {
                setErrorMsg('Network error: Your Supabase URL or Anon Key in the .env file might be incorrect.');
            } else {
                setErrorMsg(error.message || 'Something went wrong. Please try again.');
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-6xl mx-auto h-full flex flex-col pt-8 lg:pt-16 pb-12 px-4">
            <div className="text-center mb-16">
                <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                    Get in <span className="text-primary cursor-pointer border-b-4 border-transparent hover:border-primary transition-colors">Touch</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                    I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-5xl mx-auto w-full">
                {/* Left Column - Socials */}
                <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-100">Follow Me</h2>

                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                        <a href="https://www.linkedin.com/in/muhammad-junaid-50a503394/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-900/5 dark:bg-black/20 hover:bg-primary/10 border border-slate-200 dark:border-white/5 hover:border-primary/30 py-4 px-6 rounded-xl transition-all group">
                            <span className="material-symbols-outlined text-xl text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">work</span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary">LinkedIn</span>
                        </a>
                        <a href="#" className="flex items-center justify-center gap-3 bg-slate-900/5 dark:bg-black/20 hover:bg-primary/10 border border-slate-200 dark:border-white/5 hover:border-primary/30 py-4 px-6 rounded-xl transition-all group">
                            <span className="material-symbols-outlined text-xl text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">share</span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary">Twitter</span>
                        </a>
                        <a href="https://github.com/junaidgoraya" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-900/5 dark:bg-black/20 hover:bg-primary/10 border border-slate-200 dark:border-white/5 hover:border-primary/30 py-4 px-6 rounded-xl transition-all group">
                            <span className="material-symbols-outlined text-xl text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">code</span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary">GitHub</span>
                        </a>
                        <a href="#" className="flex items-center justify-center gap-3 bg-slate-900/5 dark:bg-black/20 hover:bg-primary/10 border border-slate-200 dark:border-white/5 hover:border-primary/30 py-4 px-6 rounded-xl transition-all group">
                            <span className="material-symbols-outlined text-xl text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">language</span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary">Dribbble</span>
                        </a>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold mb-8 text-primary text-center lg:text-left">Send a Message</h2>
                    <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status === 'success' && (
                                <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-xl text-sm font-bold flex items-center gap-2 mb-6 transition-all animate-in fade-in slide-in-from-top-2">
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Message sent successfully!
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm font-bold flex items-center gap-2 mb-6 transition-all animate-in fade-in slide-in-from-top-2">
                                    <span className="material-symbols-outlined">error</span>
                                    {errorMsg}
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-100 dark:bg-background-dark/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-100 dark:bg-background-dark/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-slate-100 dark:bg-background-dark/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message *</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-100 dark:bg-background-dark/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full sm:w-auto px-8 bg-primary hover:bg-primary/90 disabled:bg-slate-500 text-white font-bold text-base py-3.5 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
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
        </div>
    );
}

