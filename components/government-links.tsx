import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CardDescription } from "./card";

export default function GovernmentLinks() {
  const links = [
    {
      category: "Bagong Pilipinas Campaign",
      image: "/government-assets/bagongpilipinas.png",
      items: [
        {
          name: "Brand of Governance and Leadership",
          url: "https://www.ed.gov/",
        },
      ],
    },
    {
      category: "Citizens Charter",
      image: "/government-assets/citizen charter.png",
      items: [{ name: "State Department of Education", url: "#" }],
    },
    {
      category: "LANDBANK Link.BizPortal",
      image: "/government-assets/landbank logo.png",
      items: [
        { name: "National Institutes of Health", url: "https://www.nih.gov/" },
      ],
    },
    {
      category: "Freedom of Information",
      image: "/government-assets/foi.png",
      items: [
        { name: "National Institutes of Health", url: "https://www.nih.gov/" },
      ],
    },
    {
      category: "Transparency Seal",
      image: "/government-assets/transparency-seal.png",
      items: [
        { name: "National Institutes of Health", url: "https://www.nih.gov/" },
      ],
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-20 lg:py-28 bg-[#0071ce]"
      id="government-links"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Government Resources
          </h2>
          <p className="mx-auto max-w-[600px] text-white/90 md:text-lg">
            Official government links and resources for education and research
          </p>
        </div>

        {/* Grid layout */}
        <div className="mx-auto grid max-w-full grid-cols-1 gap-4 py-20 md:grid-cols-5">
          {links.map((section, index) => (
            <Card
              key={index}
              className="rounded-xl shadow-md bg-white/95 hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-center font-semibold">
                  {section.category}
                </CardTitle>
              </CardHeader>
              {/* Image at top */}
              <div className="relative w-full">
                <Image
                  src={section.image}
                  alt={section.category}
                  width={300}
                  height={200}
                  className="object-none"
                />
              </div>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm">
                  {section.items.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="flex items-center text-blue-700 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
