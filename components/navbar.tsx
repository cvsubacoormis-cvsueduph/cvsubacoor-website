"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, GraduationCap, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// Add the import for our new hook at the top of the file
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import Image from "next/image";

// Find the Navbar component function declaration:
// And update it to:
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<
    string | null
  >(null);
  const isMobile = useMobileMenu();

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
  };

  const handleNestedMouseEnter = (nestedDropdown: string) => {
    setActiveNestedDropdown(nestedDropdown);
  };

  const handleNestedMouseLeave = () => {
    setActiveNestedDropdown(null);
  };

  // Add a useEffect to close dropdowns when switching to mobile view
  // Add this after the handleNestedMouseLeave function:
  useEffect(() => {
    if (isMobile) {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }
  }, [isMobile]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-royal-blue-900/70 to-royal-blue-800/40 backdrop-blur-sm text-white">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5 text-primary hover:text-white" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] overflow-y-auto"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-12 w-12 text-royal-blue-800 mr-2" />
              <span className="font-bold text-sm text-royal-blue-800">
                Cavite State University - Bacoor City Campus
              </span>
            </div>
            <nav className="flex flex-col gap-4">
              <div className="space-y-3">
                <div className="font-semibold text-lg text-royal-blue-800">
                  About Us
                </div>
                <div className="pl-4 space-y-2">
                  <div className="space-y-2">
                    <div className="font-medium text-royal-blue-700">
                      The University
                    </div>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/about/university/history"
                        className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        History
                      </Link>
                      <Link
                        href="/about/university/mission-vision"
                        className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Mission, Vision and Objectives
                      </Link>
                      <Link
                        href="/about/university/seal"
                        className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        University Seal
                      </Link>
                      <Link
                        href="/about/university/hymn"
                        className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        University Hymn
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/about/campus-history"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Campus History
                  </Link>
                  <Link
                    href="/about/campus-officials"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Campus Officials
                  </Link>
                  <Link
                    href="/about/offices"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Offices
                  </Link>
                  <Link
                    href="/about/faculty-staff"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Faculty and Staffs
                  </Link>
                  <Link
                    href="/about/campus-map"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Campus Map
                  </Link>
                  <Link
                    href="/about/careers"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    href="/about/citizens-charter"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Citizens Charter
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-semibold text-lg text-royal-blue-800">
                  Admission
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/admission/requirements-procedures"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Requirements and Procedures
                  </Link>
                  <Link
                    href="/admission/academic-programs"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Academic Programs
                  </Link>
                  <Link
                    href="#"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Admission Portal
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-semibold text-lg text-royal-blue-800">
                  Academics
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/academics/departments"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Departments
                  </Link>
                  <Link
                    href="/academics/library-services"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Library Services
                  </Link>
                  <Link
                    href="/academics/academic-calendar"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Academic Calendar
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-semibold text-lg text-royal-blue-800">
                  Research and Extension
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/research/research-development"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Research and Development
                  </Link>
                  <Link
                    href="/research/extension-services"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Extension Services
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-semibold text-lg text-royal-blue-800">
                  Students
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/students/student-organizations"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Organizations
                  </Link>
                  <Link
                    href="/students/job-placement"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Job Placement
                  </Link>
                  <Link
                    href="#"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Portal
                  </Link>
                  <Link
                    href="/students/open-distance-learning"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Open Distance Learning
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-semibold text-lg text-royal-blue-800">
                  Services
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="#"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Portal
                  </Link>
                  <Link
                    href="#"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Integrated Library System
                  </Link>
                  <Link
                    href="#"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Open Distance eLearning
                  </Link>
                  <Link
                    href="/services/downloadable-forms"
                    className="block text-muted-foreground hover:text-royal-blue-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Downloadable Forms
                  </Link>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2 text-white">
          <Image src="/logo.png" alt="Logo" width={34} height={34} />
          <span className="hidden font-bold sm:inline-block">
            Cavite State University - Bacoor City Campus
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex flex-wrap justify-center gap-1 lg:gap-4">
            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                variant="link"
                className="group flex items-center gap-1 text-sm lg:text-base font-medium text-white hover:text-canary-yellow-500"
              >
                About Us
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "about" ? "rotate-180" : ""
                  )}
                />
              </Button>
              {activeDropdown === "about" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-md bg-accent shadow-md">
                  <div className="p-2">
                    {/* The University - Nested Dropdown */}
                    <div
                      className="relative rounded-sm px-2 py-1.5 text-sm hover:bg-royal-blue-600 hover:text-accent-foreground"
                      onMouseEnter={() => handleNestedMouseEnter("university")}
                      onMouseLeave={handleNestedMouseLeave}
                    >
                      <div className="flex items-center justify-between text-white hover:text-canary-yellow-500  font-medium">
                        <span>The University</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>

                      {activeNestedDropdown === "university" && (
                        <div className="absolute left-full top-0 z-50 ml-1 w-64 rounded-md bg-accent shadow-md">
                          <div className="p-2">
                            <Link
                              href="/about/university/history"
                              className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                            >
                              History
                            </Link>
                            <Link
                              href="/about/university/mission-vision"
                              className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                            >
                              Mission, Vision and Objectives
                            </Link>
                            <Link
                              href="/about/university/seal"
                              className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                            >
                              University Seal
                            </Link>
                            <Link
                              href="/about/university/hymn"
                              className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                            >
                              University Hymn
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>

                    <Link
                      href="/about/campus-history"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Campus History
                    </Link>
                    <Link
                      href="/about/campus-officials"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Campus Officials
                    </Link>
                    <Link
                      href="/about/offices"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Offices
                    </Link>
                    <Link
                      href="/about/faculty-staff"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Faculty and Staffs
                    </Link>
                    <Link
                      href="/about/campus-map"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Campus Map
                    </Link>
                    <Link
                      href="/about/careers"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/about/citizens-charter"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Citizens Charter
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Admission Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("admission")}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                variant="link"
                className="group flex items-center gap-1 text-sm lg:text-base font-medium text-white hover:text-canary-yellow-500"
              >
                Admission
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "admission" ? "rotate-180" : ""
                  )}
                />
              </Button>
              {activeDropdown === "admission" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-accent shadow-md">
                  <div className="p-2">
                    <Link
                      href="/admission/requirements-procedures"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Requirements and Procedures
                    </Link>
                    <Link
                      href="/admission/academic-programs"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Academic Programs
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Admission Portal
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Academics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("academics")}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                variant="link"
                className="group flex items-center gap-1 text-sm lg:text-base font-medium text-white hover:text-canary-yellow-500"
              >
                Academics
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "academics" ? "rotate-180" : ""
                  )}
                />
              </Button>
              {activeDropdown === "academics" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-accent shadow-md">
                  <div className="p-2">
                    <Link
                      href="/academics/departments"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Departments
                    </Link>
                    <Link
                      href="/academics/library-services"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Library Services
                    </Link>
                    <Link
                      href="/academics/academic-calendar"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Academic Calendar
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Research and Extension Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("research")}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                variant="link"
                className="group flex items-center gap-1 text-sm lg:text-base font-medium text-white hover:text-canary-yellow-500"
              >
                Research
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "research" ? "rotate-180" : ""
                  )}
                />
              </Button>
              {activeDropdown === "research" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-accent shadow-md">
                  <div className="p-2">
                    <Link
                      href="/research/research-development"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Research and Development
                    </Link>
                    <Link
                      href="/research/extension-services"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Extension Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Students Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("students")}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                variant="link"
                className="group flex items-center gap-1 text-sm lg:text-base font-medium text-white hover:text-canary-yellow-500"
              >
                Students
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "students" ? "rotate-180" : ""
                  )}
                />
              </Button>
              {activeDropdown === "students" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md  bg-accent shadow-md">
                  <div className="p-2">
                    <Link
                      href="/students/student-organizations"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Student Organizations
                    </Link>
                    <Link
                      href="/students/job-placement"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Job Placement
                    </Link>
                    <Link
                      href="https://studentportal.cvsu-bacoor.com/"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Student Portal
                    </Link>
                    <Link
                      href="/students/open-distance-learning"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Open Distance Learning
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                variant="link"
                className="group flex items-center gap-1 text-sm lg:text-base font-medium text-white hover:text-canary-yellow-500"
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "services" ? "rotate-180" : ""
                  )}
                />
              </Button>
              {activeDropdown === "services" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-accent shadow-md">
                  <div className="p-2">
                    <Link
                      href="https://studentportal.cvsu-bacoor.com/"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Student Portal
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Integrated Library System
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Open Distance eLearning
                    </Link>
                    <Link
                      href="/services/downloadable-forms"
                      className="block rounded-sm px-2 py-1.5 text-sm text-white font-medium hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                    >
                      Downloadable Forms
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
