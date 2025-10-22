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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedPage from "@/components/animated-page";

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
            <h1 className="text-3xl font-bold mb-2">
              Admission Requirements and Procedures
            </h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Admission
              <span className="mx-2">/</span>
              <span>Requirements and Procedures</span>
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
                        <Clock className="h-5 w-5 text-primary" />
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

                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Application Procedure
                    </h3>
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            1
                          </div>
                          <div>
                            <h4 className="font-bold">Create an Account</h4>
                            <p className="mt-1">
                              Create an account on our online application
                              portal.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            2
                          </div>
                          <div>
                            <h4 className="font-bold">
                              Complete the Application
                            </h4>
                            <p className="mt-1">
                              Fill out the online application form with your
                              personal information, academic history, and
                              extracurricular activities.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            3
                          </div>
                          <div>
                            <h4 className="font-bold">Pay Application Fee</h4>
                            <p className="mt-1">
                              Pay the non-refundable application fee of $50 (fee
                              waivers available for eligible students).
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            4
                          </div>
                          <div>
                            <h4 className="font-bold">
                              Submit Required Documents
                            </h4>
                            <p className="mt-1">
                              Upload or arrange for submission of all required
                              documents, including transcripts, test scores,
                              essays, and recommendations.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            5
                          </div>
                          <div>
                            <h4 className="font-bold">
                              Check Application Status
                            </h4>
                            <p className="mt-1">
                              Monitor your application status through the online
                              portal. You will be notified when your application
                              is complete and under review.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            6
                          </div>
                          <div>
                            <h4 className="font-bold">
                              Receive Admission Decision
                            </h4>
                            <p className="mt-1">
                              Admission decisions are typically released within
                              4-6 weeks after your application is complete.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
