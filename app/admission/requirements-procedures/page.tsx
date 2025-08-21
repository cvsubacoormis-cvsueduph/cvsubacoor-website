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
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function RequirementsProceduresPage() {
  return (
    <>
      <Navbar />
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
                Thank you for your interest in University Name. We are committed
                to providing accessible, high-quality education to qualified
                students from diverse backgrounds.
              </p>
              <p className="mb-4">
                Our admission process is designed to identify students who will
                thrive in our academic environment and contribute to our vibrant
                campus community. We evaluate applications holistically,
                considering academic achievement, personal qualities, and
                potential for growth.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button>Apply Now</Button>
                <Button variant="outline">Contact Admissions</Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="University Students"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Tabs defaultValue="undergraduate" className="mb-12 animate-element">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
              <TabsTrigger value="international">International</TabsTrigger>
              <TabsTrigger value="transfer">Transfer</TabsTrigger>
            </TabsList>

            {/* Undergraduate Tab */}
            <TabsContent value="undergraduate" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Undergraduate Admission Requirements
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">Academic Requirements</h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>High school diploma or equivalent</li>
                            <li>Minimum GPA of 3.0 on a 4.0 scale</li>
                            <li>
                              Completion of college preparatory curriculum
                              including:
                              <ul className="list-disc pl-5 mt-1">
                                <li>4 years of English</li>
                                <li>
                                  3 years of Mathematics (including Algebra II)
                                </li>
                                <li>
                                  3 years of Science (including laboratory
                                  science)
                                </li>
                                <li>3 years of Social Studies</li>
                                <li>2 years of the same foreign language</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">
                            Standardized Test Scores
                          </h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              SAT or ACT scores (optional for 2025-2026 academic
                              year)
                            </li>
                            <li>Recommended SAT score: 1200+ (combined)</li>
                            <li>Recommended ACT score: 24+</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">Additional Requirements</h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>Personal statement/essay</li>
                            <li>Two letters of recommendation</li>
                            <li>List of extracurricular activities</li>
                            <li>Interview (for select programs)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

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
                          <p className="font-bold">Early Decision</p>
                          <p>November 1, 2025</p>
                        </div>
                        <div>
                          <p className="font-bold">Early Action</p>
                          <p>December 1, 2025</p>
                        </div>
                        <div>
                          <p className="font-bold">Regular Decision</p>
                          <p>February 1, 2026</p>
                        </div>
                        <div>
                          <p className="font-bold">Transfer Students</p>
                          <p>March 15, 2026 (Fall)</p>
                          <p>October 15, 2025 (Spring)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Required Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Completed application form</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Official high school transcripts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>SAT/ACT scores (optional)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Personal statement/essay</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Two letters of recommendation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Application fee or waiver</span>
                        </li>
                      </ul>
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
                        Our admissions counselors are here to assist you
                        throughout the application process.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div>
                          <p className="font-medium">Email:</p>
                          <p>admissions@university.edu</p>
                        </div>
                        <div>
                          <p className="font-medium">Phone:</p>
                          <p>(555) 123-4567</p>
                        </div>
                        <div>
                          <p className="font-medium">Office Hours:</p>
                          <p>Monday-Friday, 8:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Schedule a Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Graduate Tab */}
            <TabsContent value="graduate" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Graduate Admission Requirements
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">Academic Requirements</h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              Bachelor's degree from an accredited institution
                            </li>
                            <li>
                              Minimum GPA of 3.0 on a 4.0 scale in undergraduate
                              coursework
                            </li>
                            <li>
                              Completion of program-specific prerequisites
                              (varies by program)
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">
                            Standardized Test Scores
                          </h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              GRE or GMAT scores (required for most programs)
                            </li>
                            <li>
                              Some programs may have minimum score requirements
                            </li>
                            <li>
                              Test waivers available for qualified applicants
                              with significant work experience
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-bold">Additional Requirements</h4>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>Statement of purpose/research interests</li>
                            <li>Three letters of recommendation</li>
                            <li>Current resume or CV</li>
                            <li>Writing sample (for select programs)</li>
                            <li>Portfolio (for arts and design programs)</li>
                            <li>Interview (for select programs)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

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
                            <h4 className="font-bold">Research Programs</h4>
                            <p className="mt-1">
                              Review our graduate programs and identify the one
                              that aligns with your academic and career goals.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            2
                          </div>
                          <div>
                            <h4 className="font-bold">Create an Account</h4>
                            <p className="mt-1">
                              Create an account on our graduate application
                              portal.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            3
                          </div>
                          <div>
                            <h4 className="font-bold">
                              Complete the Application
                            </h4>
                            <p className="mt-1">
                              Fill out the online application form with your
                              personal information, academic history, and
                              professional experience.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            4
                          </div>
                          <div>
                            <h4 className="font-bold">Pay Application Fee</h4>
                            <p className="mt-1">
                              Pay the non-refundable application fee of $75 (fee
                              waivers available for eligible applicants).
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            5
                          </div>
                          <div>
                            <h4 className="font-bold">
                              Submit Required Documents
                            </h4>
                            <p className="mt-1">
                              Upload or arrange for submission of all required
                              documents, including transcripts, test scores,
                              statement of purpose, resume, and recommendations.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            6
                          </div>
                          <div>
                            <h4 className="font-bold">Department Review</h4>
                            <p className="mt-1">
                              Your application will be reviewed by the graduate
                              admissions committee of your chosen department.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                            7
                          </div>
                          <div>
                            <h4 className="font-bold">
                              Receive Admission Decision
                            </h4>
                            <p className="mt-1">
                              Admission decisions are typically released within
                              6-8 weeks after your application is complete.
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
                          <p className="font-bold">Fall Semester</p>
                          <p>Priority: January 15, 2026</p>
                          <p>Final: April 1, 2026</p>
                        </div>
                        <div>
                          <p className="font-bold">Spring Semester</p>
                          <p>Priority: September 15, 2025</p>
                          <p>Final: November 1, 2025</p>
                        </div>
                        <div>
                          <p className="font-bold">Summer Session</p>
                          <p>March 1, 2026</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Note: Some programs have different deadlines. Please
                          check specific program requirements.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        Program-Specific Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Many graduate programs have additional requirements
                        beyond the general admission criteria. Examples include:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>
                            <span className="font-medium">Business:</span> GMAT
                            scores, work experience
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>
                            <span className="font-medium">Engineering:</span>{" "}
                            Specific undergraduate coursework
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>
                            <span className="font-medium">Psychology:</span>{" "}
                            Research experience, specific GRE subject test
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>
                            <span className="font-medium">Fine Arts:</span>{" "}
                            Portfolio submission
                          </span>
                        </li>
                      </ul>
                      <Button className="w-full" asChild>
                        <Link href="/admission/how-to-apply">How to Apply</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Application Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium">9-12 months before:</p>
                          <p className="text-sm">
                            Research programs, prepare for standardized tests
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">6-9 months before:</p>
                          <p className="text-sm">
                            Take required tests, request recommendation letters
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">3-6 months before:</p>
                          <p className="text-sm">
                            Write statement of purpose, prepare application
                            materials
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">1-3 months before:</p>
                          <p className="text-sm">
                            Submit application, ensure all materials are
                            received
                          </p>
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
      <Footer />
      <BackToTop />
    </>
  );
}
