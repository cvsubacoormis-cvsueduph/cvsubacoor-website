"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AnimatedPage from "@/components/animated-page";
import { courses } from "@/data/courses";
import { useEffect, useState } from "react";
import { AcademicProgramsPageSkeleton } from "@/components/skeleton/AcademicProgramsPageSkeleton";

export default function AcademicProgramsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <AcademicProgramsPageSkeleton />;
  }

  return (
    <>
      <AnimatedPage>
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-6 animate-element">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">Academic Programs</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Admission
              <span className="mx-2">/</span>
              <span>Academic Programs</span>
            </div>
          </div>

          {/* Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 animate-element">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Discover Your Path to Excellence
              </h2>
              <p className="mb-4">
                Our university offers a wide range of academic programs designed
                to prepare students for successful careers and meaningful
                contributions to society.
              </p>
              <p className="mb-4">
                With a focus on academic excellence, practical experience, and
                innovative research, our programs provide students with the
                knowledge, skills, and perspectives needed to thrive in a
                rapidly changing world.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/at-glance-bg.png"
                alt="University Students in Classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="undergraduate" className="mb-2 animate-element">
            <TabsContent value="undergraduate" className="pt-2">
              <Card className="col-span-3">
                <CardHeader className="bg-royal-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Academic Programs
                  </CardTitle>
                  <CardDescription>
                    Our academic programs are designed to develop well-rounded
                    professionals equipped with the knowledge and skills needed
                    in today’s competitive world.
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {courses.map((dept) => (
                      <div key={dept.id}>
                        <h4 className="font-bold text-sm mb-2">
                          {dept.department}
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {dept.programs.map((program) => (
                            <li key={program.id}>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button className="text-left hover:underline hover:text-royal-blue-600 transition-colors">
                                    {program.name}
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[650px] rounded-2xl p-0 overflow-hidden">
                                  <div className="bg-gradient-to-r bg-royal-blue-50  px-6 py-4">
                                    <h2 className="text-sm font-semibold flex items-center gap-2">
                                      <BookOpen className="w-5 h-5 text-primary" />
                                      {program.name}
                                    </h2>
                                  </div>

                                  <div className="p-6 space-y-4">
                                    {program.description ? (
                                      <>
                                        <p className="leading-relaxed text-sm">
                                          {program.description}
                                        </p>

                                        {program.path && (
                                          <div className="border rounded-lg p-4 bg-slate-50">
                                            <h3 className="font-semibold text-royal-blue-700 mb-2">
                                              Possible Career Paths
                                            </h3>
                                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                              {program.path
                                                .split(",")
                                                .map((career, index) => (
                                                  <li key={index}>
                                                    {career.trim()}
                                                  </li>
                                                ))}
                                            </ul>
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <p className="text-gray-500 italic">
                                        Details for this program will be
                                        available soon.
                                      </p>
                                    )}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedPage>
    </>
  );
}
