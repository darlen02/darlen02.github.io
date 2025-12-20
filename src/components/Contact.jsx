import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ArrowUp } from 'lucide-react';

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="bg-slate-900 pt-24 pb-8 relative border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">İletişime Geç</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10">
                        Yeni projeler, iş birlikleri veya teknoloji üzerine sohbet etmek için her zaman buradayım.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <a href="mailto:hsaka600@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg transition-all shadow-lg shadow-indigo-600/25 hover:scale-105">
                            <Mail size={22} />
                            Bana E-posta Gönder
                        </a>
                        <span className="text-slate-500 text-sm">veya</span>
                        <a href="https://github.com/darlen02" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white pb-0.5">
                            <Github size={20} />
                            GitHub Profilimi İncele
                        </a>
                    </div>
                </motion.div>

                <div className="border-t border-slate-800 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Hasan Saka. ❤️ ile Tasarlandı ve Geliştirildi.</p>

                    <button
                        onClick={scrollToTop}
                        className="mt-4 md:mt-0 flex items-center gap-2 hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
                    >
                        Yukarı Çık <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
