"use client"

import { useEffect, useRef } from "react"
import { Award, CheckCircle, Target } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { gsap } from "@/lib/gsap"

export default function QualityPolicy() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current

    if (!cards) return

    // Animate cards
    gsap.fromTo(
      cards.children,
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
          trigger: cards,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    // Animate list items inside cards
    cards.querySelectorAll("li").forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.8 + index * 0.1,
          scrollTrigger: {
            trigger: item.parentElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => {
      gsap.killTweensOf(cards.children)
      gsap.killTweensOf(cards.querySelectorAll("li"))
    }
  }, [])

  return (
    <div ref={cardsRef} className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Mission</CardTitle>
          <Target className="h-6 w-6 text-primary" />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To provide accessible, high-quality education that prepares students for leadership and service in a diverse
            and global society.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Excellence in teaching and learning</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Innovative research and scholarship</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Meaningful community engagement</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Quality Assurance</CardTitle>
          <Award className="h-6 w-6 text-primary" />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We are committed to continuous improvement through rigorous assessment and accreditation processes.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Regular program reviews and updates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Faculty development and evaluation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Student learning outcomes assessment</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Standards</CardTitle>
          <CheckCircle className="h-6 w-6 text-primary" />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We adhere to the highest standards of academic integrity, ethical conduct, and professional excellence.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Accredited by national and international bodies</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Compliance with educational regulations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 text-royal-blue-800" />
              <span>Transparent governance and accountability</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

