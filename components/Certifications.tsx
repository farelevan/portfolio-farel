'use client'

import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '@/data/portfolioData'

export default function Certifications() {
    return (
        <section className="py-40 px-6 relative bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
                        07. Professional Validation
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Verified <span className="text-gradient-expressive">Certificates.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.a
                            key={cert.id}
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-12 rounded-[3rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-blue-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                                    </div>
                                    <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">{cert.date}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-zinc-500 font-medium mb-8 uppercase text-[10px] tracking-widest">
                                    {cert.issuer}
                                </p>

                                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    Verify Credential
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
