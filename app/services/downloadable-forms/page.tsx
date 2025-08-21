import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DownloadableFormsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
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
      </div>
      <div>
        {/* Content for Downloadable Forms page */}
        <p>Access and download important forms and documents.</p>
      </div>
    </div>
  );
}
