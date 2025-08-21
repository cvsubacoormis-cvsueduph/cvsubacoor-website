"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "@/lib/gsap"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const pageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Run animation when pathname changes
  useEffect(() => {
    const page = pageRef.current
    const overlay = overlayRef.current

    if (!page || !overlay) return

    // Create a timeline for the page transition
    const tl = gsap.timeline()

    // Initial state - page is hidden, overlay is visible
    tl.set(page, { opacity: 0, y: 20 })
    tl.set(overlay, { opacity: 1, y: 0 })

    // Animate overlay out and page in
    tl.to(overlay, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.out",
    })
    tl.to(
      page,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3",
    )

    return () => {
      tl.kill()
    }
  }, [pathname])

  return (
    <div className="relative">
      {/* Overlay for transition effect */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-royal-blue-800 pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Page content */}
      <div ref={pageRef}>{children}</div>
    </div>
  )
}

