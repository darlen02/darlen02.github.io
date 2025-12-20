import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch repositories from GitHub API
        fetch('https://api.github.com/users/darlen02/repos?sort=updated&per_page=6')
            .then(res => {
                if (!res.ok) throw new Error('GitHub API request failed');
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    // Sort by stars descending 
                    const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
                    setRepos(sorted);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Projeler yüklenirken bir hata oluştu.");
                setLoading(false);
            });
    }, []);

    return (
        <section id="projects" className="py-24 relative bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projeler</h2>
                    <p className="text-slate-400 text-lg">GitHub üzerindeki açık kaynak çalışmalarım</p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400 py-10">{error}</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {repos.map((repo, i) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-800/30 rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-slate-800/60 group flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-slate-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <Code2 size={24} className="text-indigo-400" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1.5 text-slate-400 text-sm font-medium bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700">
                                            <Star size={14} className="text-yellow-400 fill-yellow-400" /> {repo.stargazers_count}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors truncate">
                                    {repo.name}
                                </h3>

                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {repo.description || "Bu proje için henüz bir açıklama eklenmemiş."}
                                </p>

                                <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-auto">
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                                        {repo.language || "Development"}
                                    </span>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1 text-sm font-medium group/link">
                                        İncele <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="text-center mt-16">
                    <a href="https://github.com/darlen02" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/10">
                        <Github size={20} />
                        GitHub Profilimi Ziyaret Et
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;
