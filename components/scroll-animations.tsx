"use client"

import { useEffect } from "react"
import { gsap } from "@/lib/gsap"

export default function ScrollAnimations() {
  useEffect(() => {
    // Set up scroll animations for common elements
    const setupScrollAnimations = () => {
      // Animate headings
      gsap.utils.toArray("h1, h2, h3:not(.no-animation)").forEach((heading: any) => {
        gsap.fromTo(
          heading,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: heading,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        )
      })

      // Animate cards
      gsap.utils.toArray(".card-animation").forEach((card: any) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        )
      })

      // Animate images
      gsap.utils.toArray(".image-animation").forEach((image: any) => {
        gsap.fromTo(
          image,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        )
      })

      // Animate lists
      gsap.utils.toArray(".list-animation li").forEach((item: any, index: number) => {
        gsap.fromTo(
          item,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        )
      })
    }

    // Run once the page is loaded
    if (document.readyState === "complete") {
      setupScrollAnimations()
    } else {
      window.addEventListener("load", setupScrollAnimations)
      return () => window.removeEventListener("load", setupScrollAnimations)
    }
  }, [])

  return null
}

