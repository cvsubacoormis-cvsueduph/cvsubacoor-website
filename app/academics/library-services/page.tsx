"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  acquiredBooksData,
  filipinianalinks,
  formsData,
  journalCategories,
  libraryLinks,
  libraryplatforms,
  newspaperlinksData,
  oerData,
  otherlinksData,
} from "@/data/library-links";
import { useEffect, useState } from "react";
import LibraryServicesSkeleton from "@/components/skeleton/LibraryServicesSkeleton";

export default function LibraryServicesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return (
      <>
        <LibraryServicesSkeleton />
      </>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Campus Library
        </h1>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          Academics
          <span className="mx-2">/</span>
          <span>Library Services</span>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3  ">Overview</h2>
        <p className="leading-relaxed  ">
          The Bacoor City Campus Library is located at the Second Floor of the
          Cavite State University – Bacoor City Campus, Phase 2, Soldiers Hills
          IV, Molino VI, Bacoor City, Cavite. It serves as a vital academic
          resource that supports learning, research, and community engagement.
        </p>
      </section>

      {/* Vision, Mission, Goals, Objectives */}
      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="  leading-relaxed">
              The Cavite State University Bacoor City Campus Library aims to be
              a leading academic resource center, delivering equitable,
              high-quality information services that support excellence in
              education, research, and development.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="  leading-relaxed">
              The mission of the Cavite State University Bacoor City Campus
              Library is to provide accessible and relevant information
              resources that support the academic and research needs of
              students, faculty, and researchers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 space-y-1  ">
              <li>
                Create a serene environment for students to study in peace.
              </li>
              <li>Cater to the diverse academic needs of our students.</li>
              <li>
                Enhance and diversify the campus library’s collection, including
                printed materials, periodicals, and digital resources.
              </li>
              <li>
                Continuously evaluate library operations to meet evolving needs.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 space-y-1  ">
              <li>
                Develop and curate a pertinent collection of resource materials,
                encompassing books, periodicals, and non-print materials,
                aligned with each instructional level and research necessity.
              </li>
              <li>
                Expand a comprehensive reference collection, with a specific
                focus on Filipiniana and research resources, as essential tools
                for academic scholarship.
              </li>
              <li>
                Innovatively employ these collections to address the diverse
                needs, interests, and concerns of library users.
              </li>
              <li>
                Provide informative library orientation sessions for freshman
                classes and deliver library tours upon request.
              </li>
              <li>
                Ensure that the library possesses the necessary physical
                facilities and equipment to maximize its utility for both users
                and library resources.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Library Services */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3  ">Library Services</h2>

        {/* 1. Circulation Service */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2  ">
            1. Circulation Service
          </h3>

          {/* Reader’s Services */}
          <div className="mb-3">
            <h4 className="font-semibold  ">a. Reader’s Services</h4>
            <p className="mt-1  ">
              The Bacoor City Campus Library offers physical accommodations for
              students, faculty, staff, and other users. It is open from
              <strong> Monday to Saturday, 7:00 AM to 6:00 PM</strong>, starting
              July 1, 2024.
            </p>
            <p className="mt-2  ">
              Outside users must bring a referral letter from their librarian or
              school administrator and a valid ID.
            </p>
          </div>

          {/* Loan Services */}
          <div>
            <h4 className="font-semibold  ">b. Loan Services</h4>
            <p className="mt-1  ">
              <strong>Books in Print:</strong> Books with multiple copies may be
              borrowed for one week and renewed if there are no pending
              requests.
            </p>
            <p className="mt-2  ">
              <strong>Electronic Books (E-Books):</strong> Access credentials
              for the TriTech digital platform can be requested via email or in
              person.
            </p>
          </div>
        </div>

        {/* 2. Referral Service */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2  ">2. Referral Service</h3>
          <p>
            The Bacoor City Campus Library offers referral services to students
            and faculty conducting research and assists those seeking access to
            resources in partner libraries.
          </p>
          <p className="mt-2 ">
            For more information, contact us via email or visit the library in
            person.
          </p>
        </div>

        {/* Other Library Services */}
        <div>
          <h3 className="text-xl font-semibold mb-2  ">
            Other Library Services
          </h3>
          <ul className="list-disc ml-5 space-y-2 ">
            <li>Reference and research assistance</li>
            <li>Access to online databases and e-books</li>
            <li>Library orientation and literacy programs</li>
            <li>Wi-Fi and study area facilities</li>
            <li>Photocopying and printing services</li>
          </ul>
        </div>
      </section>

      {/* Platforms */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Library Platforms</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {libraryplatforms.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                target="_blank"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                {item.name} <ExternalLink size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Open Access + Other Sections */}
      <section className="mb-10 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Open Access Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">"Exploring the depths of knowledge."</p>
            <p className="mb-5">
              “The following are Free Databases or Open-Access electronic
              journals and books selected to provide additional sources of
              information for researchers. These are mostly open sites and are
              openly used by the public. Please read, follow, and respect each
              site’s privacy and security.”
            </p>
            <p className="font-semibold mb-4">
              Filipiniana Free and Open Access Sources
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filipinianalinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {item.name} <ExternalLink size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Open Access Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {libraryLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    target="_blank"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Open Access Journals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {journalCategories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-lg font-semibold mb-3">
                    {category.category}
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.journals.map((journal, i) => (
                      <li key={i}>
                        <Link
                          href={journal.url || "#"}
                          target="_blank"
                          className="text-blue-600 hover:underline flex items-center gap-1"
                        >
                          {journal.name}
                          <ExternalLink size={14} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Open Educational Resources (OER) Filipiniana E-Journals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {oerData.map((journal, index) => (
                <li key={index}>
                  <Link
                    href={journal.url || "#"}
                    target="_blank"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {journal.name}
                    <ExternalLink size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Newspapers Links</CardTitle>
          </CardHeader>
          <CardContent>
            {newspaperlinksData.map((item, index) => (
              <ul className="space-y-2">
                <li key={index} className="mb-2">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {item.name} <ExternalLink size={14} />
                  </Link>
                </li>
              </ul>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>New Acquired EBooks July 2022</CardTitle>
          </CardHeader>
          <CardContent>
            {acquiredBooksData.map((item, index) => (
              <ul className="space-y-2">
                <li key={index} className="mb-2">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {item.name} <ExternalLink size={14} />
                  </Link>
                </li>
              </ul>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Links</CardTitle>
          </CardHeader>
          <CardContent>
            {otherlinksData.map((item, index) => (
              <ul className="space-y-2">
                <li key={index} className="mb-2">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {item.name} <ExternalLink size={14} />
                  </Link>
                </li>
              </ul>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-3  ">Contact the Library</h2>
        <p className="  mb-2">
          Email:{" "}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cvsubacoorlibrary@cvsu.edu.ph"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            cvsubacoorlibrary@cvsu.edu.ph <br />
          </Link>
        </p>
        <p className="  mb-2">
          Facebook:{" "}
          <Link
            href="https://www.facebook.com/CvSUBacoorCityCampusLibrary"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Cavite State University Bacoor City Campus Library <br />
          </Link>
        </p>
        <p className=" ">
          Library Forms:{" "}
          {formsData.map((form, index) => (
            <Link
              href={form.url || "#"}
              target="_blank"
              className="text-blue-600 hover:underline flex items-center gap-1 mb-2"
              key={index}
            >
              {form.name} <ExternalLink size={14} />
            </Link>
          ))}
        </p>
      </section>
    </div>
  );
}
