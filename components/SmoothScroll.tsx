'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t: number) => {
                const ease = t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                return ease
            },
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            syncTouch: true,
            touchMultiplier: 1.5,
            infinite: false,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return null
}
