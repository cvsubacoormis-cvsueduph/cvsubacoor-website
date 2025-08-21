import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Clock,
  MapPin,
  Search,
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Careers at University Name</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Careers</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="mb-4">
            At University Name, we are committed to excellence in education,
            research, and service. We seek talented individuals who share our
            passion for making a difference in the lives of our students and
            communities.
          </p>
          <p className="mb-4">
            As one of the region's largest employers, we offer competitive
            salaries, comprehensive benefits, and a supportive work environment
            that values diversity, innovation, and professional growth.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button>View Current Openings</Button>
            <Button variant="outline">Benefits Information</Button>
          </div>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=500"
            alt="University Staff"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-slate-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Find Job Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search job titles, keywords, etc."
                className="pl-8"
              />
            </div>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
                <SelectItem value="administrative">Administrative</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button className="w-full">Search</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="openings" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="openings">Current Openings</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="process">Application Process</TabsTrigger>
        </TabsList>

        {/* Current Openings Tab */}
        <TabsContent value="openings" className="pt-6">
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Assistant Professor of Computer Science",
                department: "Department of Computer Science",
                type: "Faculty",
                location: "Main Campus",
                posted: "March 10, 2025",
                deadline: "April 30, 2025",
                description:
                  "The Department of Computer Science invites applications for a tenure-track position at the Assistant Professor level. The successful candidate will teach undergraduate and graduate courses, conduct research, and participate in departmental and university service.",
              },
              {
                title: "Student Affairs Coordinator",
                department: "Office of Student Life",
                type: "Administrative",
                location: "Main Campus",
                posted: "March 8, 2025",
                deadline: "March 31, 2025",
                description:
                  "The Office of Student Life seeks a Student Affairs Coordinator to develop and implement programs that enhance student engagement, leadership development, and campus community. The position involves advising student organizations and coordinating campus events.",
              },
              {
                title: "Research Scientist",
                department: "Center for Environmental Studies",
                type: "Research",
                location: "Research Park",
                posted: "March 5, 2025",
                deadline: "April 15, 2025",
                description:
                  "The Center for Environmental Studies is seeking a Research Scientist to conduct research on climate change impacts on regional ecosystems. The position involves field work, data analysis, grant writing, and publication in peer-reviewed journals.",
              },
              {
                title: "IT Support Specialist",
                department: "Information Technology Services",
                type: "Technical",
                location: "Main Campus",
                posted: "March 3, 2025",
                deadline: "March 24, 2025",
                description:
                  "Information Technology Services is looking for an IT Support Specialist to provide technical support to faculty, staff, and students. Responsibilities include troubleshooting hardware and software issues, maintaining computer labs, and assisting with technology implementations.",
              },
              {
                title: "Library Assistant",
                department: "University Library",
                type: "Staff",
                location: "Main Campus",
                posted: "March 1, 2025",
                deadline: "March 22, 2025",
                description:
                  "The University Library seeks a Library Assistant to provide circulation services, assist patrons with research inquiries, and support library operations. The position involves working with library systems, organizing materials, and providing excellent customer service.",
              },
            ].map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {job.department}
                      </CardDescription>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {job.type}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Posted: {job.posted}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Deadline: {job.deadline}</span>
                    </div>
                  </div>
                  <p>{job.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">View All Job Openings</Button>
          </div>
        </TabsContent>

        {/* Benefits Tab */}
        <TabsContent value="benefits" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Comprehensive Benefits Package
              </h3>
              <p className="mb-4">
                University Name offers a competitive benefits package designed
                to support the health, financial security, and work-life balance
                of our employees.
              </p>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=450"
                  alt="Employee Benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Health & Wellness</h4>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Medical, dental, and vision insurance</li>
                    <li>Flexible spending accounts</li>
                    <li>Employee assistance program</li>
                    <li>Wellness programs and fitness center access</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Retirement & Financial</h4>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Retirement plans with employer contribution</li>
                    <li>Life and disability insurance</li>
                    <li>Financial planning resources</li>
                    <li>Tuition benefits for employees and dependents</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Work-Life Balance</h4>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Generous vacation and sick leave</li>
                    <li>Paid holidays</li>
                    <li>Family and medical leave</li>
                    <li>Flexible work arrangements (where applicable)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We invest in our employees' growth through:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Training and development programs</li>
                  <li>Conference attendance support</li>
                  <li>Professional certification assistance</li>
                  <li>Leadership development opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campus Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Employees enjoy access to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Library resources</li>
                  <li>Cultural and athletic events</li>
                  <li>Campus dining facilities</li>
                  <li>Recreational facilities</li>
                  <li>Childcare center (based on availability)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community & Inclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We foster a supportive community through:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Employee resource groups</li>
                  <li>Diversity and inclusion initiatives</li>
                  <li>Community service opportunities</li>
                  <li>Recognition programs</li>
                  <li>Campus-wide events and celebrations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Application Process Tab */}
        <TabsContent value="process" className="pt-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">How to Apply</h3>
            <p className="text-center mb-8">
              Our application process is designed to be straightforward and
              transparent. Follow the steps below to apply for a position at
              University Name.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    Search for Opportunities
                  </h4>
                  <p className="mt-1 mb-2">
                    Browse our current job openings to find positions that match
                    your skills, experience, and career goals.
                  </p>
                  <Button variant="outline" size="sm">
                    View Job Openings
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-bold">Create an Account</h4>
                  <p className="mt-1 mb-2">
                    Register for an account on our employment portal to access
                    the application system. You'll need to provide basic contact
                    information.
                  </p>
                  <Button variant="outline" size="sm">
                    Create Account
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-bold">Complete Your Profile</h4>
                  <p className="mt-1 mb-2">
                    Build your candidate profile by entering your education,
                    work experience, skills, and other relevant information. You
                    can save this profile and use it for multiple applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-bold">Submit Your Application</h4>
                  <p className="mt-1 mb-2">
                    Complete the application form for your chosen position,
                    upload required documents (resume, cover letter, etc.), and
                    submit your application before the deadline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  5
                </div>
                <div>
                  <h4 className="text-lg font-bold">Application Review</h4>
                  <p className="mt-1 mb-2">
                    Our hiring team will review your application. If your
                    qualifications match our needs, you'll be contacted for the
                    next steps in the process, which may include interviews,
                    assessments, or other selection activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mt-8">
              <h4 className="font-bold mb-2">Application Tips</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Tailor your resume and cover letter to the specific position
                </li>
                <li>Highlight relevant experience and qualifications</li>
                <li>Provide complete and accurate information</li>
                <li>Submit all required documents in the requested format</li>
                <li>Apply before the deadline</li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <h4 className="font-bold mb-2">
                Questions About the Application Process?
              </h4>
              <p className="mb-4">
                Contact our Human Resources department for assistance.
              </p>
              <Button>Contact HR</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Why Work at University Name?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Meaningful Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Make a difference in the lives of students and contribute to
                groundbreaking research and innovation that addresses global
                challenges.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inclusive Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Join a diverse and welcoming community that values different
                perspectives, backgrounds, and experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Growth Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Develop your skills and advance your career through professional
                development programs, mentoring, and leadership opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
