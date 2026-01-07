'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
    {
        title: "Vortex Algo Trader",
        category: "Fintech & Automation",
        description: "High-frequency trading interface processing 50k+ events/sec with real-time WebGL data visualization.",
        gradient: "from-blue-600/80 to-purple-600/80",
        shadow: "shadow-blue-500/20"
    },
    {
        title: "Lumina Design System",
        category: "Infrastructure",
        description: "A framework-agnostic component library focusing on accessibility, micro-interactions, and motion physics.",
        gradient: "from-purple-600/80 to-pink-600/80",
        shadow: "shadow-purple-500/20"
    },
    {
        title: "Nebula Data Pipeline",
        category: "Cloud Engineering",
        description: "Serverless architecture for processing petabyte-scale datasets with automated anomaly detection.",
        gradient: "from-pink-600/80 to-orange-500/80",
        shadow: "shadow-pink-500/20"
    },
    {
        title: "EcoSphere Simulation",
        category: "Interactive 3D",
        description: "Browser-based climate simulation using Three.js and Rust (Wasm) for physics calculations.",
        gradient: "from-emerald-500/80 to-cyan-500/80",
        shadow: "shadow-emerald-500/20"
    }
]

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a unified horizontal scroll
            // Track width = (number of projects + 1 title slide) * 100vw
            const totalSlides = PROJECTS.length + 1

            const scrollTween = gsap.to(trackRef.current, {
                xPercent: -100 * (totalSlides - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 0.1,
                    start: "top top",
                    end: `+=${totalSlides * 1000}`, // Adjust scroll length based on content
                }
            })

            return () => scrollTween.kill()
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        // The container that gets pinned
        <div ref={containerRef} className="bg-background overflow-hidden h-screen">

            {/* The moving track containing Header + Projects */}
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
                        <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white/5 select-none relative z-10">
                            Featured <br /> Projects
                        </h2>
                        <p className="text-zinc-500 mt-6 text-xl tracking-widest uppercase">
                            &larr; Scroll to Explore &rarr;
                        </p>
                    </motion.div>
                </div>

                {/* Slides 2+: Project Cards */}
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="w-screen h-screen flex flex-col justify-center items-center shrink-0 px-6 md:px-24 relative"
                    >
                        <motion.div
                            whileHover={{ y: -10 }}
                            className={`relative w-full max-w-5xl p-12 md:p-20 rounded-[3rem] bg-zinc-900/40 backdrop-blur-3xl border border-white/5 group overflow-hidden ${project.shadow} shadow-2xl`}
                        >
                            {/* Background Decorative Gradient */}
                            <div className={`absolute -right-20 -top-20 w-[600px] h-[600px] bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-[100px]`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-zinc-500 font-mono text-sm tracking-[0.3em] uppercase block">
                                        0{index + 1} | {project.category}
                                    </span>
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`} />
                                </div>

                                <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none group-hover:text-gradient-expressive transition-all duration-500">
                                    {project.title}
                                </h3>

                                <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <button className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:scale-105 transition-transform duration-300">
                                        View Case Study
                                    </button>
                                    <button className="px-8 py-4 border border-white/10 text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-colors duration-300">
                                        Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
