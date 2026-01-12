'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const SKILLS_CATEGORIES = [
    {
        title: "Software & Web Development",
        description: "Building modern, scalable web applications.",
        gradient: "from-blue-600 to-indigo-600",
        skills: ["React & Next.js", "TypeScript / JavaScript", "TailwindCSS & Designs", "API Integration", "Clean Code Architecture"]
    },
    {
        title: "Systems & Digital Transformation",
        description: "Designing institutional-scale information systems.",
        gradient: "from-emerald-600 to-teal-600",
        skills: ["SIAKAD Development", "Enterprise Systems", "Business Process Analysis", "System Digitalization", "Requirement Analysis"]
    },
    {
        title: "Blockchain & Web3",
        description: "Implementing secure, decentralized solutions.",
        gradient: "from-purple-600 to-pink-600",
        skills: ["Smart Contracts", "Ethereum & Polygon", "Decentralized Data", "Web3 Security", "Blockchain Medical Records"]
    },
    {
        title: "Data & Architecture",
        description: "Managing data flow and system integrity.",
        gradient: "from-orange-500 to-red-500",
        skills: ["Data Validation", "System Logic Design", "Database Handling", "Data-Driven Decisions", "Security Best Practices"]
    },
    {
        title: "Leadership & Strategy",
        description: "Leading teams and bridging technical communication.",
        gradient: "from-cyan-600 to-blue-500",
        skills: ["Team Leadership", "Project Management", "Technical Communication", "Stakeholder Collaboration", "Conflict Management"]
    }
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
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-32 px-6 relative bg-transparent">
            {/* Background Glow */}
            <div className="absolute center w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <span className="text-zinc-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                        // 02. Expertise
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                        Technical <span className="text-gradient-accent">Arsenal.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building robust, scalable, and modern digital solutions across various domains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS_CATEGORIES.map((category, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className={`skill-node group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden flex flex-col h-full`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

                            <div className="relative z-10 flex-1">
                                <div className={`w-12 h-1 rounded-full mb-6 bg-linear-to-r ${category.gradient}`} />
                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{category.title}</h3>
                                <p className="text-zinc-500 text-sm mb-6 leading-relaxed min-h-[40px]">{category.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
