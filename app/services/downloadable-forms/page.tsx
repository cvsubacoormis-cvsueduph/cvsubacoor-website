"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DownloadableFormsPage() {
  const categories = [
    {
      title: "Enrollment Forms",
      description: "Forms related to student registration and enrollment.",
      forms: [
        { name: "Admission Application Form", file: "/forms/admission-form.pdf", type: "PDF" },
        { name: "Subject Adding/Dropping Form", file: "/forms/add-drop-form.docx", type: "DOCX" },
        { name: "Cross-Enrollment Form", file: "/forms/cross-enrollment.pdf", type: "PDF" },
      ],
    },
    {
      title: "Academic Forms",
      description: "Documents for academic requests and clearance.",
      forms: [
        { name: "Change of Grade Request", file: "/forms/change-grade.docx", type: "DOCX" },
        { name: "Completion Form", file: "/forms/completion.pdf", type: "PDF" },
        { name: "Clearance Form", file: "/forms/clearance.pdf", type: "PDF" },
      ],
    },
    {
      title: "Student Services",
      description: "General student service-related forms.",
      forms: [
        { name: "Scholarship Application", file: "/forms/scholarship.pdf", type: "PDF" },
        { name: "Good Moral Certificate Request", file: "/forms/good-moral.docx", type: "DOCX" },
        { name: "ID Replacement Form", file: "/forms/id-replacement.pdf", type: "PDF" },
      ],
    },
  ];

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

        <h1 className="text-3xl font-bold mb-2">Downloadable Forms</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          Services
          <span className="mx-2">/</span>
          <span>Downloadable Forms</span>
        </div>

        <p className="text-muted-foreground">
          Access and download important forms and documents for your student needs.
        </p>
      </div>

      {/* Forms Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.title} className="shadow-sm border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-blue-600" />
                {category.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.forms.map((form) => (
                  <li
                    key={form.name}
                    className="flex items-center justify-between border rounded-md px-3 py-2 hover:bg-muted transition"
                  >
                    <span className="text-sm font-medium">{form.name}</span>
                    <Button asChild size="sm" variant="outline">
                      <Link href={form.file} download>
                        <Download className="h-4 w-4 mr-1" />
                        {form.type}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
