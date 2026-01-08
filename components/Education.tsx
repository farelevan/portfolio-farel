'use client'

import { motion } from 'framer-motion'
import { EDUCATION } from '@/data/portfolioData'

export default function Education() {
    return (
        <section className="py-40 px-6 relative bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                        06. Educational Foundation
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Academic <span className="text-gradient-expressive">Background.</span></h2>
                </div>

                <div className="grid gap-8 max-w-4xl">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-12 rounded-[3rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-blue-400 text-lg">{edu.degree} in {edu.field}</p>
                                </div>
                                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
                                    {edu.period}
                                </span>
                            </div>
                            {edu.description && (
                                <p className="mt-8 text-zinc-500 text-lg leading-relaxed font-light max-w-3xl">
                                    {edu.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
