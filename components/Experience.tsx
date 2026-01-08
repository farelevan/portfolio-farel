'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '@/data/portfolioData'

export default function Experience() {
    const containerRef = useRef(null)

    return (
        <section ref={containerRef} id="experience" className="py-40 px-6 relative bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                            02. The Expertise
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                            Professional <br /> <span className="text-gradient-expressive">Record.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-zinc-500 max-w-sm mb-4 font-light leading-relaxed"
                    >
                        A timeline of my professional growth, technical contributions, and impact in the industry.
                    </motion.p>
                </div>

                <div className="relative space-y-32">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative grid md:grid-cols-12 gap-12"
                        >
                            {/* Year/Period */}
                            <div className="md:col-span-3">
                                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase block pt-2">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-9 relative pl-12 md:pl-0 border-l border-white/5 md:border-l-0">
                                {/* Mobile Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 md:hidden" />

                                <div className="p-10 md:p-16 rounded-[3rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/20 transition-all duration-700 relative overflow-hidden group-hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors" />

                                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-8">
                                        <div className="flex-1">
                                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                                {exp.role}
                                            </h3>
                                            <p className="text-blue-400 font-medium mb-8 text-lg">
                                                {exp.company}
                                            </p>
                                            <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light max-w-3xl">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3">
                                                {exp.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase rounded-xl bg-white/5 text-zinc-300 border border-white/5 hover:border-blue-500/30 transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

