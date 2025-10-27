import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  HelpCircle,
  MessageCircleWarning,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedPage from "@/components/animated-page";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RequirementsProceduresPage() {
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
            <h1 className="text-3xl font-bold mb-2">Admission Requirements</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Admission
              <span className="mx-2">/</span>
              <span>Requirements</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-element">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Begin Your Journey With Us
              </h2>
              <p className="mb-4">
                Thank you for your interest in Cavite State University Bacoor
                City Campus. We are committed to providing accessible,
                high-quality education to qualified students from diverse
                backgrounds.
              </p>
              <p className="mb-4">
                Our admission process is designed to identify students who will
                thrive in our academic environment and contribute to our vibrant
                campus community. We evaluate applications holistically,
                considering academic achievement, personal qualities, and
                potential for growth.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/admission/how-to-apply">
                  <Button>Apply Now</Button>{" "}
                </Link>
                {/* <Button variant="outline">Contact Admissions</Button> */}
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/at-glance-bg.png"
                alt="University Students"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Tabs defaultValue="undergraduate" className="mb-12 animate-element">
            {/* <TabsList className="grid w-full grid-cols-">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
            </TabsList> */}

            <Card className="mb-12 animate-element">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-bold">
                  <span className="mr-2 text-primary">
                    <MessageCircleWarning />
                  </span>
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Beginning October 15, 2025, the Online Admission System will
                  be open for aspiring applicants to process their application
                  for College Admission for the First Semester, S.Y. 2026-2027.
                </p>

                <h3 className="font-bold mb-2">Reminders</h3>
                <span className="font-bold">
                  The following are strictly prohibited and will mean
                  non-evaluation of your application
                </span>
                <ol className="list-decimal pl-5 mt-1 space-y-1">
                  <li>
                    Not declaring the correct category of applicant and
                    TRACK/STRAND
                  </li>
                  <li>
                    Any deception, falsification, or dishonesty in the declared
                    information details
                  </li>
                  <li>
                    Not following the intructions posted in the announcenments
                  </li>
                  <li>
                    Uploading of incorrect, incompatible, mismatched, or
                    falsified documentary requirements
                  </li>
                  <li>
                    Creation or use of a different email account to deliberately
                    generate multiple applications
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Undergraduate Tab */}
            <TabsContent value="undergraduate" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Admission Requirements
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-9 w-9 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">Academic Requirements</h4>
                          <h5 className="font-bold">
                            First Year Applicant (Current Grade 12 Students)
                          </h5>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              Scanned Copy or screenshot of completed Grade 11
                              Report Card (1st and 2nd Semester)
                            </li>
                            <li>
                              Scanned copy or screenshot of the Certificate from
                              the Principal or Adviser indicating that the
                              applicant is currently enrolled as a Grade 12
                              student with the track/strand and school year{" "}
                              <span className="font-bold">
                                (Certificate of Enrollment)
                              </span>{" "}
                              <br /> <br />
                              <span className="font-bold italic">
                                NOTE: The certificate must be originally signed.
                                No E-signature.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-9 w-9 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">
                            First Year Applicant (Senior High School Graduates)
                          </h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              Scanned copy of screenshot of completed Grade 12
                              Report Card (1st and 2nd Semester).
                            </li>
                            <li>
                              Scanned copy of screenshot of the{" "}
                              <span className="text-blue-600 font-bold">
                                Certificate of Non-Issuance of FORM 137/SF-10
                              </span>{" "}
                              for college admission (This certification shall
                              prove that the applicant has never been enrolled
                              in another university/college).
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">
                            First Year Applicant (Alternative Learning System or
                            ALS Completer/Passer)
                          </h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              Scanned copy of screenshot of Certificate of
                              Rating (COR) with eligibility to enroll in
                              college.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">Transferee</h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              Scanned copy or screenshot of Transcript of
                              Records (TOR) with graduation date, if not yet
                              available, Certificate of Grades (COG)
                            </li>
                            <li>Certificate of Good Moral Character</li>
                            <li>Honorable Dismissal</li>
                            <li>NBI or Police Clearance</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">
                            Associate, Certificate, Vocational or Diploma Degree
                            Holder
                          </h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              Scanned copy or screenshot of Transcript of
                              Records (TOR) with graduation date.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircleWarning className="h-5 w-5 text-primary" />
                        Reminders: Transferee &
                        Associate/Certificate/Vocational/Diploma Degree Holders
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-md font-semibold">
                          Applicants from this category will only undergo
                          college evaluation and will not take the admission
                          examination. The result of the evaluation from the
                          college shall determine if the applicant is qualified
                          to proceed with the application or not.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Application Deadlines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold">Online Application</p>
                          <p>October 15, 2025</p>
                        </div>
                        <div>
                          <p className="font-bold">Deadline</p>
                          <p>April 16, 2026</p>
                        </div>
                        <div>
                          <p className="font-bold">Onsite Validation</p>
                          <p>October 20, 2025</p>
                        </div>
                        <div>
                          <p className="font-bold">Deadline</p>
                          <p>April 16, 2026</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        Need Help?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Our admissions team are here to assist you throughout
                        the application process.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div>
                          <p className="font-medium">Email:</p>
                          <p>admissions@university.edu</p>
                        </div>
                        <div>
                          <p className="font-medium">Telephone:</p>
                          <p>(046) 476-5029</p>
                        </div>
                        <div>
                          <p className="font-medium">Office Hours:</p>
                          <p>Monday-Thursday, 7:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircleWarning className="h-5 w-5 text-primary" />
                    Application Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table className="mb-4">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>Definition</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>First-year applicant/New Student</TableCell>
                        <TableCell>
                          A.{" "}
                          <span className="font-semibold">
                            Current Grade 12 student
                          </span>{" "}
                          is expecting to finish shs at the end of the school
                          year (2025-2026). <br />
                          B. <span className="font-semibold">
                            SHS Graduate
                          </span>{" "}
                          who have never been enrolled in any
                          college/university. <br />
                          C.{" "}
                          <span className="font-semibold">
                            ALS Completer
                          </span>{" "}
                          <br />
                          D.{" "}
                          <span className="font-semibold">
                            Associate, Certificate, Vocational, or Diploma
                            Degree Holder
                          </span>{" "}
                          - one who has finished a certificate, vocational,
                          diploma course or associate degree in any
                          college/university.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Transferee</TableCell>
                        <TableCell>
                          Applicants who started their college level at another
                          universitys/school or another CvSU campus.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* International Tab */}
            <TabsContent value="international" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6"></div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedPage>
    </>
  );
}
