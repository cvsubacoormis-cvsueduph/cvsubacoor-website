// app/admission/requirements-procedures/RequirementsProceduresPageSkeleton.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import AnimatedPage from "@/components/animated-page";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function RequirementsProceduresPageSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Skeleton className="h-10 w-32 mb-2" />
          <Skeleton className="h-9 w-[280px] mb-2" />
          <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
            <Skeleton className="h-4 w-16" />
            <span>/</span>
            <Skeleton className="h-4 w-24" />
            <span>/</span>
            <Skeleton className="h-4 w-28" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex gap-4 mt-6">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
          <Skeleton className="h-[300px] rounded-lg" />
        </div>

        <div className="rounded-lg border p-6 mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-48" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <div className="space-y-1 pl-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={`reminder-${index}`} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="undergraduate" className="mb-12">
          <TabsContent value="undergraduate" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-6">
                  <Skeleton className="h-6 w-56" />
                  <div className="space-y-8">
                    {Array.from({ length: 5 }).map((_, sectionIndex) => (
                      <div
                        key={`requirements-section-${sectionIndex}`}
                        className="space-y-4"
                      >
                        <div className="flex items-start gap-3">
                          <Skeleton className="h-9 w-9 rounded-full mt-1" />
                          <div className="space-y-2">
                            <Skeleton className="h-5 w-48" />
                            <Skeleton className="h-5 w-40" />
                          </div>
                        </div>
                        <div className="pl-8 space-y-2">
                          {Array.from({ length: 2 }).map((_, listIndex) => (
                            <Skeleton
                              key={`req-item-${sectionIndex}-${listIndex}`}
                              className="h-4 w-full"
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-80" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                  <div className="space-y-3">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={`deadline-${index}`} className="space-y-1">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={`help-${index}`} className="space-y-1">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-5 w-44" />
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <Skeleton className="h-8 w-24" />
                      </TableHead>
                      <TableHead>
                        <Skeleton className="h-8 w-64" />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 2 }).map((_, rowIndex) => (
                      <TableRow key={`table-row-${rowIndex}`}>
                        <TableCell>
                          <Skeleton className="h-8 w-32" />
                        </TableCell>
                        <TableCell>
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-3/4" />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedPage>
  );
}
