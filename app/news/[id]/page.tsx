import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/animated-page";

// Mock news data - in a real app, this would come from a database
const newsData = [
  {
    id: "1",
    title: "University Receives $10M Research Grant",
    date: "March 10, 2025",
    author: "University Communications",
    category: "Research",
    image: "/placeholder.svg?height=500&width=1000",
    excerpt:
      "The National Science Foundation has awarded our university a $10 million grant to advance research in renewable energy technologies.",
    content: `
      <p>The National Science Foundation (NSF) has awarded our university a $10 million grant to advance research in renewable energy technologies. This significant funding will support a five-year research initiative focused on developing next-generation solar energy storage solutions.</p>
      
      <p>The project, led by Dr. Sarah Johnson from the Department of Engineering, will bring together researchers from multiple disciplines including materials science, chemistry, and electrical engineering. The interdisciplinary team aims to create more efficient and cost-effective energy storage systems that can address one of the key challenges in renewable energy adoption.</p>
      
      <p>"This grant represents a tremendous opportunity to make meaningful progress in solving the energy storage challenge," said Dr. Johnson. "By combining expertise from across our university, we're positioned to develop breakthrough technologies that could accelerate the transition to renewable energy sources."</p>
      
      <p>The research will focus on three key areas:</p>
      
      <ul>
        <li>Development of new materials for high-capacity energy storage</li>
        <li>Design of scalable and sustainable battery systems</li>
        <li>Integration of storage solutions with existing renewable energy infrastructure</li>
      </ul>
      
      <p>The project will also provide valuable research opportunities for graduate and undergraduate students, with plans to involve more than 30 students over the five-year period.</p>
      
      <p>University President Dr. Michael Chen expressed pride in the recognition of the university's research capabilities. "This prestigious grant highlights our university's growing reputation as a center for innovative research addressing critical global challenges. The work supported by this funding has the potential to make a significant impact on renewable energy adoption worldwide."</p>
      
      <p>The research team will collaborate with industry partners and other academic institutions to ensure that the technologies developed can be effectively transferred from the laboratory to real-world applications.</p>
    `,
  },
  {
    id: "2",
    title: "New Student Center Opening Next Month",
    date: "March 5, 2025",
    author: "Campus Development Office",
    category: "Campus News",
    image: "/placeholder.svg?height=500&width=1000",
    excerpt:
      "The state-of-the-art student center will open its doors next month, featuring study spaces, dining options, and recreational facilities.",
    content: `
      <p>After two years of construction, our new state-of-the-art student center will officially open its doors next month. The 120,000-square-foot facility represents the university's largest investment in student life infrastructure in the past decade.</p>
      
      <p>Located at the heart of campus, the new center features multiple study spaces, diverse dining options, recreational facilities, and areas designed for student organizations and events. The building incorporates sustainable design elements, including solar panels, rainwater collection systems, and energy-efficient lighting.</p>
      
      <p>"This new student center was designed with input from our students at every stage," said Vice President for Student Affairs, Dr. Lisa Rodriguez. "The result is a space that truly meets the needs of our diverse student body and creates a central hub for campus life."</p>
      
      <p>Key features of the new student center include:</p>
      
      <ul>
        <li>A 300-seat food court with six dining options</li>
        <li>A 24-hour study lounge with individual and group study spaces</li>
        <li>A recreation area with gaming stations and lounge seating</li>
        <li>Office spaces for student government and organizations</li>
        <li>A multipurpose event space that can accommodate up to 500 people</li>
        <li>Outdoor terraces and gathering spaces</li>
      </ul>
      
      <p>The grand opening ceremony is scheduled for April 15, with a week of special events planned to celebrate the new facility. Students, faculty, staff, and alumni are invited to attend the ribbon-cutting ceremony, which will feature remarks from university leadership and student representatives.</p>
      
      <p>"This center represents our commitment to providing students with spaces that support their academic success, foster community, and enhance their overall university experience," said University President Dr. Michael Chen. "We're excited to see how this new facility will transform campus life."</p>
      
      <p>The student center will be open daily from 7:00 AM to midnight, with the 24-hour study lounge accessible at all times with a valid student ID.</p>
    `,
  },
  {
    id: "3",
    title: "University Ranks in Top 50 Globally",
    date: "February 28, 2025",
    author: "University Communications",
    category: "Achievements",
    image: "/placeholder.svg?height=500&width=1000",
    excerpt:
      "Our university has been ranked among the top 50 institutions globally in the latest World University Rankings.",
    content: `
      <p>Our university has achieved its highest-ever position in the prestigious World University Rankings, placing 47th globally in the 2025 edition released yesterday. This represents a significant climb from last year's position at 63rd and marks the first time the university has entered the top 50.</p>
      
      <p>The rankings, which evaluate universities based on teaching quality, research output, international outlook, and industry connections, highlighted our university's exceptional performance in research impact and international collaboration.</p>
      
      <p>"This recognition reflects the dedication and outstanding work of our faculty, researchers, staff, and students," said University President Dr. Michael Chen. "While rankings are just one measure of success, this achievement acknowledges our commitment to excellence in education, research, and global engagement."</p>
      
      <p>The university scored particularly well in the following areas:</p>
      
      <ul>
        <li>Research citations and impact (ranked 32nd globally)</li>
        <li>International collaboration (ranked 28th globally)</li>
        <li>Industry partnerships and innovation (ranked 45th globally)</li>
        <li>Teaching quality and learning environment (ranked 51st globally)</li>
      </ul>
      
      <p>The improved ranking follows several strategic initiatives implemented over the past five years, including increased investment in research infrastructure, expanded international partnerships, and enhanced support for faculty research and teaching innovation.</p>
      
      <p>Dr. James Wilson, Provost and Vice President for Academic Affairs, noted that the ranking reflects the university's growing global reputation. "This achievement is a testament to our university's rising prominence on the world stage. It will help us attract top students and faculty from around the globe and create new opportunities for collaboration with leading institutions."</p>
      
      <p>The university was also recognized for its commitment to sustainability and social impact, areas that have gained increased emphasis in the ranking methodology in recent years.</p>
      
      <p>While celebrating this milestone, university leadership emphasized that the institution's primary focus remains on providing exceptional educational experiences and conducting research that addresses pressing global challenges.</p>
    `,
  },
];

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  // Find the news item with the matching ID
  const newsItem =
    newsData.find((item) => item.id === params.id) || newsData[0];

  return (
    <>
      <AnimatedPage>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6 animate-element">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/news" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to All News
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8 gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{newsItem.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{newsItem.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{newsItem.category}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="relative h-[400px] w-full mb-6 animate-element">
                <Image
                  src={newsItem.image || "/placeholder.svg"}
                  alt={newsItem.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div
                className="prose max-w-none animate-element"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Recent News</h3>
                <ul className="space-y-4">
                  {newsData
                    .filter((item) => item.id !== params.id)
                    .map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/news/${item.id}`}
                          className="text-primary hover:underline"
                        >
                          {item.title}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {item.date}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/news?category=research"
                    className="px-3 py-1 bg-royal-blue-100 text-royal-blue-800 rounded-full text-sm hover:bg-royal-blue-200"
                  >
                    Research
                  </Link>
                  <Link
                    href="/news?category=campus"
                    className="px-3 py-1 bg-royal-blue-100 text-royal-blue-800 rounded-full text-sm hover:bg-royal-blue-200"
                  >
                    Campus News
                  </Link>
                  <Link
                    href="/news?category=achievements"
                    className="px-3 py-1 bg-royal-blue-100 text-royal-blue-800 rounded-full text-sm hover:bg-royal-blue-200"
                  >
                    Achievements
                  </Link>
                  <Link
                    href="/news?category=events"
                    className="px-3 py-1 bg-royal-blue-100 text-royal-blue-800 rounded-full text-sm hover:bg-royal-blue-200"
                  >
                    Events
                  </Link>
                  <Link
                    href="/news?category=academics"
                    className="px-3 py-1 bg-royal-blue-100 text-royal-blue-800 rounded-full text-sm hover:bg-royal-blue-200"
                  >
                    Academics
                  </Link>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Share This Article</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
