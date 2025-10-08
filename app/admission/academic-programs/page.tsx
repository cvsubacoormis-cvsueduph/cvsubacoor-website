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
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-element">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Discover Your Path to Excellence
              </h2>
              <p className="mb-4">
                Our university offers a wide range of undergraduate and graduate
                programs designed to prepare students for successful careers and
                meaningful contributions to society.
              </p>
              <p className="mb-4">
                With a focus on academic excellence, practical experience, and
                innovative research, our programs provide students with the
                knowledge, skills, and perspectives needed to thrive in a
                rapidly changing world.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button>Apply Now</Button>
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

          <Tabs defaultValue="undergraduate" className="mb-12 animate-element">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="undergraduate">
                Undergraduate Programs
              </TabsTrigger>
              <TabsTrigger value="graduate">Graduate Programs</TabsTrigger>
              <TabsTrigger value="professional">
                Professional Programs
              </TabsTrigger>
            </TabsList>

            {/* Undergraduate Programs Tab */}
            <TabsContent value="undergraduate" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* College of Arts and Sciences */}
                <Card className="col-span-3">
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      College of Arts and Sciences
                    </CardTitle>
                    <CardDescription>
                      Offering a diverse range of programs in humanities, social
                      sciences, and natural sciences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Humanities</h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Arts in English</li>
                          <li>Bachelor of Arts in History</li>
                          <li>Bachelor of Arts in Philosophy</li>
                          <li>Bachelor of Arts in Foreign Languages</li>
                          <li>Bachelor of Fine Arts</li>
                          <li>Bachelor of Music</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Social Sciences
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Psychology</li>
                          <li>Bachelor of Arts in Sociology</li>
                          <li>Bachelor of Arts in Political Science</li>
                          <li>Bachelor of Arts in Economics</li>
                          <li>Bachelor of Arts in Anthropology</li>
                          <li>Bachelor of Arts in Communication</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Natural Sciences
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Biology</li>
                          <li>Bachelor of Science in Chemistry</li>
                          <li>Bachelor of Science in Physics</li>
                          <li>Bachelor of Science in Mathematics</li>
                          <li>Bachelor of Science in Environmental Science</li>
                          <li>Bachelor of Science in Computer Science</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* College of Business */}
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
                </Card>

                {/* College of Engineering */}
                <Card className="col-span-3">
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <Microscope className="h-5 w-5 text-primary" />
                      College of Engineering
                    </CardTitle>
                    <CardDescription>
                      Developing innovative engineers to solve complex problems
                      and create sustainable solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Traditional Engineering
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Civil Engineering</li>
                          <li>Bachelor of Science in Mechanical Engineering</li>
                          <li>Bachelor of Science in Electrical Engineering</li>
                          <li>Bachelor of Science in Chemical Engineering</li>
                          <li>Bachelor of Science in Industrial Engineering</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Emerging Fields
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Computer Engineering</li>
                          <li>Bachelor of Science in Software Engineering</li>
                          <li>Bachelor of Science in Biomedical Engineering</li>
                          <li>
                            Bachelor of Science in Environmental Engineering
                          </li>
                          <li>Bachelor of Science in Materials Science</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Specialized Engineering
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Aerospace Engineering</li>
                          <li>Bachelor of Science in Petroleum Engineering</li>
                          <li>
                            Bachelor of Science in Agricultural Engineering
                          </li>
                          <li>
                            Bachelor of Science in Architectural Engineering
                          </li>
                          <li>Bachelor of Science in Robotics Engineering</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* College of Education */}
                <Card className="col-span-3">
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      College of Education
                    </CardTitle>
                    <CardDescription>
                      Preparing educators who inspire learning and transform
                      lives through innovative teaching
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Elementary Education
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Elementary Education</li>
                          <li>
                            Bachelor of Science in Early Childhood Education
                          </li>
                          <li>Bachelor of Science in Special Education</li>
                          <li>Bachelor of Science in Literacy Education</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Secondary Education
                        </h4>
                        <ul className="space-y-1">
                          <li>
                            Bachelor of Science in Secondary Education - English
                          </li>
                          <li>
                            Bachelor of Science in Secondary Education -
                            Mathematics
                          </li>
                          <li>
                            Bachelor of Science in Secondary Education - Science
                          </li>
                          <li>
                            Bachelor of Science in Secondary Education - Social
                            Studies
                          </li>
                          <li>
                            Bachelor of Science in Secondary Education - Foreign
                            Languages
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Specialized Education
                        </h4>
                        <ul className="space-y-1">
                          <li>Bachelor of Science in Physical Education</li>
                          <li>Bachelor of Science in Health Education</li>
                          <li>Bachelor of Science in Art Education</li>
                          <li>Bachelor of Science in Music Education</li>
                          <li>Bachelor of Science in Educational Technology</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Graduate Programs Tab */}
            <TabsContent value="graduate" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Master's Programs */}
                <Card className="col-span-3">
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
                </Card>

                {/* Doctoral Programs */}
                <Card className="col-span-3">
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Doctoral Programs
                    </CardTitle>
                    <CardDescription>
                      The highest level of academic achievement, focusing on
                      original research and scholarly contributions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Arts and Sciences
                        </h4>
                        <ul className="space-y-1">
                          <li>Ph.D. in English</li>
                          <li>Ph.D. in History</li>
                          <li>Ph.D. in Psychology</li>
                          <li>Ph.D. in Biology</li>
                          <li>Ph.D. in Chemistry</li>
                          <li>Ph.D. in Mathematics</li>
                          <li>Ph.D. in Computer Science</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Business and Management
                        </h4>
                        <ul className="space-y-1">
                          <li>Ph.D. in Business Administration</li>
                          <li>Ph.D. in Economics</li>
                          <li>Ph.D. in Finance</li>
                          <li>Ph.D. in Management</li>
                          <li>Doctor of Business Administration (DBA)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Engineering and Technology
                        </h4>
                        <ul className="space-y-1">
                          <li>Ph.D. in Civil Engineering</li>
                          <li>Ph.D. in Mechanical Engineering</li>
                          <li>Ph.D. in Electrical Engineering</li>
                          <li>Ph.D. in Computer Engineering</li>
                          <li>Ph.D. in Environmental Engineering</li>
                          <li>Ph.D. in Biomedical Engineering</li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Education</h4>
                        <ul className="space-y-1">
                          <li>Ph.D. in Education</li>
                          <li>Ed.D. in Educational Leadership</li>
                          <li>Ph.D. in Curriculum and Instruction</li>
                          <li>Ph.D. in Educational Psychology</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          Health Sciences
                        </h4>
                        <ul className="space-y-1">
                          <li>Ph.D. in Public Health</li>
                          <li>Ph.D. in Nursing</li>
                          <li>Ph.D. in Pharmaceutical Sciences</li>
                          <li>Doctor of Physical Therapy (DPT)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Professional Programs Tab */}
            <TabsContent value="professional" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                <Card>
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Medical School
                    </CardTitle>
                    <CardDescription>
                      Training the next generation of healthcare professionals
                      with cutting-edge medical education
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="font-medium">Doctor of Medicine (M.D.)</li>
                      <li className="font-medium">
                        Doctor of Osteopathic Medicine (D.O.)
                      </li>
                      <li className="font-medium">
                        M.D./Ph.D. Dual Degree Program
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-bold text-lg mb-2">
                        Residency Programs
                      </h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <li>Internal Medicine</li>
                        <li>Surgery</li>
                        <li>Pediatrics</li>
                        <li>Psychiatry</li>
                        <li>Family Medicine</li>
                        <li>Emergency Medicine</li>
                        <li>Obstetrics & Gynecology</li>
                        <li>Anesthesiology</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      School of Pharmacy
                    </CardTitle>
                    <CardDescription>
                      Educating pharmacists to provide patient-centered care and
                      advance pharmaceutical sciences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="font-medium">
                        Doctor of Pharmacy (Pharm.D.)
                      </li>
                      <li className="font-medium">
                        Ph.D. in Pharmaceutical Sciences
                      </li>
                      <li className="font-medium">
                        Pharm.D./MBA Dual Degree Program
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-bold text-lg mb-2">
                        Specializations
                      </h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <li>Clinical Pharmacy</li>
                        <li>Pharmaceutical Research</li>
                        <li>Community Pharmacy</li>
                        <li>Hospital Pharmacy</li>
                        <li>Ambulatory Care</li>
                        <li>Managed Care</li>
                        <li>Regulatory Affairs</li>
                        <li>Pharmacoeconomics</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-royal-blue-50">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      School of Dentistry
                    </CardTitle>
                    <CardDescription>
                      Developing skilled dental professionals committed to oral
                      health and patient care
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="font-medium">
                        Doctor of Dental Surgery (D.D.S.)
                      </li>
                      <li className="font-medium">
                        Doctor of Dental Medicine (D.M.D.)
                      </li>
                      <li className="font-medium">
                        Master of Science in Dentistry (M.S.D.)
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-bold text-lg mb-2">
                        Specializations
                      </h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <li>Orthodontics</li>
                        <li>Periodontics</li>
                        <li>Endodontics</li>
                        <li>Oral Surgery</li>
                        <li>Pediatric Dentistry</li>
                        <li>Prosthodontics</li>
                        <li>Oral Pathology</li>
                        <li>Dental Public Health</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-slate-50 p-6 rounded-lg animate-element">
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
          </div>
        </div>
      </AnimatedPage>
      <BackToTop />
    </>
  );
}
