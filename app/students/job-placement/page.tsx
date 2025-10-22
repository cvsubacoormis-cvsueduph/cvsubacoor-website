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
                part-time positions and full-time employment that align with
                your skills, interests, and career goals.
              </p>
            </div>
          </div>

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
        </div>
      </AnimatedPage>
    </>
  );
}
