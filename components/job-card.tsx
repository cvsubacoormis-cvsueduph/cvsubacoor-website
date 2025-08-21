"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Briefcase, ChevronDown, ChevronUp, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Badge } from "@/components/ui/card"
import type { JobListing } from "@/data/job-listings"

interface JobCardProps {
  job: JobListing
}

export function JobCard({ job }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3 lg:w-1/4">
          <Image src={job.image || "/placeholder.svg"} alt={job.title} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="text-base">{job.company}</CardDescription>
              </div>
              <Badge className="self-start bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-200">
                {job.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
              </div>
            </div>
            <p className={`text-sm ${isExpanded ? "" : "line-clamp-2"}`}>{job.description}</p>

            {isExpanded && (
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-bold text-sm mb-1">Requirements:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-sm mb-1">Responsibilities:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-sm mb-1">Salary:</h4>
                  <p className="text-sm">{job.salary}</p>
                </div>

                <div>
                  <h4 className="font-bold text-sm mb-1">Contact Information:</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{job.contactEmail}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{job.contactPhone}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={toggleExpand}>
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" /> Read More
                </>
              )}
            </Button>
            <Button size="sm">Apply Now</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

