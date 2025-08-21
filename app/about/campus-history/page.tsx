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
              src="/placeholder.svg?height=400&width=800"
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
              <h2 className="text-2xl font-bold mb-4">
                The Founding Years (1885-1920)
              </h2>
              <p className="mb-4">
                Our campus began with a single building, Old Main, constructed
                in 1885 on a 10-acre plot of land donated by the city. This
                Victorian-style building housed classrooms, administrative
                offices, and a small library. The surrounding grounds were
                landscaped with native trees and a central quad was established
                as a gathering place for students.
              </p>
              <p className="mb-4">
                By 1900, three additional buildings had been added: Science
                Hall, the President's Residence, and Alumni Hall. These early
                structures established the architectural character of the
                campus, featuring red brick facades with limestone trim and
                slate roofs.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Old Main Building"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Early Campus Quad"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <p>
                The campus was initially accessible by horse-drawn carriages,
                with the first paved roads being added in 1910. The iconic Main
                Gate was constructed in 1915 as a gift from the graduating
                class, marking the formal entrance to the growing institution.
              </p>
            </TabsContent>
            <TabsContent value="expansion" className="pt-6">
              <h2 className="text-2xl font-bold mb-4">
                The Expansion Era (1920-1960)
              </h2>
              <p className="mb-4">
                Following World War I, the campus experienced significant
                growth. The 1920s saw the addition of the University Library,
                the Memorial Gymnasium, and several residence halls. The campus
                expanded to 50 acres with the acquisition of adjacent farmland
                in 1925.
              </p>
              <p className="mb-4">
                The post-World War II period brought unprecedented expansion,
                with enrollment tripling between 1945 and 1960. This growth
                necessitated the construction of new academic buildings,
                including the Engineering Complex, Business School, and Fine
                Arts Center. The campus footprint expanded to 120 acres during
                this period.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Memorial Gymnasium"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Engineering Complex"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <p>
                The campus landscape was transformed during this period with the
                addition of the Central Fountain, formal gardens, and tree-lined
                walkways. The architectural style shifted to include modernist
                influences while maintaining harmony with the historic core
                buildings.
              </p>
            </TabsContent>
            <TabsContent value="modern" className="pt-6">
              <h2 className="text-2xl font-bold mb-4">
                The Modern Era (1960-Present)
              </h2>
              <p className="mb-4">
                The latter half of the 20th century saw continued growth and
                modernization of the campus. Major additions included the
                Science Center (1975), the Student Union (1982), the Recreation
                Complex (1995), and the Technology Center (2005). These
                facilities incorporated contemporary design elements while
                respecting the campus's architectural heritage.
              </p>
              <p className="mb-4">
                The early 21st century brought a focus on sustainability and
                accessibility. Solar panels were installed on several buildings,
                green spaces were enhanced, and all facilities were updated to
                ensure universal access. The campus now encompasses 200 acres
                with over 50 buildings.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Student Union"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Technology Center"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <p>
                Recent renovations have focused on preserving historic buildings
                while updating their interiors to support modern educational
                needs. Old Main underwent a comprehensive restoration in 2015,
                carefully preserving its exterior while transforming its
                interior into state-of-the-art learning spaces.
              </p>
            </TabsContent>
            <TabsContent value="future" className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Future Campus Plans</h2>
              <p className="mb-4">
                Looking ahead, our campus master plan outlines several exciting
                developments for the next decade. The Innovation District,
                breaking ground next year, will create a hub for
                interdisciplinary research and entrepreneurship on the eastern
                edge of campus.
              </p>
              <p className="mb-4">
                Sustainability remains a key focus, with plans to achieve carbon
                neutrality by 2030. This includes the installation of additional
                renewable energy sources, enhanced green spaces, and the
                implementation of smart building technologies across campus.
              </p>
              <div className="relative h-60 w-full my-6">
                <Image
                  src="/placeholder.svg?height=300&width=800"
                  alt="Campus Master Plan Rendering"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p>
                Transportation and accessibility improvements are also planned,
                including expanded pedestrian zones, enhanced bicycle
                infrastructure, and improved connections to the surrounding
                community. These changes will create a more walkable, accessible
                campus while reducing our environmental footprint.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Historic Buildings</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="font-bold">Old Main (1885):</span>
                <span>The original university building</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Science Hall (1895):</span>
                <span>First dedicated science facility</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">University Library (1922):</span>
                <span>Historic library building</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Memorial Gymnasium (1924):</span>
                <span>Built to honor WWI veterans</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Alumni Hall (1935):</span>
                <span>Funded by alumni donations</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
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
