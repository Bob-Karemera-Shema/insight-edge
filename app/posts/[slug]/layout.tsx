import { LoadPosts } from "@/components/load-posts";
import { enhancePostsWithBlur } from "@/lib/enhancePostsWithBlur";
import { IPost } from "@/lib/types";

export default async function PostLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: Promise<{ slug: string }>
}) {
    const posts: IPost[] = await fetch('https://dev.to/api/articles').then(
        (res) => res.json()
    );
    const { slug } = await params;
    const related = posts.filter(post => post.id !== Number(slug)).slice(0,3);
    console.log(slug);

    const postsWithBlur = await enhancePostsWithBlur(related);

    return (
        <main className="max-w-4xl mx-auto p-4 lg:px-0 space-y-8">
            {children}
            <section className="mt-32 md:mt-20 space-y-4">
                <h2 className="font-bold text-2xl">Latest Posts</h2>
                <LoadPosts posts={postsWithBlur} />
            </section>
        </main>
    );
}