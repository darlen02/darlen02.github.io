import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

const Hero = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/darlen02')
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Profile Photo */}
                    <div className="flex justify-center mb-8">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="relative"
                        >
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden relative z-10 bg-slate-800">
                                {profile?.avatar_url ? (
                                    <img src={profile.avatar_url} alt="Hasan Saka" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                                        HS
                                    </div>
                                )}
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-50 z-0 scale-110"></div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm"
                    >
                        Full Stack Developer @ Beto Yazılım
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Merhaba, ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Hasan Saka</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                        Modern ve ölçeklenebilir sistemler tasarlayan, detaylara önem veren bir Full Stack Developer.
                        Kodun performansını, tasarımın zarafetiyle buluşturuyorum.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#projects" className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2 group transform hover:-translate-y-0.5">
                            Projelerimi İncele
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="https://github.com/darlen02" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-white font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
                            <Github size={20} />
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
