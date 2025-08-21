"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    // Animate the page content
    const elements = page.querySelectorAll(".animate-element")

    gsap.set(elements, {
      y: 50,
      opacity: 0,
    })

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.3, // Delay to allow page transition to complete
    })

    return () => {
      gsap.killTweensOf(elements)
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen">
      {children}
    </div>
  )
}

