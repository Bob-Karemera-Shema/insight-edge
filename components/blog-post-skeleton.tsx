'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostSkeleton() {
  const articlePlaceholders = Array.from({ length: 3 });

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
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[85%]" />
      </div>

      {/* Read more section */}
      <section className="mt-32 md:mt-20 space-y-4">
        <h2 className="font-bold text-2xl">
          <Skeleton className="h-8 w-48 rounded-md" />
        </h2>

        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articlePlaceholders.map((_, i) => (
            <div key={i} className="w-full space-y-2">
              <Skeleton className="h-48 rounded-lg" /> {/* Image placeholder */}
              <Skeleton className="h-5 w-3/4 rounded-md" /> {/* Title placeholder */}
              <Skeleton className="h-4 w-1/2 rounded-md" /> {/* Subtitle/metadata */}
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}