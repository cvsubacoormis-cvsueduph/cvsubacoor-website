"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Globe,
  Heart,
  Info,
  Mail,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    }, 2000);
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
              {/* <p className="mb-4">
                With over 100 student organizations spanning academic, cultural,
                recreational, service, and special interest areas, there's
                something for everyone at our university.
              </p> */}
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
            {/* <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
              <TabsTrigger value="sports">Sports & Recreation</TabsTrigger>
              <TabsTrigger value="special">Special Interest</TabsTrigger>
            </TabsList> */}

            {/* Academic Organizations Tab */}
            <TabsContent value="academic" className="pt-6">
              {isLoading ? (
                <OrganizationCardsSkeleton />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {organizations.map((org, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={org.image}
                          alt="Society Image"
                          fill
                          className="object-contain"
                        />
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

            {/* Cultural Organizations Tab */}
            <TabsContent value="cultural" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* International Student Association */}
                {/* <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="International Student Association"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>International Student Association</CardTitle>
                    <CardDescription>
                      Celebrating global cultures and perspectives
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The International Student Association brings together
                      students from around the world to share their cultures,
                      support international students, and promote global
                      awareness through events like International Festival.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        40+ countries represented
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Info className="h-3 w-3" />
                      Learn More
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      Contact
                    </Button>
                  </CardFooter>
                </Card> */}
              </div>
            </TabsContent>

            {/* Service Organizations Tab */}
            <TabsContent value="service" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Volunteer Action Network */}
                {/* <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Volunteer Action Network"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Volunteer Action Network</CardTitle>
                    <CardDescription>
                      Connecting students with service opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Volunteer Action Network coordinates volunteer
                      opportunities for students, connecting them with local
                      nonprofits and community organizations to address social
                      issues and make a positive impact.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        5,000+ service hours annually
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Info className="h-3 w-3" />
                      Learn More
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      Contact
                    </Button>
                  </CardFooter>
                </Card> */}
              </div>
            </TabsContent>

            {/* Sports & Recreation Tab */}
            <TabsContent value="sports" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Club sports and recreational organizations */}
                {/* <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Ultimate Frisbee Club"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Ultimate Frisbee Club</CardTitle>
                    <CardDescription>
                      Competitive and recreational play
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Ultimate Frisbee Club welcomes players of all skill
                      levels to participate in this fast-paced, non-contact
                      sport. The team competes in regional tournaments and hosts
                      recreational games.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        40+ members
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Info className="h-3 w-3" />
                      Learn More
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      Contact
                    </Button>
                  </CardFooter>
                </Card> */}
              </div>
            </TabsContent>

            {/* Special Interest Tab */}
            <TabsContent value="special" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Special interest organizations */}
                {/* <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Photography Club"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Photography Club</CardTitle>
                    <CardDescription>
                      Capturing moments and memories
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Photography Club brings together photography
                      enthusiasts to develop their skills, share their work, and
                      explore various photography styles through workshops,
                      photo walks, and exhibitions.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Annual Photo Exhibition
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Info className="h-3 w-3" />
                      Learn More
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      Contact
                    </Button>
                  </CardFooter>
                </Card> */}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-slate-50 p-6 rounded-lg animate-element">
            {/* <h2 className="text-2xl font-bold mb-4 text-center">
              Get Involved
            </h2> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* <Card>
                <CardHeader>
                  <CardTitle>Join an Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Explore our student organizations and find the perfect fit
                    for your interests and goals.
                  </p>
                  <Button className="w-full">Browse Organizations</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Start a New Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Have a unique idea? Learn how to start your own student
                    organization on campus.
                  </p>
                  <Button variant="outline" className="w-full">
                    Start a New Club
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organization Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Access resources, funding information, and guidelines for
                    student organizations.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Resources
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
