"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { CampusOfficialsPageSkeleton } from "@/components/skeleton/CampusOfficialsPageSkeleton";

export default function CampusOfficialsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <CampusOfficialsPageSkeleton />;
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
        <h1 className="text-3xl font-bold mb-2">Campus Officials</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Campus Officials</span>
        </div>
      </div>

      <div className="space-y-12">
        {/* Campus Executive */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Campus Executive Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center text-center">
              <div className="relative w-60 h-60 rounded-full overflow-hidden mt-6">
                <Image
                  src="/GAMUYAO, ZANNIE I..jpg"
                  alt="Campus Chancellor"
                  className="object-cover object-zoom"
                  fill
                />
              </div>
              <CardHeader>
                <CardTitle>Zannie I. Gamuyao</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-primary">
                  Head, Administration and Support Services Office
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <div className="relative w-60 h-60 rounded-full overflow-hidden mt-6">
                <Image
                  src="/MACALALAD, MENVYLUZ S..jpg"
                  alt="Campus Chancellor"
                  className="object-cover object-zoom"
                  fill
                />
              </div>
              <CardHeader>
                <CardTitle>Menvyluz S. Macalalad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-primary">
                  Campus Administrator
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <div className="relative w-60 h-60 rounded-full overflow-hidden mt-6 bg-black">
                <Image
                  src="/campus-officials/cajigal.jpg"
                  alt="Campus Chancellor"
                  className="object-cover object-zoom"
                  fill
                />
              </div>
              <CardHeader>
                <CardTitle>Ronan M. Cajigal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-primary">
                  Campus Secretary, Head, Campus Research Services Office,
                  Coordinator, Professional Education
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* College Deans */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Faculty and Staff Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Jimmy M. Caltino",
                title:
                  "Head, Curriculum and Instruction Office Coordinator, Department of Criminology",
                image: "/campus-officials/jcaltino.jpg",
                // education: "Ph.D. in Physics, MIT",
              },
              {
                name: "Kathy J. Gumboc",
                title: "Chairperson, Department of Arts and Sciences",
                image: "/campus-officials/gumboc.jpg",
                // education: "Ph.D. in Business Administration, Wharton",
              },
              {
                name: "Jovelyn D. Ocampo",
                title: "Chairperson, Department of Computer Studies",
                image: "/campus-officials/ocampo.jpg",
                // education: "Ph.D. in Civil Engineering, Georgia Tech",
              },
              {
                name: "Janice A. Nealega",
                title:
                  "Chairperson, Department of Management Studies, Head, Campus Extension Services Office",
                image: "/campus-officials/nealega.jpg",
                // education: "Ed.D., Columbia University",
              },
              {
                name: "Jolina Razell M. Mindoro",
                title:
                  "Chairperson, Department of Teacher Education, Coordinator, Field Study Program",
                image: "/campus-officials/mindoro.jpg",
                // education: "M.D., Johns Hopkins University",
              },
              {
                name: "Anarose M. Rupido",
                title: "Coordinator, General Education",
                image: "/campus-officials/rupido.jpg",
                // education: "Ph.D. in Agricultural Sciences, Cornell",
              },
              {
                name: "Janette E. Alagar",
                title: "Coordinator, Psychology Program",
                image: "/campus-officials/thumbnail (1).jpg",
                // education: "J.D., Yale Law School",
              },
              {
                name: "Regine U. Caltino",
                title: "Coordinator, Physical Education",
                image: "/campus-officials/caltino.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Ely Rose L. Panganiban-Briones",
                title:
                  "Head, Gender and Development Office, Coordinator, Computer Science Program",
                image: "/campus-officials/panganiban.png",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Donnalyn B. Montallana",
                title:
                  "Coordinator, Information Technology Program, Coordinator, Campus ICT",
                image: "/campus-officials/montallanad.png",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Maria Lourdez D. Lamanilao",
                title:
                  "Coordinator, Business Administration Program, Coordinator, Campus Linkages Office",
                image: "/campus-officials/lamanilao.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Ryan S. Acojedo",
                title: "Coordinator, Hospitality Management Program",
                image: "/campus-officials/acojedo.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Nezil Obiado",
                title:
                  "Coordinator, Secondary Education Program Major in Mathematics",
                image: "/campus-officials/obiado.png",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Jay Anne F. Salles-Villareal",
                title:
                  "Coordinator, Secondary Education Program Major in English",
                image: "/campus-officials/salles.png",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Jimwell G. Dacanay",
                title: "Campus Registrar, Office of the Campus Registrar",
                image: "/campus-officials/dacanay.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Lorema N. Acapulco",
                title: "Campus Librarian, Campus Library Services Office",
                image: "/campus-officials/acapulco.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Steffanie M. Bato",
                title:
                  "Head, Office of Student Affairs and Services, Coordinator, Quality Assurance Office",
                image: "/campus-officials/bato.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Haydih Anne T. Velasco",
                title: "Focal Person, Campus Anti-Red Tape Authority (ARTA)",
                image: "/campus-officials/velasco.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Rimat Maris I. Taclibon",
                title:
                  "Coordinator, Human Resource and Development Office, Public Information Officer",
                image: "/campus-officials/taclibon.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "James E. Dalis",
                title:
                  "Security Officer, Civil Security Services Office, Coordinator, Knowledge Management Office",
                image: "/campus-officials/dalis.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Arman C. Maribojo",
                title: "Coordinator, Pollution Control Office",
                image: "/campus-officials/maribojo.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Alvina E. Ramallosa",
                title: "Coordinator, Alumni Affairs",
                image: "/campus-officials/ramallosa.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Ryan Angelo G. Mojica",
                title: "Budget Officer, In-charge, Procurement Office",
                image: "/campus-officials/ninong-ry.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Gilbert E. Magano",
                title:
                  "Safety Officer, Campus DRRM Office, Coordinator, Physical Plant Services Office",
                image: "/campus-officials/magano.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Diana Mae M. Belarmino",
                title: "Head, Business and Resource Generation Office",
                image: "/campus-officials/belarmino.jpg",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
              {
                name: "Aivan Rhei P. Cacho",
                title: "Campus Nurse, Health Services Office",
                image: "/placeholder.svg?height=150&width=150",
                // education: "Ph.D. in Sociology, UC Berkeley",
              },
            ].map((dean, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-52 h-52 rounded-full overflow-hidden mt-6">
                  <Image
                    src={dean.image || "/placeholder.svg"}
                    alt={dean.name}
                    className="object-cover object-zoom"
                    fill
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{dean.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary">{dean.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {/* {dean.education} */}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Directors */}
        {/* <section>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Directors and Department Heads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Dr. Patricia Adams",
                title: "Director, Office of Research and Development",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Mr. Richard Taylor",
                title: "Director, Campus Planning and Development",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Ms. Jennifer Martinez",
                title: "Director, Student Affairs",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Mr. Daniel Lewis",
                title: "Director, Information Technology Services",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Dr. Elizabeth Clark",
                title: "Director, International Programs",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Ms. Susan Wright",
                title: "Director, Human Resources",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Mr. Kevin Anderson",
                title: "Director, Campus Security",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Dr. Michelle Parker",
                title: "Director, Library Services",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((director, index) => (
              <Card key={index} className="flex items-center p-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={director.image || "/placeholder.svg"}
                    alt={director.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{director.name}</h3>
                  <p className="text-sm text-primary">{director.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Organizational Chart */}
        <section className="bg-slate-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Organizational Structure
          </h2>
          <div className="flex justify-center mb-4">
            <div className="relative h-[400px] w-full max-w-3xl">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Organizational Chart"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* <div className="text-center">
            <Button variant="outline">
              Download Organizational Chart (PDF)
            </Button>
          </div> */}
        </section>
      </div>
    </div>
  );
}
