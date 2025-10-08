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
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function StudentOrganizationsPage() {
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
              <p className="mb-4">
                With over 100 student organizations spanning academic, cultural,
                recreational, service, and special interest areas, there's
                something for everyone at our university.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button>Join an Organization</Button>
                <Button variant="outline">Start a New Organization</Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Student Organization Fair"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Tabs defaultValue="academic" className="mb-12 animate-element">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
              <TabsTrigger value="sports">Sports & Recreation</TabsTrigger>
              <TabsTrigger value="special">Special Interest</TabsTrigger>
            </TabsList>

            {/* Academic Organizations Tab */}
            <TabsContent value="academic" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Engineering Student Society */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Engineering Student Society"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Engineering Student Society</CardTitle>
                    <CardDescription>
                      Connecting engineering students across all disciplines
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Engineering Student Society organizes technical
                      workshops, industry tours, design competitions, and
                      networking events to enhance the academic and professional
                      development of engineering students.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        150+ members
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
                </Card>

                {/* Business Leaders Association */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Business Leaders Association"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Business Leaders Association</CardTitle>
                    <CardDescription>
                      Developing tomorrow's business professionals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Business Leaders Association provides opportunities
                      for business students to develop leadership skills,
                      network with professionals, and gain practical experience
                      through case competitions and consulting projects.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        120+ members
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
                </Card>

                {/* Psychology Student Association */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Psychology Student Association"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Psychology Student Association</CardTitle>
                    <CardDescription>
                      Exploring the science of mind and behavior
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Psychology Student Association organizes guest
                      lectures, research symposiums, and community outreach
                      activities to enhance students' understanding of
                      psychology and its applications.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        90+ members
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
                </Card>

                {/* Pre-Med Society */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Pre-Med Society"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Pre-Med Society</CardTitle>
                    <CardDescription>
                      Supporting future healthcare professionals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Pre-Med Society provides resources, mentorship, and
                      networking opportunities for students pursuing careers in
                      medicine and healthcare. Activities include MCAT prep,
                      shadowing experiences, and volunteer opportunities.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        110+ members
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
                </Card>

                {/* Computer Science Club */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Computer Science Club"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Computer Science Club</CardTitle>
                    <CardDescription>
                      Coding, hacking, and problem-solving
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Computer Science Club hosts hackathons, coding
                      competitions, tech talks, and workshops on emerging
                      technologies. Members collaborate on projects and prepare
                      for technical interviews.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        130+ members
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
                </Card>

                {/* Future Educators Association */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Future Educators Association"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Future Educators Association</CardTitle>
                    <CardDescription>
                      Preparing the next generation of teachers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Future Educators Association provides professional
                      development, classroom experience, and networking
                      opportunities for students pursuing careers in education
                      at all levels.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        85+ members
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
                </Card>
              </div>
            </TabsContent>

            {/* Cultural Organizations Tab */}
            <TabsContent value="cultural" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* International Student Association */}
                <Card className="overflow-hidden">
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
                </Card>

                {/* Black Student Union */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Black Student Union"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Black Student Union</CardTitle>
                    <CardDescription>
                      Promoting Black culture, history, and excellence
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Black Student Union fosters community among Black
                      students and allies, celebrates Black culture and
                      achievements, and advocates for inclusive campus policies
                      through events, discussions, and community service.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Black History Month Celebration
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
                </Card>

                {/* Asian Cultural Association */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Asian Cultural Association"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Asian Cultural Association</CardTitle>
                    <CardDescription>
                      Celebrating Asian cultures and heritage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Asian Cultural Association promotes awareness and
                      appreciation of diverse Asian cultures through cultural
                      showcases, language exchanges, film screenings, and
                      traditional celebrations.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Lunar New Year Festival
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
                </Card>

                {/* Hispanic Student Association */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Hispanic Student Association"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Hispanic Student Association</CardTitle>
                    <CardDescription>
                      Celebrating Hispanic and Latino cultures
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Hispanic Student Association promotes awareness of
                      Hispanic and Latino cultures through cultural events,
                      educational programs, and community service, while
                      providing support for Hispanic students.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Hispanic Heritage Month
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
                </Card>

                {/* Native American Student Alliance */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Native American Student Alliance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Native American Student Alliance</CardTitle>
                    <CardDescription>
                      Honoring indigenous cultures and traditions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Native American Student Alliance promotes awareness of
                      indigenous cultures, supports Native American students,
                      and advocates for indigenous perspectives through
                      educational events and community gatherings.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Native American Heritage Month
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
                </Card>

                {/* Cultural Dance Club */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Cultural Dance Club"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Cultural Dance Club</CardTitle>
                    <CardDescription>
                      Celebrating diversity through movement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Cultural Dance Club brings together students
                      interested in learning and performing traditional dances
                      from around the world, showcasing the beauty and diversity
                      of global dance traditions.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Annual Dance Showcase
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
                </Card>
              </div>
            </TabsContent>

            {/* Service Organizations Tab */}
            <TabsContent value="service" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Volunteer Action Network */}
                <Card className="overflow-hidden">
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
                </Card>

                {/* Habitat for Humanity Campus Chapter */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Habitat for Humanity Campus Chapter"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Habitat for Humanity Campus Chapter</CardTitle>
                    <CardDescription>Building homes and hope</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Habitat for Humanity Campus Chapter partners with the
                      local Habitat affiliate to build affordable housing, raise
                      funds, and advocate for housing solutions in the
                      community.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        3 homes built annually
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
                </Card>

                {/* Environmental Action Coalition */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Environmental Action Coalition"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Environmental Action Coalition</CardTitle>
                    <CardDescription>
                      Promoting sustainability on campus and beyond
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Environmental Action Coalition promotes sustainability
                      through campus initiatives, community clean-ups,
                      educational events, and advocacy for environmentally
                      responsible policies.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Campus Recycling Program
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
                </Card>
              </div>
            </TabsContent>

            {/* Sports & Recreation Tab */}
            <TabsContent value="sports" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Club sports and recreational organizations */}
                <Card className="overflow-hidden">
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
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Rock Climbing Club"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Rock Climbing Club</CardTitle>
                    <CardDescription>
                      Scaling new heights together
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Rock Climbing Club brings together climbing
                      enthusiasts of all levels for indoor and outdoor climbing
                      experiences, skill development, and competitions.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        65+ members
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
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Yoga and Meditation Club"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Yoga and Meditation Club</CardTitle>
                    <CardDescription>
                      Wellness for mind and body
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Yoga and Meditation Club offers regular practice
                      sessions, workshops, and retreats to promote physical
                      wellness, stress reduction, and mindfulness in the
                      university community.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        80+ members
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
                </Card>
              </div>
            </TabsContent>

            {/* Special Interest Tab */}
            <TabsContent value="special" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Special interest organizations */}
                <Card className="overflow-hidden">
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
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Chess Club"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Chess Club</CardTitle>
                    <CardDescription>
                      Strategy, competition, and camaraderie
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Chess Club welcomes players of all levels to enjoy the
                      game of chess through regular meetings, tournaments, and
                      instruction for beginners. The club also competes in
                      intercollegiate tournaments.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        45+ members
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
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Debate Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Debate Team</CardTitle>
                    <CardDescription>
                      Mastering the art of persuasion
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Debate Team develops critical thinking, research, and
                      public speaking skills through competitive debate
                      tournaments, practice sessions, and public debates on
                      campus.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        30+ members
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
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-slate-50 p-6 rounded-lg animate-element">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Get Involved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
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
              </Card>
            </div>
          </div>
        </div>
      </AnimatedPage>
      <BackToTop />
    </>
  );
}
