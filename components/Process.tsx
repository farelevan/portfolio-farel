'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
    { label: "ideation", desc: "Formulating concepts through research", accent: "text-purple-accent" },
    { label: "design", desc: "Expressive visual & system architecting", accent: "text-blue-accent" },
    { label: "build", desc: "Technical implementation & React engineering", accent: "text-cyan-accent" },
    { label: "automate", desc: "Developing efficient digital workflows", accent: "text-emerald-500" },
    { label: "ship", desc: "Deploying production-grade experiences", accent: "text-pink-accent" }
]

export default function Process() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".process-line", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                },
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out"
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-40 px-6 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">Workflow.exe</h2>
                    <div className="inline-block px-4 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-500 font-mono text-xs uppercase animate-pulse">Status: Operational</div>
                </div>

                <div className="space-y-12 font-mono">
                    {STEPS.map((step, index) => (
                        <div key={index} className="process-line group flex flex-col md:flex-row md:items-center gap-4 border-l border-white/5 pl-8 md:pl-12 relative">
                            <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-zinc-800 transition-colors duration-300 group-hover:bg-purple-accent group-hover:shadow-[0_0_10px_var(--accent-purple)]" />

                            <span className={`text-2xl md:text-4xl font-bold uppercase tracking-widest transition-all duration-300 group-hover:scale-105 ${step.accent}`}>
                                {step.label}
                            </span>

                            <span className="hidden md:block h-px flex-1 bg-white/5" />

                            <p className="text-zinc-500 text-sm md:text-lg group-hover:text-zinc-300 transition-colors">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
