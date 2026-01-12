'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const NAV_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#skills' },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center py-6 px-4`}
        >
            <div className={`
                flex items-center gap-2 px-6 py-3 rounded-full 
                ${scrolled ? 'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'}
                transition-all duration-500 relative overflow-hidden
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
                        className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                    >
                        {item.name}
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
                    </a>
                ))}
            </div>
        </motion.nav>
    )
}
