import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/animated-page";

export default function HistoryPage() {
  return (
    <>
      <AnimatedPage>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6 animate-element">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">University History</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              About
              <span className="mx-2">/</span>
              The University
              <span className="mx-2">/</span>
              <span>History</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="relative h-80 w-full mb-6 animate-element">
                <Image
                  src="/cvsu-front-scaled.jpg"
                  alt="University History"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="prose max-w-none animate-element rtl:dark:text-gray-300">
                <h2 className="text-2xl font-bold mb-4">
                  The Cavite State University (CvSU)
                </h2>

                {/* Section for History */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Our History</h3>
                  <p>
                    Cavite State University (CvSU) began in 1906 as the Indang
                    Intermediate School, with American Thomasites as its first
                    teachers. The institution underwent several name changes
                    over the years:
                  </p>
                  <ul className="list-disc list-inside space-y-1 my-4 pl-4">
                    <li>
                      <span className="font-semibold">1918:</span> Indang Farm
                      School
                    </li>
                    <li>
                      <span className="font-semibold">1927:</span> Indang Rural
                      High School
                    </li>
                    <li>
                      <span className="font-semibold">1958:</span> Don Severino
                      National Agriculture School
                    </li>
                  </ul>
                  <p>
                    In 1964, through Republic Act 3917, it was converted into a
                    State College known as Don Severino Agricultural College
                    (DSAC). On January 22, 1998, DSAC was elevated to university
                    status by Republic Act No. 8468, officially becoming Cavite
                    State University.
                  </p>
                </div>

                {/* Section for Expansion */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Expansion and Growth
                  </h3>
                  <p>
                    In 2001, the Cavite College of Fisheries (CACOF) in Naic and
                    the Cavite College of Arts and Trade (CCAT) in Rosario were
                    integrated into the university. Since then, additional
                    campuses have been established throughout the province via
                    agreements with local government units.
                  </p>
                  <p className="mt-2">
                    Today, CvSU has 11 campuses. The main campus, named the Don
                    Severino delas Alas Campus, is located in Indang and spans
                    approximately 70 hectares.
                  </p>
                </div>

                {/* Section for Mandate and Offerings */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Mandate & Academic Offerings
                  </h3>
                  <p>
                    CvSU is mandated to "provide excellent, equitable and
                    relevant educational opportunities in the arts, sciences and
                    technology through quality instruction, and responsive
                    research and development activities." It aims to produce
                    professional, skilled, and morally upright individuals for
                    global competitiveness.
                  </p>
                  <p className="mt-2">
                    The university offers close to 100 undergraduate and
                    graduate programs to over 25,000 students, supported by
                    1,200 faculty and staff members.
                  </p>
                </div>

                {/* Section for Accreditations and Recognitions */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Accreditations and Recognitions
                  </h3>
                  <p>
                    The university holds several key accreditations and
                    designations:
                  </p>
                  <ul className="list-disc list-inside space-y-1 my-4 pl-4">
                    <li>
                      Authorized to confer degrees through the Expanded Tertiary
                      Education and Accreditation Program (ETEEAP).
                    </li>
                    <li>Accredited by TESDA as a Trade and Testing Venue.</li>
                    <li>
                      Designated by the Department of Agriculture as the
                      National Center for Research and Development for Coffee
                      and Urban Agriculture.
                    </li>
                    <li>
                      Hosts the Southern Tagalog Agriculture Research and
                      Development Consortium (STARDEC).
                    </li>
                    <li>
                      Hosts the Affiliated Renewable Energy Center for Region
                      IV-A.
                    </li>
                    <li>Hosts the Regional ICT Center for Region IV-A.</li>
                  </ul>
                </div>

                {/* Section for Vision and Mission */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Vision and Commitment
                  </h3>
                  <p>
                    Adhering to its commitment to{" "}
                    <span className="font-semibold">
                      Truth, Excellence, and Service
                    </span>
                    , CvSU aims to be the "premier University in historic Cavite
                    recognized for excellence in the development of globally
                    competitive and morally upright individuals."
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Key Milestones</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="font-bold">1906:</span>
                    <span>
                      Founded as the Indang Intermediate School by American
                      teachers known as the Thomasites.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">1918:</span>
                    <span>Became the Indang Farm School.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">1927:</span>
                    <span>Renamed the Indang Rural High School.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">1958:</span>
                    <span>
                      Converted into the Don Severino National Agriculture
                      School.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">1964:</span>
                    <span>
                      By virtue of Republic Act No. 3917, the school was
                      converted into a state college and named the Don Severino
                      Agricultural College (DSAC).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">1998:</span>
                    <span>
                      DSAC was converted into the Cavite State University by
                      Republic Act No. 8468.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">2001:</span>
                    <span>
                      The university expanded by integrating Cavite College of
                      Fisheries in Naic and Cavite College of Arts and Trade in
                      Rosario.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">2000s:</span>
                    <span>
                      CvSU was designated a Center of Development for
                      Agriculture by the Commission on Higher Education (CHED).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">2016:</span>
                    <span>
                      The College of Agriculture, Food, Environment and Natural
                      Resources (CAFENR) was designated a Center of Excellence
                      in Agriculture by CHED.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">2025:</span>
                    <span>
                      Ranked 1501+ globally in the Times Higher Education (THE)
                      Impact Rankings, recognizing its contributions to
                      sustainability.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Related Links</h3>
                <ul className="space-y-2">
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
                      href="/about/university/hymn"
                      className="text-primary hover:underline"
                    >
                      University Hymn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/campus-history"
                      className="text-primary hover:underline"
                    >
                      Campus History
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
