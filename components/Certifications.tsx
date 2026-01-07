'use client'

import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '@/data/portfolioData'

export default function Certifications() {
    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                        Certifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CERTIFICATIONS.map((cert, index) => (
                            <motion.a
                                key={cert.id}
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">
                                                {cert.name}
                                            </h3>
                                            <p className="text-sm text-zinc-400">{cert.issuer}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-xs text-zinc-500 font-mono">
                                            Issued: {cert.date}
                                        </span>
                                        <span className="text-xs text-pink-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                            Verify Credential →
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
