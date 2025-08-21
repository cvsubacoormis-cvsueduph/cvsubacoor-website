import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Music } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function UniversityHymnPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">University Hymn</h1>
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
          <span>University Hymn</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="relative h-80 w-full mb-6">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="University Choir"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="prose max-w-none">
            <h2>The University Hymn</h2>
            <p>
              The University Hymn serves as a musical embodiment of our
              institution's spirit, values, and aspirations. Composed in 1925 by
              Professor James Anderson with lyrics by Dr. Elizabeth Mitchell,
              the hymn has been a cherished tradition at university ceremonies
              and events for nearly a century.
            </p>

            <h2>History</h2>
            <p>
              The hymn was first performed at the university's 40th anniversary
              celebration in 1925. It was officially adopted as the University
              Hymn by the Board of Trustees in 1926. Since then, it has been
              performed at commencement ceremonies, convocations, and other
              significant university events.
            </p>

            <h2>Lyrics</h2>
            <Card className="my-6">
              <CardContent className="p-6">
                <div className="italic text-center space-y-4">
                  <p>
                    Alma Mater, standing proud,
                    <br />
                    Beacon bright for all to see.
                    <br />
                    Guiding light of truth and knowledge,
                    <br />
                    Leading us to victory.
                  </p>

                  <p>
                    Through the years your halls have echoed
                    <br />
                    With the steps of scholars true.
                    <br />
                    Hearts and minds forever loyal,
                    <br />
                    We pledge our faith anew.
                  </p>

                  <p>
                    <strong>Chorus:</strong>
                    <br />
                    Hail to thee, our Alma Mater,
                    <br />
                    Colors raised of [University Colors].
                    <br />
                    Wisdom, strength, and honor guide us,
                    <br />
                    As we strive for excellence.
                  </p>

                  <p>
                    From thy halls we journey forward,
                    <br />
                    Bearing gifts that you bestow.
                    <br />
                    Knowledge, friendship, inspiration,
                    <br />
                    Wherever we may go.
                  </p>

                  <p>
                    Through the years we'll remember,
                    <br />
                    All the lessons we have learned.
                    <br />
                    And our hearts will always cherish,
                    <br />
                    The love that we have earned.
                  </p>

                  <p>
                    <em>(Repeat Chorus)</em>
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2>Musical Composition</h2>
            <p>
              The hymn is composed in the key of B-flat major with a dignified,
              stately tempo. The melody combines elements of traditional hymnal
              structure with unique phrases that give it a distinctive
              character. The arrangement includes parts for four-part choir
              (SATB), piano accompaniment, and optional orchestration for
              ceremonial occasions.
            </p>

            <h2>Performance Tradition</h2>
            <p>
              By tradition, the University Hymn is performed at the conclusion
              of formal academic ceremonies. Attendees stand during the
              performance as a sign of respect. The University Choir leads the
              singing at official events, often accompanied by the University
              Orchestra or Brass Ensemble for special occasions.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Listen to the Hymn</h3>
            <div className="flex items-center justify-center p-4 bg-white rounded-md border mb-4">
              <Music className="h-12 w-12 text-primary" />
            </div>
            <div className="space-y-4">
              <Button className="w-full">Play Audio Recording</Button>
              <Button variant="outline" className="w-full">
                Download Sheet Music (PDF)
              </Button>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Hymn Performances</h3>
            <ul className="space-y-3">
              <li>Commencement Ceremonies</li>
              <li>Convocation</li>
              <li>Alumni Reunions</li>
              <li>Presidential Inaugurations</li>
              <li>Founder's Day Celebrations</li>
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
                  href="/about/university/seal"
                  className="text-primary hover:underline"
                >
                  University Seal
                </Link>
              </li>
              <li>
                <Link
                  href="/about/traditions"
                  className="text-primary hover:underline"
                >
                  University Traditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
