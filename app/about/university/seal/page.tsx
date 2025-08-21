import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function UniversitySealPage() {
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
          <Link href="/" className="hover:underline">
            About
          </Link>
          <span className="mx-2">/</span>
          <Link href="/" className="hover:underline">
            The University
          </Link>
          <span className="mx-2">/</span>
          <span>University Seal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative h-64 w-64">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="University Seal"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="prose max-w-none">
            <h2>The Official Seal</h2>
            <p>
              The University Seal is the official emblem of our institution,
              representing our heritage, values, and aspirations. Adopted in
              1950 when the institution was granted university status, the seal
              appears on official documents, diplomas, and ceremonial items.
            </p>

            <h2>Symbolism</h2>
            <p>
              The seal contains several symbolic elements that reflect the
              university's mission and identity:
            </p>

            <ul>
              <li>
                <strong>The Open Book:</strong> Represents knowledge, learning,
                and the pursuit of truth.
              </li>
              <li>
                <strong>The Torch:</strong> Symbolizes enlightenment and the
                illuminating power of education.
              </li>
              <li>
                <strong>The Laurel Wreath:</strong> Signifies achievement,
                honor, and the recognition of excellence.
              </li>
              <li>
                <strong>The Shield:</strong> Represents protection, strength,
                and the university's role as a guardian of academic freedom.
              </li>
              <li>
                <strong>The Year of Founding:</strong> "1885" marks the
                establishment of our institution and our long-standing
                commitment to education.
              </li>
            </ul>

            <h2>Official Usage</h2>
            <p>
              The University Seal is reserved for official and ceremonial
              purposes. Its use is governed by the Office of the President and
              is protected by copyright. The seal appears on:
            </p>

            <ul>
              <li>Official diplomas and certificates</li>
              <li>Legal and official university documents</li>
              <li>Presidential communications</li>
              <li>
                Ceremonial items such as the mace and presidential medallion
              </li>
              <li>Select university buildings and monuments</li>
            </ul>

            <h2>Design Evolution</h2>
            <p>
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
                The seal must not be altered, distorted, or modified in any way
              </li>
              <li>Minimum size for reproduction is 1 inch in diameter</li>
              <li>
                The seal should be reproduced in the official university colors
                or in a single color
              </li>
              <li>
                Permission for use must be obtained from the Office of
                Communications
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
              <li>
                <Link
                  href="/about/brand-guidelines"
                  className="text-primary hover:underline"
                >
                  Brand Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
