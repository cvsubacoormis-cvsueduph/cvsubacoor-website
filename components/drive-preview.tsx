"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function DrivePreview() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time or detect iframe load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center">
          <Skeleton className="w-full h-[480px] rounded-md" />
        </div>
        <div className="flex items-center">
          <Skeleton className="w-full h-[480px] rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <iframe
          src="https://drive.google.com/file/d/1ntXBd4N5HWWw_Vo0Gk2PJMDjkepe6zSU/preview"
          width="100%"
          height="480"
          allow="autoplay"
          className="rounded-md"
        ></iframe>
      </div>
      <div className="flex items-center mt-6">
        <iframe
          src="https://drive.google.com/file/d/10at0SJiTpGqEeISAAArhfhXgnTk3Raud/preview"
          width="100%"
          height="480"
          allow="autoplay"
          className="rounded-md"
        ></iframe>
      </div>
    </>
  );
}
