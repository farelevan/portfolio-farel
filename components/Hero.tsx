'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 150])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])

    // Mouse ease for background elements
    const springConfig = { damping: 25, stiffness: 120 }
    const mouseX = useSpring(0, springConfig)
    const mouseY = useSpring(0, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const x = clientX / innerWidth
            const y = clientY / innerHeight

            mouseX.set(x)
            mouseY.set(y)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    const moveX = useTransform(mouseX, [0, 1], [-20, 20])
    const moveY = useTransform(mouseY, [0, 1], [-20, 20])
    const rotate = useTransform(scrollY, [0, 500], [0, 15])

    return (
        <section
            ref={containerRef}
            id="home"
            className="section-shell relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
        >
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Large Gradient Blobs */}
                <motion.div
                    style={{ y: y1, x: moveX, rotate }}
                    className="absolute left-[8%] top-[8%] h-[40vw] w-[40vw] rounded-full bg-blue-500/12 blur-[120px] animate-float"
                />
                <motion.div
                    style={{ y: y2, x: moveY, rotate: -rotate }}
                    className="absolute bottom-[10%] right-[10%] h-[35vw] w-[35vw] rounded-full bg-amber-400/10 blur-[100px] animate-float"
                />

                {/* Floating Glass Orb */}
                <motion.div
                    style={{ x: useTransform(mouseX, [0, 1], [-40, 40]), y: useTransform(mouseY, [0, 1], [-40, 40]) }}
                    className="absolute right-[15%] top-1/3 hidden h-32 w-32 rounded-full border border-white/10 bg-white/5 backdrop-blur-md md:block"
                />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-200"></span>
                        </span>
                        Final Year Computer Science Student
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8 text-5xl font-bold leading-[0.9] tracking-tight text-white md:text-8xl lg:text-9xl"
                >
                    BUILDING <br />
                    <span className="text-white/55">SYSTEMS</span> WITH <br />
                    <span className="text-gradient-accent">CLARITY.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl"
                >
                    I turn academic research, product thinking, and engineering discipline into digital experiences that feel
                    <span className="font-medium text-white"> premium</span>, stay
                    <span className="font-medium text-white"> maintainable</span>, and solve
                    <span className="font-medium text-white"> real operational problems</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex flex-col items-center justify-center gap-6 md:flex-row"
                >
                    <a
                        href="#projects"
                        className="glass-button group flex items-center gap-2 rounded-2xl bg-white/8 px-8 py-4 font-semibold tracking-wide text-white transition-all hover:bg-white/10"
                    >
                        Explore Projects
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="rounded-2xl border border-white/10 px-8 py-4 font-medium text-zinc-300 transition-colors hover:text-white"
                    >
                        Start a Conversation
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.8 }}
                    className="mx-auto mt-14 grid max-w-4xl gap-4 text-left md:grid-cols-3"
                >
                    {[
                        ['Systems', 'Academic platforms, structured workflows, and scalable information architecture.'],
                        ['Frontend', 'Motion-driven interfaces with sharper hierarchy, accessibility, and polish.'],
                        ['Strategy', 'A builder mindset that balances user needs, delivery speed, and long-term quality.'],
                    ].map(([title, text]) => (
                        <div key={title} className="glass-card rounded-3xl p-5">
                            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-amber-300">{title}</p>
                            <p className="text-sm leading-6 text-zinc-300">{text}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-linear-to-b from-zinc-500 to-transparent"></div>
            </motion.div>
        </section>
    )
}
