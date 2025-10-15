import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AnimatedPage from "@/components/animated-page";
import AnimatedSectionTitle from "@/components/animated-section-title";

// Mock news data - in a real app, this would come from a database
const newsData = [
  {
    id: "1",
    title: "University Receives $10M Research Grant",
    date: "March 10, 2025",
    category: "Research",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "The National Science Foundation has awarded our university a $10 million grant to advance research in renewable energy technologies.",
  },
  {
    id: "2",
    title: "New Student Center Opening Next Month",
    date: "March 5, 2025",
    category: "Campus News",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "The state-of-the-art student center will open its doors next month, featuring study spaces, dining options, and recreational facilities.",
  },
  {
    id: "3",
    title: "University Ranks in Top 50 Globally",
    date: "February 28, 2025",
    category: "Achievements",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "Our university has been ranked among the top 50 institutions globally in the latest World University Rankings.",
  },
  {
    id: "4",
    title: "Annual Research Symposium Scheduled for May",
    date: "February 20, 2025",
    category: "Events",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "The university will host its annual Research Symposium on May 15-16, showcasing innovative projects from students and faculty across all disciplines.",
  },
  {
    id: "5",
    title: "New International Exchange Programs Announced",
    date: "February 15, 2025",
    category: "Academics",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "The Office of International Programs has established new exchange partnerships with universities in Singapore, South Korea, and Germany.",
  },
  {
    id: "6",
    title: "University Library Completes Digital Archive Project",
    date: "February 10, 2025",
    category: "Campus News",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "After three years of work, the university library has completed the digitization of its rare manuscript collection, making these valuable resources available online.",
  },
  {
    id: "7",
    title: "Engineering Students Win National Competition",
    date: "February 5, 2025",
    category: "Achievements",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "A team of engineering students has won first place in the National Robotics Design Competition with their innovative autonomous navigation system.",
  },
  {
    id: "8",
    title: "University Launches New Sustainability Initiative",
    date: "January 28, 2025",
    category: "Campus News",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "The university has announced a comprehensive sustainability plan aimed at achieving carbon neutrality by 2030 through renewable energy adoption and waste reduction.",
  },
  {
    id: "9",
    title: "Faculty Member Receives Prestigious Award",
    date: "January 20, 2025",
    category: "Achievements",
    image: "/placeholder.svg?height=200&width=400",
    excerpt:
      "Dr. Elizabeth Chen from the Department of Biology has been awarded the National Medal of Science for her groundbreaking research in cellular regeneration.",
  },
];

export default function AllNewsPage() {
  return (
    <>
      <AnimatedPage>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6 animate-element">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">
              University News & Updates
            </h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>News</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <AnimatedSectionTitle
                title="Latest News"
                subtitle="Stay informed about the latest happenings at our university"
                className="mb-8"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-element">
                {newsData.map((item) => (
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
                      <CardTitle className="line-clamp-2">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="line-clamp-3 text-sm sm:text-base">
                        {item.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/news/${item.id}`}
                        className="inline-flex items-center text-sm font-medium text-royal-blue-800 hover:text-royal-blue-600 transition-colors"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8 animate-element">
                <div className="flex gap-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" className="bg-royal-blue-50">
                    1
                  </Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Search News</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search news..."
                    className="pl-8"
                  />
                </div>
                <Button className="w-full mt-4">Search</Button>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/news?category=all"
                    className="text-royal-blue-800 hover:text-royal-blue-600 font-medium"
                  >
                    All News
                  </Link>
                  <Link
                    href="/news?category=research"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    Research (2)
                  </Link>
                  <Link
                    href="/news?category=campus"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    Campus News (3)
                  </Link>
                  <Link
                    href="/news?category=achievements"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    Achievements (3)
                  </Link>
                  <Link
                    href="/news?category=events"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    Events (1)
                  </Link>
                  <Link
                    href="/news?category=academics"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    Academics (1)
                  </Link>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Archives</h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/news?month=march-2025"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    March 2025 (2)
                  </Link>
                  <Link
                    href="/news?month=february-2025"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    February 2025 (5)
                  </Link>
                  <Link
                    href="/news?month=january-2025"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    January 2025 (2)
                  </Link>
                  <Link
                    href="/news?month=december-2024"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    December 2024 (4)
                  </Link>
                  <Link
                    href="/news?month=november-2024"
                    className="text-royal-blue-800 hover:text-royal-blue-600"
                  >
                    November 2024 (3)
                  </Link>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
                <p className="mb-4 text-sm">
                  Receive the latest news and updates directly in your inbox.
                </p>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="mb-4"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
