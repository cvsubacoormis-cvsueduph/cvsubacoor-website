"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";
import { NAV_SECTIONS, NavLink } from "@/data/nav-contents";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const isMobile = useMobileMenu();

  const toggleMobileSection = (id: string) => {
    setMobileSection((prev) => (prev === id ? null : id));
  };

  const toggleDesktopDropdown = (id: string) => {
    setDesktopDropdown((prev) => (prev === id ? null : id));
  };

  const renderLink = (link: NavLink, variant: "mobile" | "desktop") => {
    const baseClasses =
      "block rounded-sm px-2 py-1.5 text-sm font-medium transition-colors";
    const desktopClasses =
      "text-white hover:bg-royal-blue-600 hover:text-canary-yellow-500";
    const mobileClasses =
      "text-white hover:text-royal-blue-600 focus:text-canary-yellow-500";

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
            setMobileSection(null);
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
        {/* Mobile & Tablet hamburger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="mr-2 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5 text-primary hover:text-white" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[280px] sm:w-[340px] overflow-y-auto px-0 bg-primary"
          >
            <div className="flex items-end justify-end gap-3 px-4 pb-4 pt-2 border-b border-muted">
              <span className="font-semibold text-sm text-white leading-tight text-right">
                Cavite State University - Bacoor City Campus
              </span>
              <Image src="/logo.png" width={32} height={32} alt="Logo" />
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
                        "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-semibold text-white transition-colors hover:bg-royal-blue-600",
                        isSectionOpen && "bg-royal-blue-700"
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
                      <div className="mt-2 space-y-1 rounded-md bg-royal-blue-800/50 px-3 py-2">
                        {section.links.map((link) => {
                          if (link.children) {
                            return (
                              <div key={link.id}>
                                <div className="px-2 py-1 text-sm font-semibold text-canary-yellow-400">
                                  {link.label}
                                </div>
                                <div className="ml-2 mt-1 space-y-1 border-l-2 border-royal-blue-100/30 pl-3">
                                  {link.children?.map((child) =>
                                    renderLink(child, "mobile")
                                  )}
                                </div>
                              </div>
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
        <Link
          href="/"
          className="flex items-center space-x-2 text-white mr-auto lg:mr-6"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="shrink-0"
          />
          <span className="hidden sm:inline-block font-bold text-sm lg:text-base leading-tight max-w-[200px] lg:max-w-none">
            Cavite State University - Bacoor City Campus
          </span>
        </Link>

        {/* Desktop navigation - Only show on large screens */}
        <nav className="hidden lg:flex flex-1 items-center justify-center">
          <div className="flex items-center justify-center gap-1 xl:gap-3">
            {NAV_SECTIONS.map((section) => {
              const isOpenDesktop = desktopDropdown === section.id;

              return (
                <div
                  key={section.id}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdown(section.id)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <Button
                    variant="link"
                    className="group flex items-center gap-1 text-sm xl:text-base font-medium text-white hover:text-canary-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canary-yellow-500/70 px-2 xl:px-4"
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
                    <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-md bg-accent/95 shadow-lg backdrop-blur border border-royal-blue-600/20">
                      <div className="p-2">
                        {section.links.map((link) => {
                          if (link.children) {
                            return (
                              <div key={link.id}>
                                <div className="px-2 py-1.5 text-sm font-semibold text-canary-yellow-400">
                                  {link.label}
                                </div>
                                <div className="ml-2 space-y-1 border-l-2 border-royal-blue-100/30 pl-3">
                                  {link.children?.map((child) =>
                                    renderLink(child, "desktop")
                                  )}
                                </div>
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
