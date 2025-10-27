"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";

type NavLink = {
  id?: string;
  label: string;
  href?: string;
  external?: boolean;
  children?: NavLink[];
};

type NavSection = {
  id: string;
  label: string;
  links: NavLink[];
};

const NAV_SECTIONS: NavSection[] = [
  {
    id: "about",
    label: "About Us",
    links: [
      {
        id: "about-university",
        label: "The University",
        children: [
          { label: "History", href: "/about/university/history" },
          {
            label: "Mission, Vision and Objectives",
            href: "/about/university/mission-vision",
          },
          { label: "University Seal", href: "/about/university/seal" },
          { label: "University Hymn", href: "/about/university/hymn" },
        ],
      },
      { label: "Campus History", href: "/about/campus-history" },
      { label: "Campus Officials", href: "/about/campus-officials" },
      { label: "Offices", href: "/about/offices" },
      { label: "Faculty and Staffs", href: "/about/faculty-staff" },
      { label: "Campus Map", href: "/about/campus-map" },
      { label: "Careers", href: "/about/careers" },
      { label: "Citizens Charter", href: "/about/citizens-charter" },
    ],
  },
  {
    id: "admission",
    label: "Admission",
    links: [
      {
        label: "Requirements and Procedures",
        href: "/admission/requirements-procedures",
      },
      {
        label: "Academic Programs",
        href: "/admission/academic-programs",
      },
      {
        label: "Admission Portal",
        href: "https://admission.cvsu.edu.ph/",
        external: true,
      },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    links: [
      { label: "Departments", href: "/academics/departments" },
      { label: "Library Services", href: "/academics/library-services" },
      { label: "Academic Calendar", href: "/academics/academic-calendar" },
    ],
  },
  {
    id: "research",
    label: "Research",
    links: [
      {
        label: "Research and Development",
        href: "/research/research-development",
      },
      {
        label: "Extension Services",
        href: "/research/extension-services",
      },
    ],
  },
  {
    id: "students",
    label: "Students",
    links: [
      {
        label: "Student Organizations",
        href: "/students/student-organizations",
      },
      { label: "Job Placement", href: "/students/job-placement" },
      {
        label: "Student Portal",
        href: "https://studentportal.cvsu-bacoor.com/",
        external: true,
      },
      {
        label: "Open Distance Learning",
        href: "/students/open-distance-learning",
      },
      {
        label: "Open Distance eLearning",
        href: "https://elearning.cvsu.edu.ph/",
        external: true,
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    links: [
      {
        label: "Student Portal",
        href: "https://studentportal.cvsu-bacoor.com/",
        external: true,
      },
      {
        label: "Integrated Library System",
        href: "https://library.cvsu.edu.ph/landing/?view=campus&code=BACOORCITY",
        external: true,
      },
      {
        label: "Open Distance eLearning",
        href: "https://elearning.cvsu.edu.ph/",
        external: true,
      },
      {
        label: "Downloadable Forms",
        href: "/services/downloadable-forms",
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [desktopNested, setDesktopNested] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [mobileNested, setMobileNested] = useState<string | null>(null);

  const isMobile = useMobileMenu();

  useEffect(() => {
    if (isMobile) {
      setDesktopDropdown(null);
      setDesktopNested(null);
    } else {
      setMobileSection(null);
      setMobileNested(null);
      setIsOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isOpen) {
      setMobileSection(null);
      setMobileNested(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopDropdown(null);
        setDesktopNested(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleMobileSection = (id: string) => {
    setMobileSection((prev) => (prev === id ? null : id));
    setMobileNested(null);
  };

  const toggleMobileNested = (id: string) => {
    setMobileNested((prev) => (prev === id ? null : id));
  };

  const toggleDesktopDropdown = (id: string) => {
    setDesktopDropdown((prev) => (prev === id ? null : id));
    setDesktopNested(null);
  };

  const closeDesktopDropdowns = () => {
    setDesktopDropdown(null);
    setDesktopNested(null);
  };

  const renderLink = (link: NavLink, variant: "mobile" | "desktop") => {
    const baseClasses =
      "block rounded-sm px-2 py-1.5 text-sm font-medium transition-colors";
    const desktopClasses =
      "text-white hover:bg-royal-blue-600 hover:text-canary-yellow-500";
    const mobileClasses =
      "text-muted-foreground hover:text-royal-blue-600 focus:text-royal-blue-600";

    return (
      <Link
        key={link.href}
        href={link.href ?? "#"}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        className={cn(
          baseClasses,
          variant === "desktop" ? desktopClasses : mobileClasses
        )}
        onClick={() => {
          if (variant === "mobile") {
            setIsOpen(false);
          }
        }}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-royal-blue-900/70 to-royal-blue-800/40 backdrop-blur-sm text-white">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Mobile hamburger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="mr-2 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <Menu className="h-5 w-5 text-primary hover:text-white" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[280px] sm:w-[340px] overflow-y-auto px-0"
          >
            <div className="flex items-center gap-3 px-4 pb-4 pt-2 border-b border-muted">
              <Image src="/logo.png" width={32} height={32} alt="Logo" />
              <span className="font-semibold text-sm text-royal-blue-800 leading-tight">
                Cavite State University - Bacoor City Campus
              </span>
            </div>

            <nav className="flex flex-col gap-2 px-2 py-4">
              {NAV_SECTIONS.map((section) => {
                const isSectionOpen = mobileSection === section.id;

                return (
                  <div key={section.id}>
                    <button
                      type="button"
                      onClick={() => toggleMobileSection(section.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-semibold text-royal-blue-800 transition-colors",
                        isSectionOpen && "bg-royal-blue-50"
                      )}
                      aria-expanded={isSectionOpen}
                    >
                      {section.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isSectionOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {isSectionOpen && (
                      <div className="mt-2 space-y-1 rounded-md bg-white/70 px-3 py-2">
                        {section.links.map((link) => {
                          if (link.children && link.id) {
                            const isNestedOpen = mobileNested === link.id;

                            return (
                              <Fragment key={link.id}>
                                <button
                                  type="button"
                                  onClick={() => toggleMobileNested(link.id!)}
                                  className={cn(
                                    "flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm font-medium text-royal-blue-700 transition-colors",
                                    isNestedOpen && "bg-royal-blue-50"
                                  )}
                                  aria-expanded={isNestedOpen}
                                >
                                  {link.label}
                                  <ChevronDown
                                    className={cn(
                                      "h-4 w-4 transition-transform",
                                      isNestedOpen && "rotate-180"
                                    )}
                                  />
                                </button>
                                {isNestedOpen && (
                                  <div className="ml-2 mt-1 space-y-1 border-l border-royal-blue-100 pl-3">
                                    {link.children?.map((child) =>
                                      renderLink(child, "mobile")
                                    )}
                                  </div>
                                )}
                              </Fragment>
                            );
                          }

                          return renderLink(link, "mobile");
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2 text-white">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="hidden font-bold sm:inline-block leading-tight">
            Cavite State University - Bacoor City Campus
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-4">
            {NAV_SECTIONS.map((section) => {
              const isOpenDesktop = desktopDropdown === section.id;

              return (
                <div
                  key={section.id}
                  className="relative"
                  onMouseEnter={() => {
                    setDesktopDropdown(section.id);
                    setDesktopNested(null);
                  }}
                  onMouseLeave={closeDesktopDropdowns}
                >
                  <Button
                    variant="link"
                    className={cn(
                      "group flex items-center gap-1 text-sm lg:text-base font-medium text-white hover:text-canary-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canary-yellow-500/70"
                    )}
                    aria-haspopup="true"
                    aria-expanded={isOpenDesktop}
                    onFocus={() => setDesktopDropdown(section.id)}
                    onClick={() => toggleDesktopDropdown(section.id)}
                  >
                    {section.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isOpenDesktop && "rotate-180"
                      )}
                    />
                  </Button>

                  {isOpenDesktop && (
                    <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-md bg-accent/95 shadow-lg backdrop-blur">
                      <div className="p-2">
                        {section.links.map((link) => {
                          if (link.children && link.id) {
                            const isNestedOpen = desktopNested === link.id;

                            return (
                              <div
                                key={link.id}
                                className="relative rounded-sm px-2 py-1.5 text-sm text-white hover:bg-royal-blue-600 hover:text-canary-yellow-500"
                                onMouseEnter={() => setDesktopNested(link.id!)}
                                onFocus={() => setDesktopNested(link.id!)}
                                onMouseLeave={() => setDesktopNested(null)}
                                onBlur={() => setDesktopNested(null)}
                              >
                                <button
                                  type="button"
                                  className="flex w-full items-center justify-between text-left font-medium focus:outline-none"
                                  aria-haspopup="true"
                                  aria-expanded={isNestedOpen}
                                >
                                  {link.label}
                                  <ChevronRight className="h-4 w-4" />
                                </button>

                                {isNestedOpen && (
                                  <div className="absolute left-full top-0 z-50 ml-2 w-64 rounded-md bg-accent/95 shadow-lg backdrop-blur">
                                    <div className="p-2">
                                      {link.children?.map((child) =>
                                        renderLink(child, "desktop")
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          }

                          return renderLink(link, "desktop");
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
