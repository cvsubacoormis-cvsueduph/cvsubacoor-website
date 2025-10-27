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
import { newsData } from "@/data/news";

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
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
