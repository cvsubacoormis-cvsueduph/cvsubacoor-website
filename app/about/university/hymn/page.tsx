import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Music } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

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
          About
          <span className="mx-2">/</span>
          The University
          <span className="mx-2">/</span>
          <span>University Hymn</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="relative h-80 w-full mb-6">
            <div className="relative w-full h-80">
              <iframe
                className="absolute inset-0 w-full h-full"
                width="770"
                height="330"
                src="https://www.youtube.com/embed/A2fOWAo9jME"
                title="Cavite State University Hymn"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
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
                    Hail Alma Mater Dear
                    <br />
                    CvSU all the way through
                    <br />
                    Seat of hope that we dream of
                    <br />
                    Under the sky so blue
                  </p>

                  <p>
                    Verdant fields God’s gift to you
                    <br />
                    Open our lives a new
                    <br />
                    Oh, our hearts, our hands, our minds, too
                    <br />
                    In your bossom thrive and grow.
                  </p>

                  <p>
                    <strong>Chorus:</strong>
                    <br />
                    Seeds of hope are now in bloom
                    <br />
                    Vigilant sons to you have sworn
                    <br />
                    To CvSU our faith goes on
                    <br />
                    Cradle of hope and bright vision.
                  </p>

                  <p>
                    These sturdy arms that care
                    <br />
                    Are the nation builders
                    <br />
                    Blessed with strength and power
                    <br />
                    To our Almighty we offer.
                  </p>

                  <p>
                    We Pray for CvSU
                    <br />
                    God’s Blessing be with you
                    <br />
                    You’re the master, we’re the builders
                    <br />
                    CvSU leads forever.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* <h2>Musical Composition</h2>
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
            </p> */}
          </div>
        </div>

        <div className="space-y-6">
          {/* <div className="bg-slate-50 p-6 rounded-lg">
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
          </div> */}

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Hymn Performances</h3>
            <ul className="space-y-3">
              <li>Commencement Ceremonies</li>
              <li>Convocation</li>
              <li>Alumni Reunions</li>
              <li>Presidential Inaugurations</li>
              {/* <li>Founder's Day Celebrations</li> */}
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
