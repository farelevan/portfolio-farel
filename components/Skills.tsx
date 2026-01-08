'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
    { name: "Web Development", gradient: "from-purple-600 to-blue-600" },
    { name: "Automation", gradient: "from-blue-600 to-cyan-600" },
    { name: "React / Next.js", gradient: "from-cyan-600 to-emerald-600" },
    { name: "Data Handling", gradient: "from-emerald-600 to-pink-600" },
    { name: "System Thinking", gradient: "from-pink-600 to-purple-600" },
    { name: "GSAP / Motion", gradient: "from-orange-500 to-red-500" }
]

export default function Skills() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-node", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)"
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-40 px-6 relative bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center">
                    <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                        05. Technical Stack
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Technological <span className="text-gradient-expressive">Arsenal.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className={`skill-node group relative p-12 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 overflow-hidden`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className={`w-2 h-10 rounded-full mb-8 bg-gradient-to-b ${skill.gradient}`} />
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{skill.name}</h3>
                                <p className="text-zinc-500 text-sm font-light">Expertise in building scalable systems and interactive interfaces.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
