'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
    {
        category: "Final Year Project",
        title: "Block-Med: Decentralized Medical Records",
        description: "Implemented a secure and decentralized system for storing medical diagnosis data using Ethereum Blockchain technology. Focused on backend smart contract development to ensure data integrity, privacy, and immutability.",
        tech: ["Solidty", "Ethereum", "Smart Contracts", "Web3.js", "Backend Security"],
        gradient: "from-purple-600 to-indigo-600",
        shadow: "shadow-purple-500/20"
    },
    {
        category: "Entrepreneurship Program",
        title: "PawLinc: Pet Service Services",
        description: "A digital platform connecting pet owners with service providers. Led the product concept, validation, and UI/UX design. Built the landing page and prototypes to validate user needs and business viability.",
        tech: ["Product Design", "Figma", "React", "UI/UX", "User Research"],
        gradient: "from-orange-500 to-red-500",
        shadow: "shadow-orange-500/20"
    },
    {
        category: "Enterprise System",
        title: "SIAKAD Pertamina Corp. University",
        description: "Contributed to the core development of the Academic Information System. Handled complex data flows for academic administration, ensuring scalability and integration with existing institutional databases.",
        tech: ["Enterprise System", "Database Management", "System Analysis", "Fullstack Dev"],
        gradient: "from-blue-600 to-cyan-600",
        shadow: "shadow-blue-500/20"
    }
]

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const totalSlides = PROJECTS.length + 1

            const scrollTween = gsap.to(trackRef.current, {
                xPercent: -100 * (totalSlides - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (totalSlides - 1),
                    start: "top top",
                    end: `+=${totalSlides * 1000}`,
                }
            })

            return () => scrollTween.kill()
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} id="projects" className="bg-transparent overflow-hidden h-screen relative">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-950/50 pointer-events-none -z-10" />

            <div
                ref={trackRef}
                className="flex h-full w-fit"
            >
                {/* Slide 1: Section Header */}
                <div className="w-screen h-screen flex items-center justify-center shrink-0 px-12 md:px-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase block mb-6">
                            // 04. Selected Works
                        </span>
                        <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white select-none relative z-10 leading-[0.8]">
                            Key <br /> <span className="text-transparent stroke-text">Projects</span>
                        </h2>
                        <div className="mt-12 flex items-center justify-center gap-4">
                            <span className="h-[2px] w-20 bg-blue-500/50" />
                            <p className="text-zinc-400 text-sm tracking-[0.4em] uppercase">
                                Drag to Explore
                            </p>
                            <span className="h-[2px] w-20 bg-purple-500/50" />
                        </div>
                    </motion.div>
                </div>

                {/* Slides 2+: Project Cards */}
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="w-screen h-screen flex flex-col justify-center items-center shrink-0 px-6 md:px-24 relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`relative w-full max-w-5xl h-[70vh] p-8 md:p-16 rounded-[3rem] glass-card border border-white/10 overflow-hidden flex flex-col justify-between`}
                        >
                            {/* Animated Background Mesh */}
                            <div className={`absolute -right-20 -top-20 w-[600px] h-[600px] bg-gradient-to-br ${project.gradient} opacity-10 blur-[100px] pointer-events-none`} />

                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-white/70 uppercase">
                                            0{index + 1}
                                        </span>
                                        <span className="text-zinc-500 text-sm tracking-widest uppercase font-bold">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
                                        {project.title}
                                    </h3>

                                    <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed mb-12 font-light">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-3">
                                        {project.tech?.map((t, i) => (
                                            <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-zinc-300 tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Line */}
                            <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent mt-8"></div>
                        </motion.div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </div>
    )
}
