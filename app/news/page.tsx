"use client";

import { useState, useEffect } from "react"; // Import useEffect
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

const ITEMS_PER_PAGE = 6;

export default function AllNewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNewsData = newsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNewsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNewsData = filteredNewsData.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

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
            {/* Main Content Area */}
            <div className="md:col-span-3">
              <AnimatedSectionTitle
                title="Latest News"
                subtitle="Stay informed about the latest happenings at our university"
                className="mb-8"
              />

              {currentNewsData.length > 0 ? (
                // Use a key to re-trigger animations on page change
                <div
                  key={currentPage}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-element"
                >
                  {currentNewsData.map((item) => (
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
              ) : (
                <div className="text-center py-12 animate-element">
                  <p className="text-lg text-muted-foreground">
                    No news articles found matching your search.
                  </p>
                </div>
              )}

              {/* Pagination Controls - only show if there's more than one page */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 animate-element">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => setCurrentPage(page)}
                          className={
                            currentPage === page
                              ? "bg-royal-blue-600 text-white"
                              : ""
                          }
                        >
                          {page}
                        </Button>
                      )
                    )}
                    <Button
                      variant="outline"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Area */}
            <aside className="md:col-span-1 animate-element">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle>Search News</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search articles..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {newsData.slice(0, 4).map((post) => (
                        <li key={post.id}>
                          <Link
                            href={`/news/${post.id}`}
                            className="hover:text-royal-blue-600 line-clamp-2 text-sm"
                          >
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
