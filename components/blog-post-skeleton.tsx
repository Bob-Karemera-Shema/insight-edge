'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostSkeleton() {
  return (
    <main className="max-w-4xl mx-auto p-4 lg:px-0 space-y-8">
      {/* Top bar: last generated + revalidate button */}
      <div className="flex items-center justify-between gap-4">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-8 w-24 rounded-md" />
      </div>

      {/* Tag */}
      <Skeleton className="h-6 w-24 rounded-md" />

      {/* Title */}
      <Skeleton className="h-10 w-3/4 rounded-md" />

      {/* Author & Date */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Skeleton className="w-9 h-9 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Cover image */}
      <Skeleton className="w-full h-[420px] rounded-lg" />

      {/* Article body */}
      <div className="prose space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[85%]" />
      </div>
    </main>
  );
}