import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LibraryServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Library Services</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          Academics
          <span className="mx-2">/</span>
          <span>Library Services</span>
        </div>
      </div>
      <div>
        {/* Content for Library Services page */}
        <p>
          Discover the comprehensive library services available to our students
          and faculty.
        </p>
      </div>
    </div>
  );
}
