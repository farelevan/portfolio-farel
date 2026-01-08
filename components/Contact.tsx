'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)

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
            {/* Premium Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase block mb-10">
                        03. The Connection
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 text-white leading-[0.9]">
                        READY TO <br />
                        <span className="text-gradient-expressive">COLLABORATE?</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-lg md:text-xl text-zinc-500 mb-20 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    I&apos;m currently looking for new opportunities and interesting projects to work on.
                    Whether you have a question or just want to say hi, my inbox is always open.
                </motion.p>

                <div className="flex justify-center">
                    <button
                        id="contact-cta"
                        ref={btnRef}
                        className="group relative px-16 py-8 rounded-[2rem] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white group-hover:bg-blue-50 transition-colors duration-500" />
                        <span className="relative z-10 text-black font-black tracking-widest uppercase text-sm">
                            Send a Message
                        </span>
                    </button>
                </div>
            </div>

            <footer className="absolute bottom-12 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
                <div className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
                    © 2026 FAREL EVAN — ALL RIGHTS RESERVED
                </div>
                <div className="flex gap-8">
                    {['LinkedIn', 'Github', 'Instagram'].map(link => (
                        <a key={link} href="#" className="text-zinc-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">
                            {link}
                        </a>
                    ))}
                </div>
            </footer>
        </section>
    )
}
