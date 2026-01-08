'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { PROJECTS, Project } from '@/data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

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
                    scrub: 0.1,
                    start: "top top",
                    end: `+=${totalSlides * 1000}`,
                }
            })

            return () => scrollTween.kill()
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} id="projects" className="bg-transparent overflow-hidden h-screen">
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
                        <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white/10 select-none relative z-10">
                            Builds <br /> & Projects
                        </h2>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <span className="h-[2px] w-20 bg-blue-500/50" />
                            <p className="text-zinc-400 text-sm tracking-[0.4em] uppercase">
                                Scroll to Explore
                            </p>
                            <span className="h-[2px] w-20 bg-purple-500/50" />
                        </div>
                    </motion.div>
                </div>

                {/* Slides 2+: Project Cards */}
                {PROJECTS.map((project: Project, index: number) => (
                    <div
                        key={index}
                        className="w-screen h-screen flex flex-col justify-center items-center shrink-0 px-6 md:px-24 relative"
                    >
                        <motion.div
                            whileHover={{ y: -10 }}
                            className={`relative w-full max-w-6xl p-8 md:p-16 rounded-[4rem] bg-slate-900/40 backdrop-blur-3xl border border-white/5 group overflow-hidden ${project.shadow} shadow-2xl transition-all duration-500`}
                        >
                            {/* Animated Background Mesh */}
                            <div className={`absolute -right-20 -top-20 w-[600px] h-[600px] bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-1000 blur-[120px]`} />

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-blue-400 uppercase">
                                            0{index + 1}
                                        </span>
                                        <span className="text-zinc-500 text-sm tracking-widest uppercase">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight group-hover:text-blue-400 transition-colors duration-500">
                                        {project.title}
                                    </h3>

                                    <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-10 font-light">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-3 mb-12">
                                        {project.tech?.map((t: string, i: number) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-zinc-300 tracking-wider transition-colors hover:border-blue-500/30">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold uppercase text-xs tracking-[0.2em] transform hover:-translate-y-1 transition-all shadow-lg shadow-blue-500/20">
                                            View Details
                                        </button>
                                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold uppercase text-xs tracking-[0.2em] transition-all">
                                            Live Demo
                                        </button>
                                    </div>
                                </div>

                                <div className="hidden md:block relative group-hover:scale-105 transition-transform duration-700">
                                    <div className={`aspect-video rounded-3xl bg-gradient-to-br ${project.gradient} opacity-20 relative overflow-hidden overflow-hidden border border-white/5`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

