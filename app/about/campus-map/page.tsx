"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { CampusMapPageSkeleton } from "@/components/skeleton/CampusMapPageSkeleton";

export default function CampusMapPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CampusMapPageSkeleton />;
  }
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

      <Tabs defaultValue="interactive" className="mb-12">
        {/* Interactive Map Tab */}
        <TabsContent value="interactive" className="pt-6">
          <div className="bg-white border rounded-lg overflow-hidden mb-6">
            <div className="relative h-[600px] w-full">
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
    </div>
  );
}
