"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

export default function StickyHeader({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    // Function to handle scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // If scrolling down and past 100px
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(header, {
          yPercent: -100,
          duration: 0.3,
          ease: "power3.out",
        })
      } else {
        // If scrolling up or at the top
        gsap.to(header, {
          yPercent: 0,
          duration: 0.3,
          ease: "power3.out",
        })
      }

      lastScrollY.current = currentScrollY
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={headerRef} className="sticky top-0 z-50 w-full transition-all duration-300">
      {children}
    </div>
  )
}

