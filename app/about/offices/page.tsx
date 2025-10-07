import Link from "next/link";
import {
  ArrowLeft,
  Building,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OfficesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">University Offices</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Offices</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our university maintains various administrative and academic offices
          to support students, faculty, and staff. Find contact information and
          services provided by each office below.
        </p>
      </div>

      <Tabs defaultValue="academic" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="academic">Academic Offices</TabsTrigger>
          <TabsTrigger value="administrative">
            Administrative Offices
          </TabsTrigger>
          <TabsTrigger value="student">Student Services Offices</TabsTrigger>
        </TabsList>

        {/* Academic Offices */}
        <TabsContent value="academic" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Office of Academic Affairs",
                description:
                  "Oversees all academic programs, faculty affairs, and curriculum development.",
                location:
                  "Administration Building, 2nd Floor  and curriculum development.",
                contact: {
                  phone: "(555) 123-4567",
                  email: "academic.affairs@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of the Registrar",
                description:
                  "Manages student records, course registration, transcripts, and graduation requirements.",
                location: "Student Services Building, 1st Floor",
                contact: {
                  phone: "(555) 123-4568",
                  email: "registrar@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Graduate Studies",
                description:
                  "Coordinates graduate programs, admissions, and thesis/dissertation processes.",
                location: "Graduate School Building, Room 105",
                contact: {
                  phone: "(555) 123-4569",
                  email: "gradstudies@university.edu",
                  hours: "Monday-Friday: 8:30 AM - 4:30 PM",
                },
              },
              {
                name: "Office of International Programs",
                description:
                  "Facilitates study abroad programs, international student services, and global partnerships.",
                location: "International Center, Room 200",
                contact: {
                  phone: "(555) 123-4570",
                  email: "international@university.edu",
                  hours: "Monday-Friday: 9:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Research Administration",
                description:
                  "Supports faculty research, grant applications, and research compliance.",
                location: "Research Building, 3rd Floor",
                contact: {
                  phone: "(555) 123-4571",
                  email: "research@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Distance Education",
                description:
                  "Manages online courses, distance learning programs, and educational technology.",
                location: "Technology Center, Room 305",
                contact: {
                  phone: "(555) 123-4572",
                  email: "distance.ed@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 6:00 PM",
                },
              },
            ].map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    {office.name}
                  </CardTitle>
                  <CardDescription>{office.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.email}</span>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p className="text-muted-foreground">
                        {office.contact.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Administrative Offices */}
        <TabsContent value="administrative" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Office of the President",
                description:
                  "Executive leadership of the university and liaison to the Board of Trustees.",
                location: "Administration Building, 4th Floor",
                contact: {
                  phone: "(555) 123-4580",
                  email: "president@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM (By appointment)",
                },
              },
              {
                name: "Office of Human Resources",
                description:
                  "Manages employment, benefits, training, and employee relations.",
                location: "Administration Building, 1st Floor",
                contact: {
                  phone: "(555) 123-4581",
                  email: "hr@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Finance",
                description:
                  "Oversees university budget, accounting, purchasing, and financial reporting.",
                location: "Administration Building, 3rd Floor",
                contact: {
                  phone: "(555) 123-4582",
                  email: "finance@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Information Technology",
                description:
                  "Provides technology support, network services, and IT infrastructure.",
                location: "Technology Center, 1st Floor",
                contact: {
                  phone: "(555) 123-4583",
                  email: "it.help@university.edu",
                  hours: "Monday-Friday: 7:30 AM - 6:00 PM",
                },
              },
              {
                name: "Office of Facilities Management",
                description:
                  "Maintains campus buildings, grounds, and infrastructure.",
                location: "Facilities Building, Room 100",
                contact: {
                  phone: "(555) 123-4584",
                  email: "facilities@university.edu",
                  hours: "Monday-Friday: 7:00 AM - 4:00 PM",
                },
              },
              {
                name: "Office of Institutional Advancement",
                description:
                  "Coordinates fundraising, alumni relations, and university development.",
                location: "Alumni Center, 2nd Floor",
                contact: {
                  phone: "(555) 123-4585",
                  email: "advancement@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
            ].map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    {office.name}
                  </CardTitle>
                  <CardDescription>{office.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.email}</span>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p className="text-muted-foreground">
                        {office.contact.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Student Services Offices */}
        <TabsContent value="student" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Office of Student Affairs",
                description:
                  "Coordinates student activities, organizations, and campus life programs.",
                location: "Student Center, 2nd Floor",
                contact: {
                  phone: "(555) 123-4590",
                  email: "studentaffairs@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Financial Aid",
                description:
                  "Assists students with scholarships, grants, loans, and work-study opportunities.",
                location: "Student Services Building, 2nd Floor",
                contact: {
                  phone: "(555) 123-4591",
                  email: "finaid@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Career Services",
                description:
                  "Provides career counseling, job placement, and internship opportunities.",
                location: "Student Center, 3rd Floor",
                contact: {
                  phone: "(555) 123-4592",
                  email: "careers@university.edu",
                  hours: "Monday-Friday: 8:30 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Counseling Services",
                description:
                  "Offers mental health counseling, wellness programs, and crisis intervention.",
                location: "Health Center, 2nd Floor",
                contact: {
                  phone: "(555) 123-4593",
                  email: "counseling@university.edu",
                  hours: "Monday-Friday: 9:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Disability Services",
                description:
                  "Provides accommodations and support for students with disabilities.",
                location: "Student Services Building, 1st Floor",
                contact: {
                  phone: "(555) 123-4594",
                  email: "disability@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 5:00 PM",
                },
              },
              {
                name: "Office of Residential Life",
                description:
                  "Manages campus housing, residence halls, and residential programs.",
                location: "Housing Office, Main Floor",
                contact: {
                  phone: "(555) 123-4595",
                  email: "housing@university.edu",
                  hours: "Monday-Friday: 8:00 AM - 6:00 PM",
                },
              },
            ].map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    {office.name}
                  </CardTitle>
                  <CardDescription>{office.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.email}</span>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p className="text-muted-foreground">
                        {office.contact.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* <div className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Directory Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Campus Directory</CardTitle>
              <CardDescription>
                Complete listing of all university offices and departments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                Download Directory (PDF)
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Staff Directory</CardTitle>
              <CardDescription>
                Search for faculty and staff contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Search Directory</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
              <CardDescription>
                Special holiday and summer office hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                View Schedule
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </div>
  );
}
