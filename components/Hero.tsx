'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
            setMousePosition({ x: clientX, y: clientY })
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
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
        >
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Large Gradient Blobs */}
                <motion.div
                    style={{ y: y1, x: moveX, rotate }}
                    className="absolute top-[5%] left-[10%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[100px] animate-float"
                />
                <motion.div
                    style={{ y: y2, x: moveY, rotate: -rotate }}
                    className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-pink-600/10 rounded-full blur-[100px] animate-float"
                />

                {/* Floating Glass Orb */}
                <motion.div
                    style={{ x: useTransform(mouseX, [0, 1], [-40, 40]), y: useTransform(mouseY, [0, 1], [-40, 40]) }}
                    className="absolute top-1/3 right-[15%] w-32 h-32 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hidden md:block"
                />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-flex glass-button px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-indigo-300 uppercase gap-2 items-center">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Final Year Computer Science Student
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.9] text-white"
                >
                    TRANSFORMING <br />
                    <span className="glass-text text-white/50">SYSTEMS</span> INTO <br />
                    <span className="text-gradient-accent">SOLUTIONS.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
                >
                    I synthesize <span className="text-white font-medium">technical mastery</span>, <span className="text-white font-medium">system architecture</span>, and <span className="text-white font-medium">business perspective</span> to build efficient, secure, and scalable digital ecosystems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="glass-button px-8 py-4 rounded-xl text-white font-semibold tracking-wide hover:bg-white/10 transition-all flex items-center gap-2 group"
                    >
                        Explore My Work
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-xl text-zinc-400 hover:text-white font-medium transition-colors border border-transparent hover:border-white/10"
                    >
                        Contact Me
                    </a>
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

