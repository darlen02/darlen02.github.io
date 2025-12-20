import React from 'react';
import { motion } from 'framer-motion';

const techs = [
    {
        category: "Backend",
        color: "from-blue-500 to-cyan-500",
        items: [
            { name: "C#", level: 95 },
            { name: "Java", level: 90 },
            { name: ".NET Core", level: 95 },
            { name: "Web API", level: 95 },
            { name: "Entity Framework", level: 90 }
        ]
    },
    {
        category: "Frontend",
        color: "from-purple-500 to-pink-500",
        items: [
            { name: "React", level: 85 },
            { name: "Next.js", level: 80 },
            { name: "Tailwind CSS", level: 90 },
            { name: "Javascript (ES6+)", level: 90 },
            { name: "HTML5 / CSS3", level: 95 }
        ]
    },
    {
        category: "Mobil / Desktop",
        color: "from-green-500 to-emerald-500",
        items: [
            { name: "Android (Java)", level: 85 },
            { name: "React Native", level: 85 },
            { name: "Windows Forms", level: 90 },
            { name: "WPF", level: 75 }
        ]
    },
    {
        category: "Database & Tools",
        color: "from-orange-500 to-red-500",
        items: [
            { name: "MySQL", level: 90 },
            { name: "Git / GitHub", level: 90 },
            { name: "Docker", level: 75 },
            { name: "Postman", level: 90 }
        ]
    }
];

const TechStack = () => {
    return (
        <section id="tech" className="py-24 relative bg-slate-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Teknoloji Yığını</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Fikirleri gerçeğe dönüştürmek için kullandığım araçlar ve diller.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techs.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-slate-800/40 rounded-2xl p-6 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            <h3 className={`text-xl font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-6 pb-2 border-b border-white/5`}>
                                {cat.category}
                            </h3>
                            <div className="space-y-5">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="group">
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">{item.name}</span>
                                        </div>
                                        <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (i * 0.1) }}
                                                className={`bg-gradient-to-r ${cat.color} h-full rounded-full opacity-80 group-hover:opacity-100 transition-opacity`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
