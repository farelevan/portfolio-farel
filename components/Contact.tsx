'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null)
    const btnRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        const btn = btnRef.current
        if (!btn) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            gsap.to(btn, {
                x: x * 0.35,
                y: y * 0.35,
                duration: 0.4,
                ease: "power3.out"
            })
        }

        const handleMouseLeave = () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            })
        }

        btn.addEventListener('mousemove', handleMouseMove)
        btn.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            btn.removeEventListener('mousemove', handleMouseMove)
            btn.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <section
            ref={containerRef}
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden py-32 bg-transparent"
        >
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-indigo-500/5 blur-[120px] rounded-full animate-pulse" />
            </div>

            <div className="relative z-10 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-zinc-500 font-mono text-xs tracking-[0.4em] uppercase block mb-10">
                        // 06. What's Next?
                    </span>
                    <h2 className="text-5xl md:text-9xl font-black tracking-tighter mb-12 text-white leading-[0.9]">
                        LET'S <br />
                        <span className="text-gradient-expressive">COLLABORATE.</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-lg md:text-2xl text-zinc-400 mb-20 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    I'm currently engaged in final year research but open to discussing <span className="text-white">high-impact projects</span> or consulting opportunities.
                </motion.p>

                <div className="flex justify-center">
                    <a
                        href="mailto:contact@farelevan.com"
                        id="contact-cta"
                        ref={btnRef}
                        className="group relative px-16 py-8 rounded-[2rem] overflow-hidden glass-button bg-white/5 border border-white/10"
                    >
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <div className="relative z-10 flex items-center gap-4">
                            <span className="text-white font-black tracking-widest uppercase text-sm">
                                Say Hello
                            </span>
                            <svg className="w-5 h-5 text-white group-hover:-rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>

            <footer className="absolute bottom-12 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
                <div className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">
                    © 2026 FAREL EVAN — BUILD WITH PASSION
                </div>
                <div className="flex gap-12">
                    <a href="https://linkedin.com" target="_blank" className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">
                        LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">
                        Github
                    </a>
                    <a href="mailto:email@example.com" className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">
                        Email
                    </a>
                </div>
            </footer>
        </section>
    )
}
