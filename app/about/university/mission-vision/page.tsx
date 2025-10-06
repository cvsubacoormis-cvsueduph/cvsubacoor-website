import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, EyeIcon, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MissionVisionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">
          Mission, Vision and Objectives
        </h1>
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
          <span>Mission, Vision and Objectives</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-slate-50">
          <CardHeader className="flex flex-row items-center gap-4">
            <Target className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md">
              Cavite State University shall provide excellent, equitable and
              relevant educational opportunities in the arts, sciences and
              technology through quality instruction and responsive research and
              development activities. It shall produce professional, skilled and
              morally upright individuals for global competitiveness.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-50">
          <CardHeader className="flex flex-row items-center gap-4">
            <EyeIcon className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md">
              The premier university in historic Cavite globally recognized for
              excellence in character development, academics, research,
              innovation and sustainable community engagement.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Pursuing the highest standards in all our endeavors, from
                academics to administration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integrity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Upholding ethical principles and fostering a culture of honesty
                and transparency.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Diversity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Embracing and celebrating the richness of different
                perspectives, backgrounds, and experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Encouraging creative thinking and pioneering approaches to
                address complex challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Strategic Objectives</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Enhance Student Success</h3>
              <p>
                Provide comprehensive support services, innovative teaching
                methods, and enriching experiences that promote student
                learning, development, and achievement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                Advance Research and Creative Activity
              </h3>
              <p>
                Foster a vibrant research culture that generates new knowledge,
                addresses societal challenges, and enhances the educational
                experience of our students.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                Strengthen Community Engagement
              </h3>
              <p>
                Develop meaningful partnerships with local, national, and global
                communities to address shared challenges and create
                opportunities for mutual benefit.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                Ensure Institutional Sustainability
              </h3>
              <p>
                Maintain financial stability, enhance operational efficiency,
                and implement environmentally sustainable practices to ensure
                the long-term viability of the institution.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                Promote Global Engagement
              </h3>
              <p>
                Expand international partnerships, enhance global learning
                opportunities, and foster cross-cultural understanding to
                prepare students for success in an interconnected world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
