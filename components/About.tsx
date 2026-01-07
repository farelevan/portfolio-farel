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
            gsap.from(".about-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-40 px-6 relative overflow-hidden">
            <div className="glow-mesh opacity-50" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                        Driven by <span className="text-gradient-expressive">curiosity</span>.
                    </h2>
                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                        As a Computer Science student, I view every challenge as an opportunity to build something more efficient and expressive. My journey is defined by a deep-seated interest in how modern digital systems interact and automate our lives.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="about-card p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-xl font-bold mb-2 text-white relative z-10">Problem Solver</h3>
                        <p className="text-zinc-400 relative z-10">I don&apos;t just build features; I architect solutions that scale and perform under pressure.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="about-card p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-xl font-bold mb-2 text-white relative z-10">Tech Explorer</h3>
                        <p className="text-zinc-400 relative z-10">Constantly diving into new frameworks and tools to push the boundaries of what&apos;s possible on the web.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
