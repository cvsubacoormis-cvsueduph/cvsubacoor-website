"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import AnimatedPage from "@/components/animated-page";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { organizations } from "@/data/organizations";
import OrganizationCardsSkeleton from "@/components/skeleton/OrganizationCardsSkeleton";
import DialogImageSkeleton from "@/components/skeleton/OrganizationImageCSGSkeleton";

export default function StudentOrganizationsPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
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
            <h1 className="text-3xl font-bold mb-2">Student Organizations</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Students
              <span className="mx-2">/</span>
              <span>Student Organizations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-element">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Get Involved and Make a Difference
              </h2>
              <p className="mb-4">
                Student organizations are an integral part of campus life,
                offering opportunities for leadership development, community
                service, professional networking, and lifelong friendships.
              </p>
            </div>
            {isLoading ? (
              <DialogImageSkeleton />
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer">
                    <Image
                      src="/csg.png"
                      alt="Student Organization Fair"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[1200px] p-0 border-none shadow-none">
                  <div className="relative w-full h-[80vh]">
                    <Image
                      src="/csg.png"
                      alt="Student Organization Fair"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
          <Tabs defaultValue="academic" className="mb-12 animate-element">
            {/* Academic Organizations Tab */}
            <TabsContent value="academic" className="pt-6">
              {isLoading ? (
                <OrganizationCardsSkeleton />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {organizations.map((org, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="relative h-48 w-full cursor-pointer group">
                              <Image
                                src={org.image}
                                alt={org.name}
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </DialogTrigger>

                          <DialogContent className="max-w-[1100px] p-0 border-none shadow-none">
                            <div className="relative w-full h-[70vh] bg-black/5 rounded-lg overflow-hidden">
                              <Image
                                src={
                                  org.studentImage || "/placeholder-student.png"
                                }
                                alt={`${org.name} Student Representative`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <CardHeader>
                        <CardTitle>{org.name}</CardTitle>
                        {/* <CardDescription>{org.description}</CardDescription> */}
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{org.details}</p>
                        <div className="flex items-center gap-2 mt-4">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {org.members}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Link href={org.link} target="_blank">
                          <Button size="sm" className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            Contact
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedPage>
    </>
  );
}
