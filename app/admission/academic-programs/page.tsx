import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Layers,
  Microscope,
  Users,
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
import AnimatedPage from "@/components/animated-page";
import BackToTop from "@/components/back-to-top";

export default function AcademicProgramsPage() {
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
            <h1 className="text-3xl font-bold mb-2">Academic Programs</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Admission
              <span className="mx-2">/</span>
              <span>Academic Programs</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 animate-element">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Discover Your Path to Excellence
              </h2>
              <p className="mb-4">
                Our university offers a wide range of graduate programs designed
                to prepare students for successful careers and meaningful
                contributions to society.
              </p>
              <p className="mb-4">
                With a focus on academic excellence, practical experience, and
                innovative research, our programs provide students with the
                knowledge, skills, and perspectives needed to thrive in a
                rapidly changing world.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                {/* <Button>Apply Now</Button> */}
                {/* <Button variant="outline">Download Program Catalog</Button> */}
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="University Students in Classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Tabs defaultValue="undergraduate" className="mb-2 animate-element">
            {/* <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="undergraduate">
                Undergraduate Programs
              </TabsTrigger>
              <TabsTrigger value="graduate">Graduate Programs</TabsTrigger>
              <TabsTrigger value="professional">
                Professional Programs
              </TabsTrigger>
            </TabsList> */}

            {/* Undergraduate Programs Tab */}
            <TabsContent value="undergraduate" className="pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* College of Arts and Sciences */}
                <Card className="col-span-3">
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Academic Programs
                    </CardTitle>
                    <CardDescription>
                      Our academic programs are designed to develop well-rounded
                      professionals equipped with the knowledge and skills
                      needed in today’s competitive world. We offer a diverse
                      range of disciplines in technology, business, education,
                      social sciences, and hospitality—each fostering
                      excellence, innovation, and leadership. Through quality
                      instruction and hands-on learning, we prepare students to
                      become competent and responsible contributors to society.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      <div>
                        <h4 className="font-bold text-sm mb-2">
                          Department of Computer Studies
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>Bachelor of Science in Information Technology</li>
                          <li>Bachelor of Science in Computer Science</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-2">
                          Department of Arts and Sciences
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>Bachelor of Science in Psychology</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-2">
                          Department of Management Studies
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>Bachelor of Science in Hospitality Management</li>
                          <li>
                            Bachelor of Science in Business Administration Major
                            in Marketing Management
                          </li>
                          <li>
                            Bachelor of Science in Business Administration Major
                            in Human Resource Management
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-2">
                          Department of Teacher Education
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>
                            Bachelor of Science in Secondary Education Major in
                            Mathematics
                          </li>
                          <li>
                            Bachelor of Science in Secondary Education Major in
                            English
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-2">
                          Department of Criminology
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>Bachelor of Science in Criminology</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* College of Business
                <Card className="col-span-3">
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      College of Business
                    </CardTitle>
                    <CardDescription>
                      Preparing future business leaders with a strong foundation
                      in business principles and practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Business Administration
                        </h4>
                        <ul className="space-y-1">
                          <li>
                            Bachelor of Science in Business Administration
                          </li>
                          <li>Bachelor of Science in Accounting</li>
                          <li>Bachelor of Science in Finance</li>
                          <li>Bachelor of Science in Marketing</li>
                          <li>Bachelor of Science in Management</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Economics & Analytics
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Economics</li>
                          <li>Bachelor of Science in Business Analytics</li>
                          <li>Bachelor of Science in Business Economics</li>
                          <li>Bachelor of Science in Financial Economics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Entrepreneurship & Innovation
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Entrepreneurship</li>
                          <li>Bachelor of Science in Innovation Management</li>
                          <li>Bachelor of Science in International Business</li>
                          <li>
                            Bachelor of Science in Supply Chain Management
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
              </div>
            </TabsContent>

            {/* Graduate Programs Tab */}
            {/* <TabsContent value="graduate" className="pt-6"> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
            {/* Master's Programs */}
            {/* <Card className="col-span-3">
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Master's Programs
                    </CardTitle>
                    <CardDescription>
                      Advanced study programs designed to deepen knowledge and
                      expertise in specialized fields
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Arts and Sciences
                        </h4>
                        <ul className="space-y-1">
                          <li>Master of Arts in English</li>
                          <li>Master of Arts in History</li>
                          <li>Master of Science in Psychology</li>
                          <li>Master of Science in Biology</li>
                          <li>Master of Science in Chemistry</li>
                          <li>Master of Science in Mathematics</li>
                          <li>Master of Science in Computer Science</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Business and Management
                        </h4>
                        <ul className="space-y-1">
                          <li>Master of Business Administration (MBA)</li>
                          <li>Master of Science in Accounting</li>
                          <li>Master of Science in Finance</li>
                          <li>Master of Science in Marketing</li>
                          <li>Master of Science in Human Resources</li>
                          <li>Master of Science in Business Analytics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Engineering and Technology
                        </h4>
                        <ul className="space-y-1">
                          <li>Master of Science in Civil Engineering</li>
                          <li>Master of Science in Mechanical Engineering</li>
                          <li>Master of Science in Electrical Engineering</li>
                          <li>Master of Science in Computer Engineering</li>
                          <li>
                            Master of Science in Environmental Engineering
                          </li>
                          <li>Master of Science in Biomedical Engineering</li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Education</h4>
                        <ul className="space-y-1">
                          <li>
                            Master of Education in Curriculum and Instruction
                          </li>
                          <li>Master of Education in Educational Leadership</li>
                          <li>Master of Education in Special Education</li>
                          <li>Master of Education in Educational Technology</li>
                          <li>Master of Arts in Teaching</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Health Sciences
                        </h4>
                        <ul className="space-y-1">
                          <li>Master of Public Health</li>
                          <li>Master of Science in Nursing</li>
                          <li>Master of Science in Nutrition</li>
                          <li>Master of Science in Physical Therapy</li>
                          <li>Master of Science in Occupational Therapy</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
            {/* </div> */}
            {/* </TabsContent> */}

            {/* Professional Programs Tab */}
            <TabsContent value="professional" className="pt-6">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Law School
                    </CardTitle>
                    <CardDescription>
                      Preparing future legal professionals with a strong
                      foundation in legal theory and practice
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="font-medium">Juris Doctor (J.D.)</li>
                      <li className="font-medium">Master of Laws (LL.M.)</li>
                      <li className="font-medium">
                        Doctor of Juridical Science (S.J.D.)
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-bold text-lg mb-2">
                        Specializations
                      </h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <li>Corporate Law</li>
                        <li>Criminal Law</li>
                        <li>Environmental Law</li>
                        <li>Family Law</li>
                        <li>Intellectual Property Law</li>
                        <li>International Law</li>
                        <li>Tax Law</li>
                        <li>Public Interest Law</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div> */}
            </TabsContent>
          </Tabs>

          {/* <div className="bg-slate-50 p-6 rounded-lg animate-element">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Program Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Program Catalog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Download our comprehensive program catalog with detailed
                    course descriptions, requirements, and outcomes.
                  </p>
                  <Button variant="outline" className="w-full">
                    Download Catalog
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Advisors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Connect with our academic advisors to discuss program
                    options and create your academic plan.
                  </p>
                  <Button className="w-full">Schedule Appointment</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Program Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Use our interactive tool to compare different programs and
                    find the best fit for your goals.
                  </p>
                  <Button variant="outline" className="w-full">
                    Compare Programs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </div>
      </AnimatedPage>
      <BackToTop />
    </>
  );
}
