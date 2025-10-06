import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/animated-page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function HistoryPage() {
  return (
    <>
      <Navbar />
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

              <div className="prose max-w-none animate-element">
                <h2>The Cavite State University (CvSU)</h2>
                <p>
                  has its humble beginnings in 1906 as the Indang Intermediate
                  School with the American Thomasites as the first teachers.
                  Several transformations in the name of the school took place;
                  Indang Farm School in 1918, Indang Rural High School in 1927,
                  and Don Severino National Agriculture School in 1958. In 1964,
                  the school was converted into a State College by virtue of
                  Republic Act 3917 and became known as Don Severino
                  Agricultural College (DSAC). On January 22, 1998, by virtue of
                  Republic Act No.8468, DSAC was converted into Cavite State
                  University. In 2001, Cavite College of Fisheries (CACOF) in
                  Naic, Cavite and Cavite College of Arts and Trade (CCAT) in
                  Rosario, Cavite, were integrated to the University by virtue
                  of CHED Memo No. 27 s. 2000. Since then, additional campuses
                  in the province were established through memoranda of
                  agreement with the LGUs. At present, CvSU has 11 campuses in
                  the province. The main campus, approximately 70 hectares in
                  land area and named as Don Severino delas Alas Campus, is in
                  Indang, Cavite. CvSU is mandated “to provide excellent,
                  equitable and relevant educational opportunities in the arts,
                  sciences and technology through quality instruction, and
                  responsive research and development activities. It shall
                  produce professional, skilled and morally upright individuals
                  for global competitiveness.” The University is offering close
                  to 100 curricular programs in the undergraduate and graduate
                  levels. It has more than 25,000 students and 1,200 faculty and
                  staff from all campuses. The University is also authorized to
                  certify and confer appropriate academic degrees in accordance
                  with the Expanded Tertiary Education and Accreditation Program
                  (ETEEAP). It has been accredited by TESDA as Trade and Testing
                  Venue, and designated by the Department of Agriculture as the
                  National Center for Research and Development for Coffee and
                  Urban Agriculture. It also hosts the Southern Tagalog
                  Agriculture Research and Development Consortium (STARDEC), the
                  Affiliated Renewable Energy Center for Region IV-A, and the
                  Regional ICT Center for Region IV-A. CvSU adheres to its
                  commitment to Truth, Excellence and Service as it aims to be
                  the “premier University in historic Cavite recognized for
                  excellence in the development of globally competitive and
                  morally upright individuals”.
                </p>
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
      <Footer />
      <BackToTop />
    </>
  );
}
