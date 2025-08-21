import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FacultyStaffPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Faculty and Staff</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Faculty and Staff</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our university is home to distinguished faculty and dedicated staff
          who are committed to excellence in teaching, research, and service.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-slate-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Find Faculty and Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name"
                className="pl-8"
              />
            </div>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="arts">Arts and Sciences</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="health">Health Sciences</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button className="w-full">Search</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="faculty" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="staff">Administrative Staff</TabsTrigger>
          <TabsTrigger value="research">Research Staff</TabsTrigger>
        </TabsList>

        {/* Faculty Tab */}
        <TabsContent value="faculty" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Robert Anderson",
                title: "Professor of Physics",
                department: "Department of Physics",
                image: "/placeholder.svg?height=150&width=150",
                email: "r.anderson@university.edu",
                research: "Quantum Mechanics, Theoretical Physics",
                education: "Ph.D., California Institute of Technology",
              },
              {
                name: "Dr. Maria Rodriguez",
                title: "Associate Professor of Economics",
                department: "Department of Economics",
                image: "/placeholder.svg?height=150&width=150",
                email: "m.rodriguez@university.edu",
                research: "International Trade, Economic Development",
                education: "Ph.D., Harvard University",
              },
              {
                name: "Dr. James Wilson",
                title: "Assistant Professor of Computer Science",
                department: "Department of Computer Science",
                image: "/placeholder.svg?height=150&width=150",
                email: "j.wilson@university.edu",
                research: "Artificial Intelligence, Machine Learning",
                education: "Ph.D., Stanford University",
              },
              {
                name: "Dr. Sarah Johnson",
                title: "Professor of English Literature",
                department: "Department of English",
                image: "/placeholder.svg?height=150&width=150",
                email: "s.johnson@university.edu",
                research: "Victorian Literature, Feminist Theory",
                education: "Ph.D., University of Oxford",
              },
              {
                name: "Dr. Michael Chen",
                title: "Professor of Chemistry",
                department: "Department of Chemistry",
                image: "/placeholder.svg?height=150&width=150",
                email: "m.chen@university.edu",
                research: "Organic Chemistry, Medicinal Chemistry",
                education: "Ph.D., MIT",
              },
              {
                name: "Dr. Emily Thompson",
                title: "Associate Professor of Psychology",
                department: "Department of Psychology",
                image: "/placeholder.svg?height=150&width=150",
                email: "e.thompson@university.edu",
                research: "Cognitive Psychology, Memory Studies",
                education: "Ph.D., University of Michigan",
              },
            ].map((faculty, index) => (
              <Card key={index}>
                <div className="flex flex-col items-center p-4">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="text-center p-0 mb-2">
                    <CardTitle>{faculty.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-0">
                    <p className="font-medium text-primary">{faculty.title}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {faculty.department}
                    </p>
                    <p className="text-sm mb-1">
                      <span className="font-medium">Research:</span>{" "}
                      {faculty.research}
                    </p>
                    <p className="text-sm mb-3">
                      <span className="font-medium">Education:</span>{" "}
                      {faculty.education}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Mail className="h-3 w-3" />
                      Contact
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Faculty</Button>
          </div>
        </TabsContent>

        {/* Administrative Staff Tab */}
        <TabsContent value="staff" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Jennifer Martinez",
                title: "Director of Student Affairs",
                department: "Student Affairs",
                image: "/placeholder.svg?height=150&width=150",
                email: "j.martinez@university.edu",
                experience: "15+ years in higher education administration",
              },
              {
                name: "David Thompson",
                title: "Financial Aid Counselor",
                department: "Office of Financial Aid",
                image: "/placeholder.svg?height=150&width=150",
                email: "d.thompson@university.edu",
                experience: "8 years in financial aid services",
              },
              {
                name: "Susan Williams",
                title: "Human Resources Manager",
                department: "Human Resources",
                image: "/placeholder.svg?height=150&width=150",
                email: "s.williams@university.edu",
                experience: "12 years in HR management",
              },
              {
                name: "Richard Davis",
                title: "IT Support Specialist",
                department: "Information Technology",
                image: "/placeholder.svg?height=150&width=150",
                email: "r.davis@university.edu",
                experience: "10 years in IT support and services",
              },
              {
                name: "Lisa Johnson",
                title: "Academic Advisor",
                department: "Academic Advising Center",
                image: "/placeholder.svg?height=150&width=150",
                email: "l.johnson@university.edu",
                experience: "7 years in academic advising",
              },
              {
                name: "Michael Brown",
                title: "Facilities Manager",
                department: "Facilities Management",
                image: "/placeholder.svg?height=150&width=150",
                email: "m.brown@university.edu",
                experience: "20 years in facilities management",
              },
            ].map((staff, index) => (
              <Card key={index}>
                <div className="flex flex-col items-center p-4">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={staff.image || "/placeholder.svg"}
                      alt={staff.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="text-center p-0 mb-2">
                    <CardTitle>{staff.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-0">
                    <p className="font-medium text-primary">{staff.title}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {staff.department}
                    </p>
                    <p className="text-sm mb-3">
                      <span className="font-medium">Experience:</span>{" "}
                      {staff.experience}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Mail className="h-3 w-3" />
                      Contact
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Staff</Button>
          </div>
        </TabsContent>

        {/* Research Staff Tab */}
        <TabsContent value="research" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Thomas Clark",
                title: "Senior Research Scientist",
                department: "Center for Renewable Energy",
                image: "/placeholder.svg?height=150&width=150",
                email: "t.clark@university.edu",
                research: "Solar Energy, Photovoltaic Materials",
                publications: "45+ peer-reviewed publications",
              },
              {
                name: "Dr. Elizabeth Wright",
                title: "Research Associate",
                department: "Institute for Biomedical Research",
                image: "/placeholder.svg?height=150&width=150",
                email: "e.wright@university.edu",
                research: "Cancer Biology, Immunotherapy",
                publications: "23 peer-reviewed publications",
              },
              {
                name: "Dr. Kevin Lee",
                title: "Postdoctoral Researcher",
                department: "Artificial Intelligence Lab",
                image: "/placeholder.svg?height=150&width=150",
                email: "k.lee@university.edu",
                research: "Deep Learning, Computer Vision",
                publications: "12 peer-reviewed publications",
              },
              {
                name: "Dr. Amanda Garcia",
                title: "Research Scientist",
                department: "Climate Research Center",
                image: "/placeholder.svg?height=150&width=150",
                email: "a.garcia@university.edu",
                research: "Climate Modeling, Environmental Science",
                publications: "30+ peer-reviewed publications",
              },
              {
                name: "Dr. Daniel Kim",
                title: "Laboratory Manager",
                department: "Neuroscience Research Institute",
                image: "/placeholder.svg?height=150&width=150",
                email: "d.kim@university.edu",
                research: "Neuroimaging, Cognitive Neuroscience",
                publications: "28 peer-reviewed publications",
              },
              {
                name: "Dr. Rachel Adams",
                title: "Research Fellow",
                department: "Center for Social Policy",
                image: "/placeholder.svg?height=150&width=150",
                email: "r.adams@university.edu",
                research: "Public Policy, Economic Inequality",
                publications: "15 peer-reviewed publications",
              },
            ].map((researcher, index) => (
              <Card key={index}>
                <div className="flex flex-col items-center p-4">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={researcher.image || "/placeholder.svg"}
                      alt={researcher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="text-center p-0 mb-2">
                    <CardTitle>{researcher.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-0">
                    <p className="font-medium text-primary">
                      {researcher.title}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {researcher.department}
                    </p>
                    <p className="text-sm mb-1">
                      <span className="font-medium">Research:</span>{" "}
                      {researcher.research}
                    </p>
                    <p className="text-sm mb-3">
                      <span className="font-medium">Publications:</span>{" "}
                      {researcher.publications}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Mail className="h-3 w-3" />
                      Contact
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Researchers</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Faculty and Staff Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Faculty Handbook</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Access policies, procedures, and resources for university
                faculty.
              </p>
              <Button variant="outline" className="w-full">
                Download Handbook
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Staff Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Complete searchable directory of all university employees.
              </p>
              <Button className="w-full">Access Directory</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Employment Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                View current faculty and staff job openings at the university.
              </p>
              <Button variant="outline" className="w-full">
                View Openings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
