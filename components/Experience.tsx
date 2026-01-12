'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCES = [
    {
        id: 1,
        role: "SIAKAD Developer / Contributor",
        company: "Pertamina Corporate University",
        period: "Internship / Contract",
        description: "Contributed to the development and enhancement of the Academic Information System (SIAKAD). Analyzed institutional business processes, developed core features, and collaborated with cross-functional teams to ensure modular architecture and enterprise-grade scalability.",
        skills: ["System Analysis", "Enterprise Architecture", "Feature Integration", "Business Process Mapping"]
    },
    {
        id: 2,
        role: "Co-Founder & Product Developer",
        company: "PawLinc (Wirausaha Merdeka)",
        period: "Entrepreneurship Program",
        description: "Led the concept development and validation of PawLinc, a digital pet service platform. Designed UI/UX prototypes in Figma, developed the landing page, and focused on user-centric solutions within a multidisciplinary team.",
        skills: ["Product Management", "UI/UX Design", "Figma", "User Research", "Frontend Dev"]
    },
    {
        id: 3,
        role: "Web Developer (Cooperative Digitalization)",
        company: "SIMKOPDES & SIMKOPNAS Projects",
        period: "Project Based",
        description: "Developed and maintained web-based cooperative systems for national and regional scales. Adapted features to meet regulatory financial standards and institutional needs, ensuring seamless data flow for members.",
        skills: ["Web Development", "Financial Systems", "Regulatory Compliance", "Git & GitHub"]
    },
    {
        id: 4,
        role: "Teaching Assistant - Web Programming",
        company: "Universitas Pertamina",
        period: "Academic Role",
        description: "Mentored students in web programming concepts (HTML, CSS, JS, Backend). Acted as a bridge between lecturers and students, facilitating technical understanding and problem-solving sessions.",
        skills: ["Mentoring", "Technical Communication", "Web Fundamentals", "Problem Solving"]
    }
]

export default function Experience() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".experience-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} id="experience" className="py-32 px-6 relative bg-transparent">
            {/* Background Elements */}
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-zinc-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                            // 03. Track Record
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                            Professional <br /> <span className="text-gradient-accent">Experience.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="experience-card group relative grid md:grid-cols-12 gap-8 md:gap-12"
                        >
                            {/* Year/Period */}
                            <div className="md:col-span-3 pt-2">
                                <span className="text-zinc-400 font-mono text-xs tracking-widest uppercase border border-white/10 px-3 py-1 rounded-full">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-9 relative pl-8 md:pl-0 border-l border-white/10 md:border-l-0">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] top-3 w-2.5 h-2.5 rounded-full bg-indigo-500 md:hidden animate-pulse" />

                                <div className="p-8 md:p-12 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-indigo-500/10">

                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-indigo-400 font-medium text-lg">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-lg bg-white/5 text-zinc-300 border border-white/5 group-hover:border-indigo-500/20 transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

