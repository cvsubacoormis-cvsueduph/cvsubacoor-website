import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CampusHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Campus History</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Campus History</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="relative h-80 w-full mb-6">
            <Image
              src="/at-glance-bg.png"
              alt="Historic Campus"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <Tabs defaultValue="founding">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="founding">Founding</TabsTrigger>
              <TabsTrigger value="expansion">Expansion</TabsTrigger>
              <TabsTrigger value="modern">Modern Era</TabsTrigger>
              <TabsTrigger value="future">Future Plans</TabsTrigger>
            </TabsList>
            <TabsContent value="founding" className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Founding (2008–2012)</h2>
              <p className="mb-4">
                Guided by its mission of truth, excellence, and service, Cavite
                State University – Bacoor City Campus began its journey in 2008
                under the leadership of{" "}
                <span className="font-bold">Dr. Henry O. Garcia</span>, the
                first campus dean.
              </p>
              <p className="mb-4">
                The campus opened with <span className="font-bold">220</span>{" "}
                pioneering students in a modest eight-room building located in
                Queens Row Central. It initially offered four degree programs:
              </p>
              <ul className="list-disc list-inside mb-4 font-semibold">
                <li>Bachelor of Science in Computer Science</li>
                <li>Bachelor of Science in Information Technology</li>
                <li>Bachelor of Science in Business Management</li>
                <li>Bachelor of Science in Hotel and Restaurant Management</li>
              </ul>
              <p className="mb-4">
                In 2009, the Bachelor of Secondary Education program was
                introduced, enrolling 54 students. By 2012, the campus
                celebrated its first commencement exercises with 94 graduates.
                The event was graced by Hon. Strike B. Revilla, a steadfast
                supporter of the campus, as the guest of honor and commencement
                speaker.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="relative w-full">
                  <Image
                    src="/sir-henry.png"
                    alt="Sir Henry"
                    className="object-cover rounded-md"
                    width={350}
                    height={350}
                  />
                </div>
                <div className="relative w-full">
                  <Image
                    src="/hm.png"
                    alt="Early Campus"
                    className="object-cover rounded-md"
                    fill
                  />
                </div>
              </div>
              {/* <p>
                The campus was initially accessible by horse-drawn carriages,
                with the first paved roads being added in 1910. The iconic Main
                Gate was constructed in 1915 as a gift from the graduating
                class, marking the formal entrance to the growing institution.
              </p> */}
            </TabsContent>
            <TabsContent value="expansion" className="pt-6">
              <h2 className="text-2xl font-bold mb-4">
                The Expansion Era (2012–2017)
              </h2>
              <p className="mb-4">
                With its growing student population, Cavite State University
                Bacoor moved to a larger site in{" "}
                <span className="font-semibold">
                  Soldiers Hills IV, Molino VI
                </span>{" "}
                in 2012, enhancing its facilities and learning environment.
              </p>
              <p className="mb-4">
                In <span className="font-semibold">2013</span>, the university
                expanded its offerings to include Bachelor of Science in
                Psychology and Bachelor of Science in Criminology, responding to
                the educational needs of the Bacoor community.
              </p>
              <p className="mb-4">
                By 2015, the campus earned candidate status from the Association
                of Accredited Chartered Colleges and Universities of the
                Philippines (AACCUP) for its five major programs. The following
                year,{" "}
                <span className="font-semibold">Prof. Ronan M. Cajigal</span>{" "}
                was appointed as the second campus dean, ushering in a period of
                institutional growth and development.
              </p>
              <p className="mb-4">
                A groundbreaking ceremony for a new academic building marked the{" "}
                <span className="font-semibold">
                  10th founding anniversary in 2017
                </span>
                , symbolizing the campus’s commitment to progress. Between 2017
                and 2022, several academic programs achieved{" "}
                <span className="font-semibold">
                  AACCUP Level I and II accreditations
                </span>
                , affirming Cavite State University Bacoor City Campus
                dedication to quality instruction, competent faculty, and strong
                student support. All programs also received their Certificate of
                Program Compliance (COPC) from the Commission on Higher
                Education (CHED), ensuring full adherence to national academic
                standards.
              </p>
              <p className="mb-4">
                In the same year, the campus launched BACOOREx, a
                community-based extension program designed to translate research
                into action, helping residents manage resources and gain access
                to essential services. This initiative highlights Cavite State
                University Bacoor City Campus dedication not only to education
                but also to social responsibility and sustainable development.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="relative w-full">
                  <Image
                    src="/old-2.png"
                    alt="Bacoor Campus Old"
                    className="object-cover rounded-md"
                    width={450}
                    height={450}
                  />
                </div>
                <div className="relative w-full">
                  <Image
                    src="/old-3.png"
                    alt="Early Campus"
                    className="object-cover rounded-md"
                    fill
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="modern" className="pt-6">
              <h2 className="text-2xl font-bold mb-4">
                Modern Era (2017–Present)
              </h2>
              <p className="mb-4">
                In 2020,{" "}
                <span className="font-semibold">
                  Prof. Menvyluz S. Macalalad
                </span>{" "}
                became the campus’s first female administrator, leading Cavite
                State University Bacoor City Campus through the challenges
                brought by the{" "}
                <span className="font-semibold">COVID-19 pandemic</span>, the
                Taal Volcano eruption, and multiple typhoons. Despite these
                hardships, the campus demonstrated resilience by swiftly
                adapting to flexible learning modalities and implementing
                policies to safeguard the health and welfare of its community.
              </p>
              <p className="mb-4">
                Through collaboration, innovation, and dedication, the faculty
                and staff developed effective strategies to maintain academic
                excellence during the transition from traditional to remote
                learning. Cavite State University Bacoor City Campus also
                strengthened its efforts in holistic student development—moral,
                emotional, spiritual, and physical—ensuring that education
                remained meaningful and transformative.
              </p>
              <p className="mb-4">
                Over the years, the campus has consistently excelled in
                licensure examinations, particularly in Teacher Education,
                Psychology, and Criminology. Its criminology graduates have
                achieved outstanding results, including{" "}
                <span className="font-semibold">
                  100% passing rates in 2017, 2018, and 2022
                </span>
                , earning commendations from the Professional Criminologists
                Association of the Philippines (PCAP) Region IV-A Chapter.
                Notably, Cavite State University Bacoor City Campus was
                recognized as the Top 4 Performing School in Criminology
                nationwide in the February 2024 Licensure Examination, with a
                96.15% passing rate, reflecting its commitment to academic
                excellence and professional competence.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="relative w-full">
                  <Image
                    src="/old-2.png"
                    alt="Bacoor Campus Old"
                    className="object-cover rounded-md"
                    width={450}
                    height={450}
                  />
                </div>
                <div className="relative w-full">
                  <Image
                    src="/at-glance-bg.png"
                    alt="Early Campus"
                    className="object-cover rounded-md"
                    fill
                  />
                </div>
              </div>
              <p>
                From its humble beginnings to its present achievements, Cavite
                State University – Bacoor City Campus remains steadfast in its
                mission to deliver excellent, equitable, and relevant education.
                With its dedicated faculty and staff, supportive stakeholders,
                and an unwavering commitment to continuous improvement, Cavite
                State University Bacoor City Campus continues to nurture
                globally competitive and morally upright individuals who
                contribute to the progress of the community, the region, and
                beyond.
              </p>
            </TabsContent>
            <TabsContent value="future" className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Future Campus Plans</h2>
              <p className="mb-4">
                Looking forward, the campus enters a new phase of growth through
                the Deed of Usufruct signed in July 2023 among the City
                Government of Bacoor, the Industrial Technology Development
                Institute (ITDI), and the DepEd City Schools Division of Bacoor.
                This partnership paves the way for the establishment of a
                state-of-the-art 12-story academic building in Molino III,
                focused on science and technology programs. This modern facility
                will serve as a symbol of innovation, sustainability, and
                excellence in education and character formation.
              </p>
              <div className="relative h-60 w-full mx-auto my-6">
                <Image
                  src="/molino3-future.png"
                  alt="Campus Master Plan Rendering"
                  className="object-cover rounded-md"
                  width={600}
                  height={300}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          {/* <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Campus Tours</h3>
            <p className="mb-4">
              Explore our historic campus with guided tours offered throughout
              the year.
            </p>
            <ul className="space-y-2">
              <li>General Campus Tours: Monday-Friday, 10am & 2pm</li>
              <li>Historic Buildings Tour: Saturdays, 11am</li>
              <li>
                Architectural Heritage Tour: First Sunday of each month, 1pm
              </li>
            </ul>
            <Button className="w-full mt-4">Schedule a Tour</Button>
          </div> */}

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
                  href="/about/campus-map"
                  className="text-primary hover:underline"
                >
                  Campus Map
                </Link>
              </li>
              <li>
                <Link
                  href="/about/campus-officials"
                  className="text-primary hover:underline"
                >
                  Campus Officials
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-primary hover:underline">
                  Visit the Campus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
