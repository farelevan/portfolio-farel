'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-animate", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const VALUES = [
        {
            title: "Adaptive & Fast Learner",
            desc: "Rapidly adapting to modern tech stacks and environments.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: "text-yellow-400",
            bg: "bg-yellow-400/10"
        },
        {
            title: "Systematic Solutif",
            desc: "Combining technical logic with business perspective to solve real problems.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            title: "Collaborative Leadership",
            desc: "Experienced in leading cross-functional teams and organizational strategy.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            color: "text-green-400",
            bg: "bg-green-400/10"
        },
        {
            title: "Growth & Quality",
            desc: "Focusing on clean code, modular architecture, and long-term sustainability.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            color: "text-purple-400",
            bg: "bg-purple-400/10"
        }
    ]

    return (
        <section ref={containerRef} id="about" className="py-32 px-6 relative overflow-hidden bg-transparent">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left: Bio */}
                    <div className="lg:col-span-7">
                        <motion.div className="about-animate mb-12">
                            <span className="text-indigo-400 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                                // 01. Profile
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white tracking-tight">
                                Bridging Logic & <br />
                                <span className="text-gradient-accent">Strategic Vision.</span>
                            </h2>
                            <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed">
                                <p>
                                    I am a <strong className="text-white font-semibold">Final Year Computer Science Student</strong> at Universitas Pertamina, specializing in
                                    web-based systems, institutional information systems, and modern technology (including Blockchain) to solve complex real-world problems.
                                </p>
                                <p>
                                    With experience in <strong className="text-white font-semibold">building academic systems (SIAKAD)</strong>, leading digital transformation projects for cooperatives,
                                    and developing user-centric products like PawLinc, I thrive in collaborative environments that value structure and quality.
                                </p>
                                <p>
                                    My approach combines deep technical expertise with a business perspective to create solutions that are not just functional, but
                                    <span className="italic text-white"> efficient, secure, and relevant</span>.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {VALUES.map((val, idx) => (
                                <motion.div
                                    key={idx}
                                    className="about-animate glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <div className={`w-10 h-10 rounded-xl ${val.bg} ${val.color} flex items-center justify-center mb-4`}>
                                        {val.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-white">{val.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{val.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Vision/Stats */}
                    <div className="lg:col-span-5 pt-12 lg:pt-0">
                        <motion.div className="about-animate glass-panel p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-2xl font-bold text-white mb-6">Future Vision</h3>
                            <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                                "To build a sustainable technology ecosystem—encompassing digital services, automation, and education—creating real impact and a lasting legacy through technology."
                            </p>

                            <div className="space-y-6 border-t border-white/5 pt-8">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-black text-white">BS</div>
                                    <div className="text-xs uppercase tracking-widest text-zinc-500">
                                        Computer Science <br /> Universitas Pertamina
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-black text-white">Web3</div>
                                    <div className="text-xs uppercase tracking-widest text-zinc-500">
                                        Blockchain & <br /> Decentralized Logic
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex gap-2">
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-400">#CleanCode</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-400">#SystemDesign</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-400">#Leadership</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

