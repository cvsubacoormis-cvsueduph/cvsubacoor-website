import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CampusMapPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Campus Map</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Campus Map</span>
        </div>
      </div>

      {/* <div className="mb-8">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Navigate our campus with interactive maps, building information, and
          directions to key locations.
        </p>
      </div> */}

      {/* Search and Filter */}
      {/* <div className="bg-slate-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Find Campus Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search buildings, facilities, etc."
                className="pl-8"
              />
            </div>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Building Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Buildings</SelectItem>
                <SelectItem value="academic">Academic Buildings</SelectItem>
                <SelectItem value="residential">Residence Halls</SelectItem>
                <SelectItem value="dining">Dining Facilities</SelectItem>
                <SelectItem value="athletic">Athletic Facilities</SelectItem>
                <SelectItem value="parking">Parking Lots</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button className="w-full">Search</Button>
          </div>
        </div>
      </div> */}

      <Tabs defaultValue="interactive" className="mb-12">
        {/* <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="interactive">Interactive Map</TabsTrigger>
          <TabsTrigger value="buildings">Building Directory</TabsTrigger>
          <TabsTrigger value="parking">Parking & Transportation</TabsTrigger>
        </TabsList> */}

        {/* Interactive Map Tab */}
        <TabsContent value="interactive" className="pt-6">
          <div className="bg-white border rounded-lg overflow-hidden mb-6">
            <div className="relative h-[600px] w-full">
              {/* <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Interactive Campus Map"
                fill
                className="object-cover"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 p-4 rounded-lg text-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1475.598924144317!2d120.9818166303995!3d14.412585371963287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d22f4810979f:0xaf0dae4457b7d498!2sCavite State University - Bacoor Campus!5e0!3m2!1sen!2sph!4v1759819467062!5m2!1sen!2sph"
                    width="1370"
                    height="600"
                    style={{
                      border: "none",
                    }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Map Legend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-blue-500 rounded-sm"></div>
                    <span>Academic Buildings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-green-500 rounded-sm"></div>
                    <span>Residence Halls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-yellow-500 rounded-sm"></div>
                    <span>Dining Facilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-red-500 rounded-sm"></div>
                    <span>Athletic Facilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-500 rounded-sm"></div>
                    <span>Parking Lots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-purple-500 rounded-sm"></div>
                    <span>Administrative Buildings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Map Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-10">
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Zoom:</span>
                    <span>Use Ctrl + scroll wheel to zoom the map</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">View:</span>
                    <span>
                      Click view larger map button on the top left side
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Navigate:</span>
                    <span>
                      Click on bottom right for navigation or drag your mouse
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>Download Maps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  PDF Campus Map
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Printable Map
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Accessibility Map
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </TabsContent>

        {/* Building Directory Tab */}
        <TabsContent value="buildings" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Main Administration Building",
                code: "ADM",
                type: "Administrative",
                location: "Central Campus",
                facilities:
                  "President's Office, Admissions, Registrar, Financial Aid",
                hours: "Monday-Friday: 8:00 AM - 5:00 PM",
              },
              {
                name: "Science Center",
                code: "SCI",
                type: "Academic",
                location: "North Campus",
                facilities: "Laboratories, Lecture Halls, Faculty Offices",
                hours:
                  "Monday-Friday: 7:00 AM - 10:00 PM, Saturday: 8:00 AM - 5:00 PM",
              },
              {
                name: "University Library",
                code: "LIB",
                type: "Academic",
                location: "Central Campus",
                facilities: "Study Spaces, Computer Labs, Special Collections",
                hours:
                  "Monday-Thursday: 7:00 AM - 12:00 AM, Friday: 7:00 AM - 8:00 PM, Weekends: 9:00 AM - 8:00 PM",
              },
              {
                name: "Student Union",
                code: "SU",
                type: "Student Services",
                location: "Central Campus",
                facilities:
                  "Dining Hall, Bookstore, Student Organizations, Recreation",
                hours:
                  "Monday-Friday: 7:00 AM - 11:00 PM, Weekends: 9:00 AM - 11:00 PM",
              },
              {
                name: "Engineering Complex",
                code: "ENG",
                type: "Academic",
                location: "South Campus",
                facilities: "Classrooms, Research Labs, Design Studios",
                hours:
                  "Monday-Friday: 7:00 AM - 10:00 PM, Saturday: 8:00 AM - 5:00 PM",
              },
              {
                name: "Residence Hall A",
                code: "RHA",
                type: "Residential",
                location: "East Campus",
                facilities:
                  "Student Housing, Study Lounges, Laundry Facilities",
                hours: "24/7 for Residents, Visitors: 8:00 AM - 10:00 PM",
              },
              {
                name: "Recreation Center",
                code: "REC",
                type: "Athletic",
                location: "West Campus",
                facilities: "Gymnasium, Pool, Fitness Center, Courts",
                hours:
                  "Monday-Friday: 6:00 AM - 10:00 PM, Weekends: 8:00 AM - 8:00 PM",
              },
              {
                name: "Fine Arts Building",
                code: "FAB",
                type: "Academic",
                location: "North Campus",
                facilities: "Galleries, Studios, Performance Spaces",
                hours:
                  "Monday-Friday: 8:00 AM - 9:00 PM, Weekends: 10:00 AM - 6:00 PM",
              },
            ].map((building, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {building.name} ({building.code})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="font-medium">Type:</div>
                      <div className="col-span-2">{building.type}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="font-medium">Location:</div>
                      <div className="col-span-2">{building.location}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="font-medium">Facilities:</div>
                      <div className="col-span-2">{building.facilities}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="font-medium">Hours:</div>
                      <div className="col-span-2">{building.hours}</div>
                    </div>
                  </div>
                  <Button size="sm" className="mt-4">
                    View on Map
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Parking & Transportation Tab */}
        <TabsContent value="parking" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Parking Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The university offers various parking options for students,
                  faculty, staff, and visitors.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-blue-500 rounded-sm"></div>
                    <span>Faculty/Staff Parking (Lots A, B, C)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-green-500 rounded-sm"></div>
                    <span>Student Parking (Lots D, E, F, G)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-yellow-500 rounded-sm"></div>
                    <span>Visitor Parking (Lots V1, V2)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-red-500 rounded-sm"></div>
                    <span>Reserved Parking</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Parking Permit Information
                </Button>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>Campus Shuttle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Free shuttle service operates throughout campus and nearby
                  areas.
                </p>
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="font-medium">Routes:</span>
                    <ul className="ml-5 list-disc">
                      <li>Red Route (Main Campus Loop)</li>
                      <li>Blue Route (North Campus)</li>
                      <li>Green Route (South Campus)</li>
                      <li>Gold Route (Off-Campus Housing)</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium">Hours:</span>
                    <p>Monday-Friday: 7:00 AM - 10:00 PM</p>
                    <p>Weekends: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Shuttle Schedule
                </Button>
              </CardContent>
            </Card> */}

            <Card>
              <CardHeader>
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The university is committed to providing accessible
                  transportation options.
                </p>
                <ul className="space-y-2 mb-4">
                  <li>Accessible parking spaces in all lots</li>
                  <li>Wheelchair-accessible shuttles</li>
                  <li>Paratransit services by appointment</li>
                  <li>Accessible pathways throughout campus</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Accessibility Services
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Parking Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* <div className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Campus Navigation Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Virtual Tour</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Explore our campus from anywhere with our interactive virtual
                tour.
              </p>
              <Button className="w-full">Start Virtual Tour</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mobile App</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Download our campus app for navigation, shuttle tracking, and
                more.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline">App Store</Button>
                <Button variant="outline">Google Play</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Guided Tours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Join a guided walking tour led by student ambassadors.
              </p>
              <Button variant="outline" className="w-full">
                Schedule a Tour
              </Button>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </div>
  );
}
