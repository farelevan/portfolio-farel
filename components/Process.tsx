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
        <section ref={containerRef} className="py-40 px-6 relative overflow-hidden bg-transparent">
            {/* Top Border Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-5xl mx-auto">
                <div className="mb-24 text-center">
                    <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                        04. The Method
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">System <span className="text-gradient-expressive">Architecture.</span></h2>
                </div>

                <div className="space-y-4">
                    {STEPS.map((step, index) => (
                        <div key={index} className="process-line group flex flex-col md:flex-row md:items-center gap-8 p-10 rounded-[2.5rem] bg-slate-900/10 border border-white/0 hover:border-white/5 hover:bg-slate-900/30 transition-all duration-500 relative">
                            <div className="flex items-center gap-6 md:w-1/3">
                                <span className="text-zinc-600 font-mono text-xs">0{index + 1}</span>
                                <span className={`text-2xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-300 ${step.accent}`}>
                                    {step.label}
                                </span>
                            </div>

                            <p className="text-zinc-500 text-lg group-hover:text-zinc-300 transition-colors font-light">
                                {step.desc}
                            </p>

                            <div className="absolute right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
