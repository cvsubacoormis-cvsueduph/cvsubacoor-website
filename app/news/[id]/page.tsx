import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/animated-page";
import { newsData } from "@/data/news";

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
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
