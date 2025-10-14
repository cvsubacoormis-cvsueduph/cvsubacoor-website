import Link from "next/link";
import {
  ArrowLeft,
  Building,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  academicoffices,
  administrativeoffices,
  studentoffices,
} from "@/data/offices";

export default function OfficesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Campus Offices</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Offices</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our university maintains various administrative and academic offices
          to support students, faculty, and staff. Find contact information and
          services provided by each office below.
        </p>
      </div>

      <Tabs defaultValue="academic" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="academic">Academic Offices</TabsTrigger>
          <TabsTrigger value="administrative">
            Administrative Offices
          </TabsTrigger>
          <TabsTrigger value="student">Student Services Offices</TabsTrigger>
        </TabsList>

        {/* Academic Offices */}
        <TabsContent value="academic" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicoffices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    {office.name}
                  </CardTitle>
                  {/* <CardDescription>{office.description}</CardDescription> */}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.email}</span>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p className="text-muted-foreground">
                        {office.contact.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Administrative Offices */}
        <TabsContent value="administrative" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {administrativeoffices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    {office.name}
                  </CardTitle>
                  {/* <CardDescription>{office.description}</CardDescription> */}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.email}</span>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p className="text-muted-foreground">
                        {office.contact.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Student Services Offices */}
        <TabsContent value="student" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentoffices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    {office.name}
                  </CardTitle>
                  {/* <CardDescription>{office.description}</CardDescription> */}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{office.contact.email}</span>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p className="text-muted-foreground">
                        {office.contact.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
