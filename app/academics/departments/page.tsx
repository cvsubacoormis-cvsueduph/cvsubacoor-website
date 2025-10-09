"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, GraduationCap, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { departments, type Department } from "@/data/departments";
import { cn } from "@/lib/utils";

export default function DepartmentsPage() {
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2 text-[#0A2463]">
          Academic Departments
        </h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          Academics
          <span className="mx-2">/</span>
          <span>Departments</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader className="bg-[#0A2463] text-white">
              <CardTitle>Our Departments</CardTitle>
              <CardDescription className="text-gray-200">
                Select a department to view details
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y">
                {departments.map((dept) => (
                  <li key={dept.id}>
                    <button
                      onClick={() => setSelectedDepartment(dept)}
                      className={cn(
                        "w-full text-left px-4 py-3 flex items-center justify-between transition-colors",
                        selectedDepartment?.id === dept.id
                          ? "bg-[#FFD700] text-[#0A2463] font-medium"
                          : "hover:bg-gray-100"
                      )}
                    >
                      <span>{dept.name}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {selectedDepartment ? (
            <div className="space-y-6 animate-fadeIn">
              <Card>
                <CardHeader className="bg-[#0A2463] text-white">
                  <CardTitle>{selectedDepartment.name}</CardTitle>
                  <CardDescription className="text-gray-200">
                    Department Overview
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    {/* <Image
                      src={selectedDepartment.image || "/placeholder.svg"}
                      alt={selectedDepartment.name}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover rounded-md mb-4"
                    /> */}
                    <p className="text-gray-700">
                      {selectedDepartment.description}
                    </p>
                  </div>

                  <Tabs defaultValue="programs">
                    <TabsList className="grid grid-cols-2 mb-4">
                      <TabsTrigger value="programs">Programs</TabsTrigger>
                      <TabsTrigger value="faculty">Faculty</TabsTrigger>
                      {/* <TabsTrigger value="contact">Contact</TabsTrigger> */}
                    </TabsList>
                    <TabsContent value="programs" className="space-y-4">
                      <h3 className="text-lg font-medium text-[#0A2463]">
                        Available Programs
                      </h3>
                      <ul className="space-y-2">
                        {selectedDepartment.programs.map((program, index) => (
                          <li key={index} className="flex items-start">
                            <GraduationCap className="h-5 w-5 mr-2 text-[#0A2463] mt-0.5" />
                            <span>{program}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="faculty" className="space-y-4">
                      <h3 className="text-lg font-medium text-[#0A2463]">
                        Faculty Information
                      </h3>
                      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center p-4 bg-gray-50 rounded-md">
                          <Users className="h-8 w-8 text-[#0A2463] mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">
                              Faculty Members
                            </p>
                            <p className="text-xl font-bold">
                              {selectedDepartment.facultyCount}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center p-4 bg-gray-50 rounded-md">
                          <GraduationCap className="h-8 w-8 text-[#0A2463] mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">
                              Students Enrolled
                            </p>
                            <p className="text-xl font-bold">
                              {selectedDepartment.studentCount}
                            </p>
                          </div>
                        </div>
                      </div> */}
                      <div className="mt-4">
                        <h4 className="font-medium">Department Chairperson</h4>
                        <p>{selectedDepartment.chairperson}</p>
                        <br />
                        <h4 className="font-medium">Coordinator</h4>
                        {selectedDepartment?.coordinator?.map(
                          (coordinator, index) => (
                            <p key={index}>
                              {coordinator}
                              {index <
                                (selectedDepartment.coordinator?.length || 0) -
                                  1 && <br />}
                            </p>
                          )
                        )}
                      </div>
                    </TabsContent>
                    {/* <TabsContent value="contact" className="space-y-4">
                      <h3 className="text-lg font-medium text-[#0A2463]">
                        Contact Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 mr-2 text-[#0A2463] mt-0.5" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-blue-600">
                              {selectedDepartment.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 mr-2 text-[#0A2463] mt-0.5" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <p>{selectedDepartment.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mr-2 text-[#0A2463] mt-0.5" />
                          <div>
                            <p className="font-medium">Location</p>
                            <p>{selectedDepartment.location}</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent> */}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="h-full flex items-center justify-center p-6 text-center">
              <div>
                <h2 className="text-2xl font-bold text-[#0A2463] mb-2">
                  Select a Department
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose a department from the list to view detailed information
                  about programs, faculty, and contact details.
                </p>
                <Image
                  src="/at-glance-bg.png"
                  alt="University campus"
                  width={800}
                  height={800}
                  className="mx-auto rounded-md"
                />
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
