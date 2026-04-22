'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const NAV_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { scrollYProgress } = useScroll()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-5 transition-all duration-500"
        >
            <div className={`
                relative flex items-center gap-2 overflow-hidden rounded-full border px-3 py-2 transition-all duration-500
                ${scrolled ? 'border-white/10 bg-slate-950/70 shadow-2xl shadow-black/30 backdrop-blur-xl' : 'border-white/5 bg-slate-950/25 backdrop-blur-md'}
            `}>
                {/* Scroll Progress Indicator */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                />

                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="group relative px-4 py-2 text-sm font-medium text-zinc-300/80 transition-colors hover:text-white"
                    >
                        {item.name}
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-center scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                ))}
            </div>
        </motion.nav>
    )
}
