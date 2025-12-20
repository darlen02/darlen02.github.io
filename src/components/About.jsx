import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Smartphone } from 'lucide-react';

const About = () => {
    const cards = [
        { icon: <Database className="w-6 h-6 text-indigo-400" />, title: "Backend", desc: "C#, Java, .NET Core Web API ve MySQL." },
        { icon: <Layout className="w-6 h-6 text-purple-400" />, title: "Frontend", desc: "React, Next.js ve modern UI/UX prensipleri." },
        { icon: <Smartphone className="w-6 h-6 text-green-400" />, title: "Mobil", desc: "Android (Java) ve React Native." },
        { icon: <Code className="w-6 h-6 text-pink-400" />, title: "Masaüstü", desc: "Windows Form & optimizasyon araçları." },
    ];

    return (
        <section id="about" className="py-24 relative bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hakkımda</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="prose prose-lg prose-invert text-slate-300">
                            <p className="text-lg leading-relaxed">
                                Merhaba! Ben Hasan. <span className="text-white font-semibold border-b-2 border-indigo-500/50">Full Stack Geliştirme</span> alanında uzmanlaşmış, projenin her aşamasında aktif rol alan bir geliştiriciyim.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Beto Yazılım bünyesinde <span className="text-white font-semibold">Full Stack Developer</span> olarak çalışıyorum. Karmaşık iş problemlerini, temiz, okunabilir ve yüksek performanslı kodlarla çözmeyi seviyorum.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Teknolojinin sunduğu imkanları en iyi şekilde kullanarak, kullanıcı deneyimini ön planda tutan, ölçeklenebilir ve modern yazılım mimarileri kurmak benim için sadece bir iş değil, aynı zamanda bir tutku.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            {["Temiz Mimari", "Sürdürülebilir Kod", "Yüksek Performans", "API Tasarımı"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-800 rounded-full text-indigo-300 text-sm font-medium border border-slate-700">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="mb-4 bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
