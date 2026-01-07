'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Character-based animation for headline
            const title = titleRef.current
            if (title) {
                const text = title.innerText
                title.innerHTML = text.split('').map(char =>
                    `<span class="inline-block opacity-0 translate-y-8 char-hero">${char === ' ' ? '&nbsp;' : char}</span>`
                ).join('')

                gsap.to('.char-hero', {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: 'back.out(1.7)',
                    delay: 0.5
                })
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
        >
            {/* Morphing Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-accent/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] bg-cyan-accent/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[30%] h-[30%] bg-pink-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-wider text-purple-accent mb-8">
                        CREATIVE DEVELOPER & CS STUDENT
                    </span>
                </motion.div>

                <h1
                    ref={titleRef}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-white"
                >
                    Hi, I&apos;m Farel. I build interactive systems.
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Passionate about <span className="text-white font-medium">web development</span>,
                    <span className="text-white font-medium"> automation</span>, and crafting
                    modern digital experiences that push boundaries.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-12"
                >
                    <button className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-accent via-blue-accent to-cyan-accent opacity-80 group-hover:opacity-100 animate-gradient" />
                        <span className="relative z-10 text-white font-bold tracking-widest uppercase text-sm">
                            Explore My Work
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    )
}
