'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])
    const rotate = useTransform(scrollY, [0, 500], [0, 45])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const title = titleRef.current
            if (title) {
                const text = title.innerText
                title.innerHTML = text.split('').map(char =>
                    `<span class="inline-block opacity-0 translate-y-12 char-hero">${char === ' ' ? '&nbsp;' : char}</span>`
                ).join('')

                gsap.to('.char-hero', {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.02,
                    ease: 'expo.out',
                    delay: 0.2
                })
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
        >
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{ y: y1, rotate }}
                    className="absolute top-[10%] left-[15%] w-[30vw] h-[30vw] border border-blue-500/10 rounded-[4rem] blur-sm"
                />
                <motion.div
                    style={{ y: y2, rotate: -rotate }}
                    className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] border border-purple-500/10 rounded-full blur-sm"
                />

                {/* Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 text-center max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase mb-10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for Projects
                    </div>
                </motion.div>

                <h1
                    ref={titleRef}
                    className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-white"
                >
                    BUILDING <br /> DIGITAL <br /> <span className="text-gradient-expressive">SYNERGY.</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    Farel Evan — A Creative Developer blending <span className="text-white font-medium">high-performance engineering</span> with
                    <span className="text-white font-medium"> meticulous design</span> to create systems that resonate.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a href="#projects" className="group relative px-10 py-5 rounded-2xl overflow-hidden transition-all duration-500">
                        <div className="absolute inset-0 bg-white" />
                        <span className="relative z-10 text-black font-bold tracking-widest uppercase text-xs">
                            View Portfolio
                        </span>
                    </a>
                    <a href="#contact" className="px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-white font-bold tracking-widest uppercase text-xs">
                        Start a Project
                    </a>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    )
}

