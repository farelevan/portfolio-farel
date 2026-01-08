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

    return (
        <section ref={containerRef} id="about" className="py-40 px-6 relative overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

                    {/* Left: Content */}
                    <div className="lg:col-span-7">
                        <motion.div className="about-animate mb-12">
                            <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                                01. The Approach
                            </span>
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white tracking-tighter">
                                Designing for <br />
                                <span className="text-gradient-expressive">Precision & Speed.</span>
                            </h2>
                            <p className="text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl font-light">
                                As a Computer Science student and creative developer, I specialize in bridging the gap between
                                <span className="text-white font-medium"> complex technical architecture </span>
                                and <span className="text-white font-medium"> intuitive user interfaces</span>.
                                My work is driven by a passion for clean code and high-performance engineering.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div className="about-animate p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 group hover:border-blue-500/20 transition-all duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Fullstack Logic</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">Architecting robust backends and reactive frontends that work in perfect harmony.</p>
                            </motion.div>

                            <motion.div className="about-animate p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 group hover:border-purple-500/20 transition-all duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" /></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Motion Physics</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">Implementing fluid animations and transitions that make digital interactions feel alive.</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Stats/Skills */}
                    <div className="lg:col-span-5 pt-12 lg:pt-0">
                        <motion.div className="about-animate h-full border-l border-white/5 pl-12 flex flex-col justify-center">
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-4xl font-black text-white mb-2">99.9%</h4>
                                    <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Optimization Focus</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-black text-white mb-2">5+</h4>
                                    <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Major Projects Built</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-black text-white mb-2">Global</h4>
                                    <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Remote Collaboration Ready</p>
                                </div>
                            </div>

                            <div className="mt-20 pt-12 border-t border-white/5">
                                <p className="text-zinc-500 italic font-light leading-relaxed">
                                    "Code is like humor. When you have to explain it, it's bad."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

