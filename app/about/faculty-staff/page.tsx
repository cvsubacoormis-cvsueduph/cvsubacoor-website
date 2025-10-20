"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Search, AlertCircle } from "lucide-react";

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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { facultyData, staffData } from "@/data/faculty-staff";
import FacultyStaffLoadingSkeleton from "@/components/skeleton/FacultyStaffLoadingSkeleton";

export default function FacultyStaffPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("faculty");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 9;

  // Simulate loading delay (remove or replace with real fetch later)
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const data = filterType === "faculty" ? facultyData : staffData;

  const filteredData = useMemo(() => {
    return data.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, data]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // ✅ Show skeleton while loading
  if (isLoading) {
    return <FacultyStaffLoadingSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button and Breadcrumb */}
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Faculty and Staff</h1>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          About
          <span className="mx-2">/</span>
          <span>Faculty and Staff</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our university is home to distinguished faculty and dedicated staff
          who are committed to excellence in teaching, research, and service.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-slate-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Find Faculty and Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Field */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-8"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <Select
              value={filterType}
              onValueChange={(value) => {
                setFilterType(value);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="faculty">Faculty</SelectItem>
                <SelectItem value="staff">Administrative Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Alert Note */}
      <Alert className="mb-12 border-blue-200 bg-blue-50">
        <AlertCircle className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-800 font-semibold">
          Important Note
        </AlertTitle>
        <AlertDescription className="text-blue-700">
          If you notice any misspelled names, incorrect information, or missing
          faculty/staff images, please contact the <b>MIS Coordinator</b> for
          corrections.
        </AlertDescription>
      </Alert>

      {/* Tabs */}
      <Tabs value={filterType} className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="faculty" onClick={() => setFilterType("faculty")}>
            Faculty
          </TabsTrigger>
          <TabsTrigger value="staff" onClick={() => setFilterType("staff")}>
            Administrative Staff
          </TabsTrigger>
        </TabsList>

        {/* Faculty Section */}
        <TabsContent value="faculty" className="pt-6">
          {paginatedData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedData.map((faculty, index) => (
                  <Card key={index}>
                    <div className="flex flex-col items-center p-4">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                        <Image
                          src={faculty?.image || "/placeholder-faculty.png"}
                          alt={faculty.name}
                          fill
                          sizes="(100vw)"
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="text-center p-0 mb-2">
                        <CardTitle>{faculty.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center p-0">
                        <p className="font-medium text-primary">
                          {faculty.title}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1)
                            handlePageChange(currentPage - 1);
                        }}
                      />
                    </PaginationItem>

                    {/* Page Numbers */}
                    {(() => {
                      let startPage = Math.max(1, currentPage - 2);
                      let endPage = Math.min(totalPages, startPage + 4);
                      if (endPage - startPage < 4) {
                        startPage = Math.max(1, endPage - 4);
                      }

                      const visiblePages = Array.from(
                        { length: endPage - startPage + 1 },
                        (_, i) => startPage + i
                      );

                      return (
                        <>
                          {startPage > 1 && (
                            <>
                              <PaginationItem>
                                <PaginationLink
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(1);
                                  }}
                                >
                                  1
                                </PaginationLink>
                              </PaginationItem>
                              {startPage > 2 && <PaginationEllipsis />}
                            </>
                          )}

                          {visiblePages.map((page) => (
                            <PaginationItem key={page}>
                              <PaginationLink
                                href="#"
                                isActive={currentPage === page}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePageChange(page);
                                }}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          ))}

                          {endPage < totalPages && (
                            <>
                              {endPage < totalPages - 1 && (
                                <PaginationEllipsis />
                              )}
                              <PaginationItem>
                                <PaginationLink
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(totalPages);
                                  }}
                                >
                                  {totalPages}
                                </PaginationLink>
                              </PaginationItem>
                            </>
                          )}
                        </>
                      );
                    })()}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            handlePageChange(currentPage + 1);
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500 py-10">
              No results found for your search.
            </p>
          )}
        </TabsContent>

        {/* Staff Section */}
        <TabsContent value="staff" className="pt-6">
          {paginatedData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedData.map((staff, index) => (
                  <Card key={index}>
                    <div className="flex flex-col items-center p-4">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                        <Image
                          src={staff.image || "/placeholder-staff.png"}
                          alt={staff.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="text-center p-0 mb-2">
                        <CardTitle>{staff.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center p-0">
                        <p className="font-medium text-primary">
                          {staff.title}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1)
                            handlePageChange(currentPage - 1);
                        }}
                      />
                    </PaginationItem>

                    {/* Page numbers */}
                    {(() => {
                      let startPage = Math.max(1, currentPage - 2);
                      let endPage = Math.min(totalPages, startPage + 4);
                      if (endPage - startPage < 4) {
                        startPage = Math.max(1, endPage - 4);
                      }

                      const visiblePages = Array.from(
                        { length: endPage - startPage + 1 },
                        (_, i) => startPage + i
                      );

                      return (
                        <>
                          {startPage > 1 && (
                            <>
                              <PaginationItem>
                                <PaginationLink
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(1);
                                  }}
                                >
                                  1
                                </PaginationLink>
                              </PaginationItem>
                              {startPage > 2 && <PaginationEllipsis />}
                            </>
                          )}

                          {visiblePages.map((page) => (
                            <PaginationItem key={page}>
                              <PaginationLink
                                href="#"
                                isActive={currentPage === page}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePageChange(page);
                                }}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          ))}

                          {endPage < totalPages && (
                            <>
                              {endPage < totalPages - 1 && (
                                <PaginationEllipsis />
                              )}
                              <PaginationItem>
                                <PaginationLink
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(totalPages);
                                  }}
                                >
                                  {totalPages}
                                </PaginationLink>
                              </PaginationItem>
                            </>
                          )}
                        </>
                      );
                    })()}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            handlePageChange(currentPage + 1);
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500 py-10">
              No results found for your search.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
