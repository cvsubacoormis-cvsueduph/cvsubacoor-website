import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BookCopy,
  CheckCircle,
  EyeIcon,
  Target,
} from "lucide-react";

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

      <Card className="bg-slate-50">
        <CardHeader className="flex flex-row items-center gap-4">
          <BookCopy className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl">Mithiin ng Pamantasan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md">
            “Ang nangungunang pamantasan sa makasaysayang Kabite na kinikilala
            sa kahusayan sa paghubog ng mga indibidwal na may pandaigdigang
            kakayahan at kagandahang asal.”
          </p>
        </CardContent>
      </Card>

      <Card className="bg-slate-50 mt-12">
        <CardHeader className="flex flex-row items-center gap-4">
          <BookCopy className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl">Hangarin ng Pamantasan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md">
            Ang Cavite State university ay makapagbigay ng mahusay, pantay at
            makabuluhang edukasyon sa sining, agham at teknolohiya sa
            pamamagitan ng may kalidad na pagtuturo at tumutugon sa
            pangangailangang pananaliksik at mga gawaing pangkaunlaran.
            Makalikha ito ng mga indibidwal ng dalubhasa, may kasaysayan at
            kagandahan-asal sa pandaigdigang kakayahan.
          </p>
        </CardContent>
      </Card>

      <div className="mb-12 mt-12">
        <h2 className="text-2xl font-bold mb-6">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="h-16">
            <CardHeader className="flex items-center">
              <CardTitle>Truth</CardTitle>
            </CardHeader>
          </Card>

          <Card className="h-16">
            <CardHeader className="flex items-center">
              <CardTitle>Integrity</CardTitle>
            </CardHeader>
          </Card>

          <Card className="h-16">
            <CardHeader className="flex items-center">
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
          </Card>

          <Card className="h-16">
            <CardHeader className="flex items-center">
              <CardTitle>Service</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Objectives</h2>
        <p className="mb-6">
          In addition to, and in support of its mission and policies embodied in
          the charter, the University shall:
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-primary mt-1" />
            <div>
              <p>
                provide a general education program that will promote national
                identity, cultural consciousness, moral integrity and spiritual
                vigor;
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-primary mt-1" />
            <div>
              <p>
                train the nation's manpower in the skills required by the
                national development;
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-primary mt-1" />
            <div>
              <p>
                develop professions that will provide leadership for the nation;
                and
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-primary mt-1" />
            <div>
              <p>
                advance knowledge through research work and apply new knowledge
                for improving the quality of human life and responding
                effectively to changing societal needs and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Card className="bg-slate-50 mt-12">
        <CardHeader className="flex flex-row items-center gap-4">
          <CheckCircle className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl">Quality Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md">
            We Commit to the highest standards of education, value our
            stakeholders, Strive for continual improvement of our products and
            services, and Uphold the University’s tenets of Truth, Excellence,
            and Service to produce globally competitive and morally upright
            individuals.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
