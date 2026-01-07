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
            className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden py-32"
        >
            {/* Converging Gradient background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-radial from-purple-accent/10 to-transparent blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 text-center max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-8xl font-black tracking-tighter mb-12 text-white leading-[0.9]"
                >
                    Let&apos;s create something <br />
                    <span className="text-gradient-expressive">impactful together.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg md:text-2xl text-zinc-500 mb-20 font-light"
                >
                    Open for creative collaborations, technical challenges, <br /> and modern digital system building.
                </motion.p>

                <div className="flex justify-center">
                    <button
                        id="contact-cta"
                        ref={btnRef}
                        className="group relative px-16 py-8 rounded-full overflow-hidden scale-110"
                    >
                        {/* Animated Pulse Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-accent via-cyan-accent to-pink-accent opacity-90 group-hover:opacity-100 animate-gradient" />
                        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <span className="relative z-10 text-white font-black tracking-widest uppercase text-lg">
                            Get in Touch
                        </span>
                    </button>
                </div>
            </div>

            <footer className="absolute bottom-12 text-zinc-700 text-sm font-mono tracking-widest uppercase">
                Built with curiosity © 2024 FAREL EVAN
            </footer>
        </section>
    )
}
