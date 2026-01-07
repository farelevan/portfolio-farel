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
        <section ref={containerRef} className="py-32 px-6 relative">
            <div className="max-w-6xl mx-auto text-center mb-20">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">Technological Arsenal</h2>
                <p className="text-zinc-500 text-lg">Hover to activate the core systems</p>
            </div>

            <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className={`skill-node group relative px-10 py-12 rounded-3xl bg-white/5 border border-white/10 cursor-pointer flex flex-col items-center justify-center overflow-hidden min-w-[240px]`}
                    >
                        {/* Background Gradient Identity */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`} />

                        <div className={`w-3 h-3 rounded-full mb-6 bg-gradient-to-r ${skill.gradient} shadow-[0_0_15px_rgba(255,255,255,0.5)]`} />

                        <span className="text-2xl font-bold text-white group-hover:text-gradient-expressive transition-colors duration-300">
                            {skill.name}
                        </span>

                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className={`text-xs uppercase tracking-widest font-mono text-zinc-400`}>System Active</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
