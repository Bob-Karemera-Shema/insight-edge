import { Hero } from "@/components/hero";
import { Posts } from "@/components/posts";

export default async function Home() {
  return (
    <main className="max-w-5xl mx-auto p-4 lg:px-0">
      <Hero />
      <Posts />
    </main>
  );
}
