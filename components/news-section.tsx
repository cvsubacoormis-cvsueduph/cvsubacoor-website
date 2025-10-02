"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { gsap } from "@/lib/gsap"

export default function NewsSection() {
  const newsRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  const newsItems = [
    {
      id: "1",
      title: "University Receives $10M Research Grant",
      date: "March 10, 2025",
      excerpt:
        "The National Science Foundation has awarded our university a $10 million grant to advance research in renewable energy technologies.",
      link: "/news/1",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "2",
      title: "New Student Center Opening Next Month",
      date: "March 5, 2025",
      excerpt:
        "The state-of-the-art student center will open its doors next month, featuring study spaces, dining options, and recreational facilities.",
      link: "/news/2",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "3",
      title: "University Ranks in Top 50 Globally",
      date: "February 28, 2025",
      excerpt:
        "Our university has been ranked among the top 50 institutions globally in the latest World University Rankings.",
      link: "/news/3",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  useEffect(() => {
    const newsCards = newsRef.current
    const button = buttonRef.current

    if (!newsCards || !button) return

    // Animate news cards
    gsap.fromTo(
      newsCards.children,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: newsCards,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    // Animate button
    gsap.fromTo(
      button,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.8,
        scrollTrigger: {
          trigger: button,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      gsap.killTweensOf(newsCards.children)
      gsap.killTweensOf(button)
    }
  }, [])

  return (
    <>
      <div ref={newsRef} className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col overflow-hidden transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {item.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="line-clamp-3 text-sm sm:text-base">{item.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={item.link}
                className="inline-flex items-center text-sm font-medium text-royal-blue-800 hover:text-royal-blue-600 transition-colors"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div ref={buttonRef} className="flex justify-center">
        <Button
          asChild
          variant="outline"
          className="border-royal-blue-800 text-royal-blue-800 hover:bg-royal-blue-700 transition-all duration-300 hover:scale-105"
        >
          <Link href="/news" className="inline-flex items-center gap-1">
            View All News <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  )
}

