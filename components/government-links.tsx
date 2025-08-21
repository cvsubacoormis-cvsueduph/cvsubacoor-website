import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GovernmentLinks() {
  const links = [
    {
      category: "Federal Education Departments",
      items: [
        { name: "Department of Education", url: "https://www.ed.gov/" },
        { name: "National Science Foundation", url: "https://www.nsf.gov/" },
        { name: "Federal Student Aid", url: "https://studentaid.gov/" },
      ],
    },
    {
      category: "State Resources",
      items: [
        { name: "State Department of Education", url: "#" },
        { name: "State Higher Education Commission", url: "#" },
        { name: "State Financial Aid Programs", url: "#" },
      ],
    },
    {
      category: "Research & Grants",
      items: [
        { name: "National Institutes of Health", url: "https://www.nih.gov/" },
        { name: "Grants.gov", url: "https://www.grants.gov/" },
        { name: "Research.gov", url: "https://www.research.gov/" },
      ],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="government-links">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Government Resources
            </h2>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              Official government links and resources for education and research
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {links.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.category}</CardTitle>
                <CardDescription>Official government resources</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.items.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="flex items-center text-primary hover:underline"
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
  )
}

