"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "@/lib/gsap"

export default function ImageGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  // Array of image placeholders
  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Campus Life 1",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Campus Life 2",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Campus Life 3",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Campus Life 4",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Campus Life 5",
    },
  ]

  useEffect(() => {
    const gallery = galleryRef.current
    const title = titleRef.current

    if (!gallery || !title) return

    // Animate the title
    gsap.fromTo(
      title.children,
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
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    // Create a staggered animation for the gallery items
    gsap.fromTo(
      gallery.children,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gallery,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    // Add hover animation
    gallery.childNodes.forEach((child) => {
      const element = child as HTMLElement

      element.addEventListener("mouseenter", () => {
        gsap.to(element.querySelector("img"), {
          scale: 1.1,
          duration: 0.3,
        })
      })

      element.addEventListener("mouseleave", () => {
        gsap.to(element.querySelector("img"), {
          scale: 1,
          duration: 0.3,
        })
      })
    })

    return () => {
      gsap.killTweensOf(gallery.children)
      gsap.killTweensOf(title.children)

      // Remove event listeners
      gallery.childNodes.forEach((child) => {
        const element = child as HTMLElement
        element.removeEventListener("mouseenter", () => {})
        element.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-royal-blue-50/80 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div ref={titleRef} className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Campus Life</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Experience the vibrant and diverse community at our university
            </p>
          </div>
        </div>
        <div
          ref={galleryRef}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-3 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6"
        >
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg group">
              <div className="relative aspect-square w-full sm:aspect-[3/4]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

