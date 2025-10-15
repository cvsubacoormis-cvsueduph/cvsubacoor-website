"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/animated-page";
import AnimatedSectionTitle from "@/components/animated-section-title";
import { JobCard } from "@/components/job-card";
import { JobFilter } from "@/components/job-filter";
import { jobListings } from "@/data/job-listings";

export default function JobPlacementPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    type: "",
    location: "",
  });

  // Extract unique categories, types, and locations for filter dropdowns
  const categories = useMemo(
    () => Array.from(new Set(jobListings.map((job) => job.category))),
    []
  );

  const types = useMemo(
    () => Array.from(new Set(jobListings.map((job) => job.type))),
    []
  );

  const locations = useMemo(
    () => Array.from(new Set(jobListings.map((job) => job.location))),
    []
  );

  // Filter jobs based on selected filters
  const filteredJobs = useMemo(() => {
    return jobListings.filter((job) => {
      const matchesSearch =
        !filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory =
        !filters.category || job.category === filters.category;
      const matchesType = !filters.type || job.type === filters.type;
      const matchesLocation =
        !filters.location || job.location === filters.location;

      return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });
  }, [filters]);

  return (
    <>
      <AnimatedPage>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6 animate-element">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">Job Placement</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Students
              <span className="mx-2">/</span>
              <span>Job Placement</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-element">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
              <p className="mb-4">
                Our Job Placement Office is dedicated to connecting students and
                alumni with meaningful career opportunities. We work with
                employers across various industries to provide access to
                internships, part-time positions, and full-time employment that
                align with your skills, interests, and career goals.
              </p>
              <p className="mb-4">
                Browse the current job listings below or use the filters to find
                opportunities that match your specific criteria. Our career
                counselors are also available to provide personalized guidance
                on resume building, interview preparation, and career planning.
              </p>
            </div>
            <div className="bg-royal-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-royal-blue-800" />
                Career Services
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-royal-blue-800"></div>
                  <span>Resume & Cover Letter Review</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-royal-blue-800"></div>
                  <span>Mock Interviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-royal-blue-800"></div>
                  <span>Career Counseling</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-royal-blue-800"></div>
                  <span>Job Search Strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-royal-blue-800"></div>
                  <span>Networking Events</span>
                </li>
              </ul>
              <Button className="w-full mt-4">Schedule Appointment</Button>
            </div>
          </div>

          <AnimatedSectionTitle
            title="Job Listings"
            subtitle="Explore current job opportunities for students and alumni"
            className="mb-8 animate-element"
          />

          <JobFilter
            onFilterChange={setFilters}
            categories={categories}
            types={types}
            locations={locations}
          />

          <div className="space-y-6 animate-element">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">No jobs found</h3>
                <p className="text-muted-foreground">
                  No job listings match your current filters. Try adjusting your
                  search criteria.
                </p>
              </div>
            )}
          </div>

          <div className="bg-slate-50 p-6 rounded-lg mt-12 animate-element">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Employer Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold mb-2">Post a Job</h3>
                <p className="mb-4 text-sm">
                  Reach our talented pool of students and alumni by posting your
                  job opportunities.
                </p>
                <Button variant="outline" size="sm">
                  Post a Job
                </Button>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Recruitment Events</h3>
                <p className="mb-4 text-sm">
                  Participate in career fairs, information sessions, and
                  on-campus interviews.
                </p>
                <Button variant="outline" size="sm">
                  View Calendar
                </Button>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Employer Partnerships</h3>
                <p className="mb-4 text-sm">
                  Develop a strategic partnership with our university for
                  ongoing recruitment.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
