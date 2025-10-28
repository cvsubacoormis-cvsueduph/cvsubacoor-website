"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { UniversitySealPageSkeleton } from "@/components/skeleton/UniversitySealPageSkeleton";

export default function UniversitySealPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <UniversitySealPageSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">University Seal</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          The University
          <span className="mx-2">/</span>
          <span>University Seal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative h-96 w-96">
              <Image
                src="/seal.png"
                alt="University Seal"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="prose max-w-none mx-8 md:mx-0 md:p-8 space-y-8">
            <h2 className="mb-4 text-lg font-semibold">
              The Official Univeristy Seal
            </h2>
            <p className="mb-4">
              The University Seal is the official emblem of our institution,
              representing our heritage, values, and aspirations. In{" "}
              <span className="font-bold">1998</span> when the institution was
              granted university status, the seal appears on official documents,
              diplomas, and ceremonial items.
            </p>
            <p className="mb-4">
              The primary colors of the university seal are{" "}
              <span className="font-bold">green and gold</span>.
            </p>
            <h2 className="mb-4">
              The CvSU Seal is composed of interrelated symbols that embody the
              University’s vision, mission, and core programs.
            </h2>
            <p className="mb-4">
              The seal contains several symbolic elements that reflect the
              university's mission and identity:
            </p>

            <ol className="list-decimal space-y-4 ml-5">
              <li className="mb-2">
                At the center of the seal, the{" "}
                <span className="font-bold">book and torch</span> represent
                knowledge and wisdom. They also stand for education, the
                humanities, and the social science programs offered by the
                University.
              </li>
              <li className="mb-2">
                The{" "}
                <span className="font-bold">coffee twig with ripe berries</span>{" "}
                on the right side of the book and torch represents Cavite’s
                strong agricultural foundation. It also signifies the
                University’s focus on agriculture and its related academic
                programs.
              </li>
              <li className="mb-2">
                The <span className="font-bold">atomic structure</span> on the
                left side of the book symbolizes the University’s science
                programs and, more importantly, its commitment to scientific
                research and discovery.
              </li>
              <li className="mb-2">
                The <span className="font-bold">gear</span> beneath the book and
                torch represents the University’s engineering and technology
                programs.
              </li>
              <li className="mb-2">
                In the University Seal, the figure{" "}
                <span className="font-bold">1906</span>, written in gold against
                a dark green background below, marks the year when CvSU began as
                an intermediate school in Indang, Cavite. The background of all
                elements is light green. The seal’s overall triangular shape
                represents the University’s three core functions — instruction,
                research, and extension.
              </li>
              <li className="mb-2">
                The <span className="font-bold">torch’s flame</span> is
                artistically shaped to form the letters “CvSU,” the adopted
                acronym of Cavite State University. It symbolizes the eternal
                flame of knowledge that continues to guide and inspire the
                University.
              </li>
            </ol>

            <h2 className="mb-4">Official Usage</h2>
            <p className="mb-4">
              The University Seal is reserved for official and ceremonial
              purposes. Its use is governed by the Office of the President and
              is protected by copyright. The seal appears on:
            </p>

            <ul className="space-y-4">
              <li className="mb-2">Official diplomas and certificates</li>
              <li className="mb-2">Legal and official university documents</li>
              <li className="mb-2">Presidential communications</li>
              <li className="mb-2">
                Ceremonial items such as the mace and presidential medallion
              </li>
              <li className="mb-2">
                Select university buildings and monuments
              </li>
            </ul>

            <h2 className="mb-4">Design Evolution</h2>
            <p className="mb-4">
              While maintaining its core elements, the seal has undergone subtle
              refinements over the decades to enhance its visual clarity and
              ensure it remains a timeless symbol of our institution. The
              current version was last updated in 2010 during the university's
              125th anniversary celebration.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Seal Guidelines</h3>
            <ul className="space-y-3">
              <li>
                The seal must not be altered, distorted, or modified in any way.
              </li>
              {/* <li>Minimum size for reproduction is 1 inch in diameter</li> */}
              <li>
                The seal should be reproduced in the official university colors
                or in a single color.
              </li>
              <li>
                Permission for use must be obtained from the Office of
                Administration.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Related Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about/university/history"
                  className="text-primary hover:underline"
                >
                  University History
                </Link>
              </li>
              <li>
                <Link
                  href="/about/university/mission-vision"
                  className="text-primary hover:underline"
                >
                  Mission, Vision and Objectives
                </Link>
              </li>
              <li>
                <Link
                  href="/about/university/hymn"
                  className="text-primary hover:underline"
                >
                  University Hymn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
