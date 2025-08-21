import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
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
            University Name Citizens Charter
          </h2>
          <p className="text-lg mb-4">
            Our commitment to transparent, efficient, and responsive service to
            students, faculty, staff, and the public.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="University Seal"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <p>
            This Citizens Charter outlines the services provided by University
            Name, the requirements for accessing these services, and our
            commitment to service standards. It serves as a guide to help you
            navigate university processes efficiently.
          </p>
        </div>
      </div>

      <Tabs defaultValue="vision" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="procedures">Procedures</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        {/* Vision & Mission Tab */}
        <TabsContent value="vision" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To be a leading institution of higher education recognized for
                  academic excellence, innovative research, and commitment to
                  the advancement of society at the local, national, and global
                  levels.
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
                  To provide accessible, high-quality education that prepares
                  students for leadership and service in a diverse and global
                  society through excellence in teaching, research, and
                  community engagement.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Service Pledge</h3>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="mb-4">
                We, the officials and employees of University Name, commit to:
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
                    <TableHead>Processing Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Admission Application
                    </TableCell>
                    <TableCell>Office of Admissions</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>2-4 weeks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Course Registration
                    </TableCell>
                    <TableCell>Office of the Registrar</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>Same day</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Transcript Request
                    </TableCell>
                    <TableCell>Office of the Registrar</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>3-5 working days</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Academic Advising
                    </TableCell>
                    <TableCell>Academic Departments</TableCell>
                    <TableCell>By appointment</TableCell>
                    <TableCell>Same day</TableCell>
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
                    <TableCell>Same day</TableCell>
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
                    <TableHead>Processing Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      ID Card Issuance
                    </TableCell>
                    <TableCell>ID Card Office</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>1 hour</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Tuition Payment
                    </TableCell>
                    <TableCell>Cashier's Office</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 4:00 PM</TableCell>
                    <TableCell>Same day</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Financial Aid Application
                    </TableCell>
                    <TableCell>Office of Financial Aid</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>2-3 weeks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Housing Application
                    </TableCell>
                    <TableCell>Residential Life Office</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>1-2 weeks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Employment Verification
                    </TableCell>
                    <TableCell>Human Resources</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>3 working days</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Student Support Services
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Office Responsible</TableHead>
                    <TableHead>Service Hours</TableHead>
                    <TableHead>Processing Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Counseling Services
                    </TableCell>
                    <TableCell>Counseling Center</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>By appointment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Career Counseling
                    </TableCell>
                    <TableCell>Career Services</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>By appointment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Health Services
                    </TableCell>
                    <TableCell>University Health Center</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>Same day or by appointment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Disability Accommodations
                    </TableCell>
                    <TableCell>Disability Services</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>1-2 weeks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      International Student Support
                    </TableCell>
                    <TableCell>International Office</TableCell>
                    <TableCell>Monday-Friday, 8:00 AM - 5:00 PM</TableCell>
                    <TableCell>Varies by service</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Procedures Tab */}
        <TabsContent value="procedures" className="pt-6">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Admission Procedures</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold">Submit Application</h4>
                      <p className="mt-1">
                        Complete the online application form and pay the
                        application fee.
                      </p>
                      <div className="mt-2">
                        <p className="font-medium">Requirements:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Completed application form</li>
                          <li>Application fee payment</li>
                          <li>Valid email address</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold">Submit Required Documents</h4>
                      <p className="mt-1">
                        Upload or submit all required academic records and
                        supporting documents.
                      </p>
                      <div className="mt-2">
                        <p className="font-medium">Requirements:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Official transcripts</li>
                          <li>Standardized test scores (if applicable)</li>
                          <li>Letters of recommendation</li>
                          <li>Personal statement</li>
                          <li>Resume/CV (for graduate programs)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold">Application Review</h4>
                      <p className="mt-1">
                        The Admissions Committee reviews your application and
                        documents.
                      </p>
                      <div className="mt-2">
                        <p className="font-medium">Processing Time:</p>
                        <p>2-4 weeks after receipt of all required documents</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold">Admission Decision</h4>
                      <p className="mt-1">
                        Receive notification of admission decision via email and
                        mail.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold">Confirm Enrollment</h4>
                      <p className="mt-1">
                        If admitted, submit enrollment confirmation and deposit.
                      </p>
                      <div className="mt-2">
                        <p className="font-medium">Requirements:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Enrollment confirmation form</li>
                          <li>Enrollment deposit payment</li>
                          <li>Housing application (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Transcript Request Procedures
              </h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold">Submit Request</h4>
                      <p className="mt-1">
                        Complete the transcript request form online or in person
                        at the Registrar's Office.
                      </p>
                      <div className="mt-2">
                        <p className="font-medium">Requirements:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Student ID number</li>
                          <li>Valid photo ID (for in-person requests)</li>
                          <li>Dates of attendance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold">Pay Transcript Fee</h4>
                      <p className="mt-1">
                        Pay the transcript processing fee online or at the
                        Cashier's Office.
                      </p>
                      <div className="mt-2">
                        <p className="font-medium">Fee Information:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>$10 per official transcript</li>
                          <li>$5 per unofficial transcript</li>
                          <li>Additional fee for expedited processing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold">Processing</h4>
                      <p className="mt-1">
                        The Registrar's Office processes your transcript
                        request.
                      </p>
                      <div className="mt-2">
                        <p className="font-medium">Processing Time:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Standard: 3-5 working days</li>
                          <li>
                            Expedited: 1-2 working days (additional fee applies)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold">Delivery</h4>
                      <p className="mt-1">
                        Transcripts are delivered according to your specified
                        method.
                      </p>
                      <div className="mt-2">
                        <p className="font-medium">Delivery Options:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Pick up in person (photo ID required)</li>
                          <li>Mail to specified address</li>
                          <li>
                            Electronic delivery (to participating institutions)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Service Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We are committed to the following service standards:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        Maximum waiting time of 30 minutes for in-person
                        services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Email response within 24-48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Phone calls answered within 3 rings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Clear communication of processing times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        Courteous and professional service at all times
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    For most university services, you will need:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Valid university ID card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Proof of enrollment (for current students)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Government-issued photo ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Completed service request forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Payment receipts (if applicable)</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Specific services may require additional documentation.
                    Please check with the relevant office for details.
                  </p>
                </CardContent>
              </Card>
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
                    Online Feedback Form
                  </h4>
                  <p className="mt-1 mb-2">
                    Submit feedback, suggestions, or complaints through our
                    online form available on the university website.
                  </p>
                  <Button variant="outline" size="sm">
                    Access Feedback Form
                  </Button>
                </div>

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
                    Send feedback via email to feedback@university.edu or call
                    our dedicated feedback hotline at (555) 123-4567.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-2">Feedback Response Process</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    All feedback is logged and assigned a tracking number.
                  </li>
                  <li>
                    You will receive acknowledgment of your feedback within 24
                    hours.
                  </li>
                  <li>
                    Your feedback is forwarded to the relevant department or
                    office for review.
                  </li>
                  <li>
                    A response or resolution will be provided within 5 working
                    days for standard inquiries.
                  </li>
                  <li>
                    Complex issues may require additional time, but you will be
                    kept informed of progress.
                  </li>
                </ol>
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
                  <Button className="w-full">Take Current Survey</Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
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
              </Card>
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
          <Button className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Download Complete Citizens Charter (PDF)
          </Button>
        </div>
      </div>
    </div>
  );
}
