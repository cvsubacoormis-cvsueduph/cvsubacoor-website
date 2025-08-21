"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

interface AnimatedSectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function AnimatedSectionTitle({ title, subtitle, className = "" }: AnimatedSectionTitleProps) {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const titleElement = titleRef.current

    if (!titleElement) return

    gsap.fromTo(
      titleElement.children,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: titleElement,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      gsap.killTweensOf(titleElement.children)
    }
  }, [])

  return (
    <div ref={titleRef} className={`flex flex-col items-center justify-center space-y-4 text-center ${className}`}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
        {subtitle && <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">{subtitle}</p>}
      </div>
    </div>
  )
}

