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
              <Link href="/" className="hover:underline">
                About
              </Link>
              <span className="mx-2">/</span>
              <Link href="/" className="hover:underline">
                The University
              </Link>
              <span className="mx-2">/</span>
              <span>History</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="relative h-80 w-full mb-6 animate-element">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="University History"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="prose max-w-none animate-element">
                <h2>Our Founding</h2>
                <p>
                  Founded in 1885, our university began as a small college
                  dedicated to providing education in the liberal arts and
                  sciences. The institution was established by a group of
                  visionary educators who believed in the power of education to
                  transform lives and communities.
                </p>

                <h2>Early Development</h2>
                <p>
                  In the early 20th century, the college expanded its curriculum
                  to include professional programs in engineering, business, and
                  education. This period of growth was marked by the
                  construction of several iconic buildings that still stand on
                  our campus today, serving as a testament to our rich heritage.
                </p>

                <h2>Expansion and Growth</h2>
                <p>
                  Following World War II, the institution experienced
                  unprecedented growth in enrollment and academic offerings. In
                  1950, it was officially designated as a university, reflecting
                  its expanded mission and scope. The subsequent decades saw the
                  establishment of new colleges, research centers, and
                  facilities.
                </p>

                <h2>Modern Era</h2>
                <p>
                  Today, our university stands as a leading institution of
                  higher education, recognized for its excellence in teaching,
                  research, and community engagement. With a diverse student
                  body of over 25,000 students from around the world, we
                  continue to uphold our founding principles while embracing
                  innovation and addressing the challenges of the 21st century.
                </p>

                <h2>Looking Forward</h2>
                <p>
                  As we look to the future, we remain committed to our mission
                  of providing accessible, high-quality education that prepares
                  students for leadership and service in a diverse and global
                  society. Our strategic plan outlines ambitious goals for
                  enhancing student success, advancing research and creative
                  activity, and strengthening our community partnerships.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <h3 className="text-xl font-bold mb-4">Key Milestones</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="font-bold">1885:</span>
                    <span>Institution founded</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">1910:</span>
                    <span>First professional programs established</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">1950:</span>
                    <span>Granted university status</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">1975:</span>
                    <span>Research center established</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">2000:</span>
                    <span>Major campus expansion</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">2015:</span>
                    <span>Celebrated 130th anniversary</span>
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
