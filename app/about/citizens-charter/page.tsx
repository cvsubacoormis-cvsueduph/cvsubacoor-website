import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  EyeIcon,
  FileText,
  HelpCircle,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CitizensCharterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Citizens Charter</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Citizens Charter</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Cavite State University Bacoor City Campus Citizens Charter
          </h2>
          <p className="text-lg mb-4">
            Our commitment to transparent, efficient, and responsive service to
            students, faculty, staff, and the public.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="University Seal"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <p>
            This Citizens Charter outlines the services provided by Cavite State
            University Bacoor City Campus, the requirements for accessing these
            services, and our commitment to service standards. It serves as a
            guide to help you navigate university processes efficiently.
          </p>
        </div>
      </div>

      <Tabs defaultValue="vision" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        {/* Vision & Mission Tab */}
        <TabsContent value="vision" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <EyeIcon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The Premier University in historic Cavite globally recognized
                  for excellence in character development, academics, research,
                  innovation and sustainable community engagement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Cavite State University shall provide excellent, equitable and
                  relevant educational opportunities in the arts, sciences and
                  technology through quality instruction and responsive research
                  and development activities. It shall produce professional,
                  skilled and morally upright individuals for global
                  competitiveness.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Service Pledge</h3>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="mb-4">
                We, the officials and employees of Cavite State University
                Bacoor City Campus, commit to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    Provide efficient and effective service to all our clients
                    with utmost courtesy, integrity, and professionalism.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    Ensure transparency in all university transactions and
                    processes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    Respond promptly to inquiries, requests, and concerns.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    Continuously improve our services based on feedback and
                    changing needs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    Uphold the highest standards of ethical conduct in all our
                    dealings.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="pt-6">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Academic Services</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Office Responsible</TableHead>
                    <TableHead>Service Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Admission Application
                    </TableCell>
                    <TableCell>Office of Admissions</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Course Registration
                    </TableCell>
                    <TableCell>Office of the Registrar</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Transcript Request
                    </TableCell>
                    <TableCell>Office of the Registrar</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Academic Advising
                    </TableCell>
                    <TableCell>Academic Departments</TableCell>
                    <TableCell>By appointment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Library Services
                    </TableCell>
                    <TableCell>University Library</TableCell>
                    <TableCell>
                      Monday-Friday, 7:00 AM - 9:00 PM
                      <br />
                      Weekends, 9:00 AM - 5:00 PM
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Administrative Services
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Office Responsible</TableHead>
                    <TableHead>Service Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      ID Card Issuance
                    </TableCell>
                    <TableCell>ID Card Office</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Tuition Payment
                    </TableCell>
                    <TableCell>Cashier's Office</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 4:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Financial Aid Application
                    </TableCell>
                    <TableCell>Office of Financial Aid</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Housing Application
                    </TableCell>
                    <TableCell>Residential Life Office</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Employment Verification
                    </TableCell>
                    <TableCell>Human Resources</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Feedback Tab */}
        <TabsContent value="feedback" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Feedback Mechanism</h3>
              <p className="mb-4">
                We value your feedback as it helps us improve our services.
                There are several ways you can provide feedback or file
                complaints:
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    Feedback Boxes
                  </h4>
                  <p className="mt-1">
                    Feedback boxes are located in key areas around campus,
                    including the Administration Building, Library, and Student
                    Center. You can submit written feedback using the forms
                    provided.dent Center. You can submit written feedback using
                    the forms provided.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    In-Person Feedback
                  </h4>
                  <p className="mt-1">
                    Visit the Office of Student Affairs or the specific
                    department to provide feedback directly to staff members.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    Email and Phone
                  </h4>
                  <p className="mt-1">
                    Send feedback via email to cvsubacoor@cvsu.edu.ph or call
                    our dedicated hotline at (046) 476-5029.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Client Satisfaction Survey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We conduct regular client satisfaction surveys to assess the
                    quality of our services. Your participation helps us
                    identify areas for improvement.
                  </p>
                  <p className="mb-4">Surveys are conducted:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>After service transactions</li>
                    <li>At the end of each semester</li>
                    <li>Through annual comprehensive surveys</li>
                  </ul>
                  <Link
                    href="https://forms.gle/UW2rcCTQovurMgks8"
                    target="_blank"
                  >
                    <Button className="w-full">
                      Take Client Satisfaction Survey
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">
                        Public Assistance and Complaints Desk
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Administration Building, Ground Floor
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm">(555) 123-4567</p>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">feedback@university.edu</p>
                    </div>
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-sm">
                        Monday-Friday: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              Our Commitment to You
            </h3>
            <p className="text-center mb-6">
              We are committed to addressing your feedback and continuously
              improving our services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold">Timely Response</h4>
                <p className="text-sm">
                  We respond to all feedback within established timeframes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold">Accountability</h4>
                <p className="text-sm">
                  We take responsibility for our actions and decisions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold">Continuous Improvement</h4>
                <p className="text-sm">
                  We use feedback to enhance our services and processes.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Download Citizens Charter
        </h2>
        <p className="text-center mb-6">
          For a complete version of our Citizens Charter, including detailed
          procedures and requirements for all services, please download the
          document below.
        </p>
        <div className="flex justify-center">
          <Link
            href="/files/citizens-charter-2025-edition_compressed.pdf"
            target="_blank"
          >
            <Button className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Download Complete Citizens Charter (PDF)
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
