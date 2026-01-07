'use client'

import { motion } from 'framer-motion'
import { EDUCATION } from '@/data/portfolioData'

export default function Education() {
    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                        Education
                    </h2>

                    <div className="grid gap-6">
                        {EDUCATION.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-zinc-400 text-sm">{edu.degree} in {edu.field}</p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 w-fit">
                                        {edu.period}
                                    </span>
                                </div>
                                {edu.description && (
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {edu.description}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
