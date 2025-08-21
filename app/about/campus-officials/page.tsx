import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CampusOfficialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Campus Officials</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Campus Officials</span>
        </div>
      </div>

      <div className="space-y-12">
        {/* Campus Executive */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Campus Executive Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 rounded-full overflow-hidden mt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Campus Chancellor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dr. Jane Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-primary">
                  Campus Chancellor
                </p>
                <p className="mt-2 text-muted-foreground">
                  Ph.D. in Educational Leadership
                </p>
                <p className="text-muted-foreground">Harvard University</p>
                <p className="mt-4">
                  Leading the campus since 2018 with a focus on academic
                  excellence and community engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 rounded-full overflow-hidden mt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Vice Chancellor for Academic Affairs"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dr. Michael Johnson</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-primary">
                  Vice Chancellor for Academic Affairs
                </p>
                <p className="mt-2 text-muted-foreground">
                  Ph.D. in Higher Education
                </p>
                <p className="text-muted-foreground">Stanford University</p>
                <p className="mt-4">
                  Oversees all academic programs and ensures educational quality
                  across departments.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 rounded-full overflow-hidden mt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Vice Chancellor for Administration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dr. Sarah Williams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-primary">
                  Vice Chancellor for Administration
                </p>
                <p className="mt-2 text-muted-foreground">
                  Ph.D. in Public Administration
                </p>
                <p className="text-muted-foreground">University of Michigan</p>
                <p className="mt-4">
                  Manages campus operations, finances, and administrative
                  services.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* College Deans */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">College Deans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Robert Chen",
                title: "Dean, College of Arts and Sciences",
                image: "/placeholder.svg?height=150&width=150",
                education: "Ph.D. in Physics, MIT",
              },
              {
                name: "Dr. Lisa Rodriguez",
                title: "Dean, College of Business",
                image: "/placeholder.svg?height=150&width=150",
                education: "Ph.D. in Business Administration, Wharton",
              },
              {
                name: "Dr. James Wilson",
                title: "Dean, College of Engineering",
                image: "/placeholder.svg?height=150&width=150",
                education: "Ph.D. in Civil Engineering, Georgia Tech",
              },
              {
                name: "Dr. Emily Thompson",
                title: "Dean, College of Education",
                image: "/placeholder.svg?height=150&width=150",
                education: "Ed.D., Columbia University",
              },
              {
                name: "Dr. David Kim",
                title: "Dean, College of Health Sciences",
                image: "/placeholder.svg?height=150&width=150",
                education: "M.D., Johns Hopkins University",
              },
              {
                name: "Dr. Maria Garcia",
                title: "Dean, College of Agriculture",
                image: "/placeholder.svg?height=150&width=150",
                education: "Ph.D. in Agricultural Sciences, Cornell",
              },
              {
                name: "Dr. Thomas Brown",
                title: "Dean, College of Law",
                image: "/placeholder.svg?height=150&width=150",
                education: "J.D., Yale Law School",
              },
              {
                name: "Dr. Sophia Lee",
                title: "Dean, Graduate School",
                image: "/placeholder.svg?height=150&width=150",
                education: "Ph.D. in Sociology, UC Berkeley",
              },
            ].map((dean, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-24 w-24 rounded-full overflow-hidden mt-6">
                  <Image
                    src={dean.image || "/placeholder.svg"}
                    alt={dean.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{dean.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary">{dean.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {dean.education}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Directors */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Directors and Department Heads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Dr. Patricia Adams",
                title: "Director, Office of Research and Development",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Mr. Richard Taylor",
                title: "Director, Campus Planning and Development",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Ms. Jennifer Martinez",
                title: "Director, Student Affairs",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Mr. Daniel Lewis",
                title: "Director, Information Technology Services",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Dr. Elizabeth Clark",
                title: "Director, International Programs",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Ms. Susan Wright",
                title: "Director, Human Resources",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Mr. Kevin Anderson",
                title: "Director, Campus Security",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Dr. Michelle Parker",
                title: "Director, Library Services",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((director, index) => (
              <Card key={index} className="flex items-center p-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={director.image || "/placeholder.svg"}
                    alt={director.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{director.name}</h3>
                  <p className="text-sm text-primary">{director.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="bg-slate-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Organizational Structure
          </h2>
          <div className="flex justify-center mb-4">
            <div className="relative h-[400px] w-full max-w-3xl">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Organizational Chart"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline">
              Download Organizational Chart (PDF)
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
