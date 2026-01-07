'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EXPERIENCES } from '@/data/portfolioData'

export default function Experience() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    return (
        <section ref={containerRef} className="py-32 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Professional <span className="text-gradient-expressive">Journey</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Building scalable solutions and creating impact through code.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-white/5 transform -translate-x-1/2 md:hidden" />

                    <div className="space-y-12">
                        {EXPERIENCES.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] transform -translate-x-1/2 z-10 mt-1.5" />

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2">
                                    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors duration-300 group">
                                        <div className="flex flex-col gap-2 mb-4">
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
                                                <span className="font-medium text-zinc-300">{exp.company}</span>
                                                <span>•</span>
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-zinc-300 border border-white/10"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for the other side of timeline on desktop */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
