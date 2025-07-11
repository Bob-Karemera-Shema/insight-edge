import { IPost } from "@/lib/types"
import { PostCard } from "./post-card";

export const Posts = async () => {
    const posts: IPost[] = await fetch('https://dev.to/api/articles').then(
        (res) => res.json()
    );

    return (
        <section className="mt-32 md:mt-20 space-y-4">
            <h2 className="font-bold text-2xl">Latest Posts</h2>
            <article>
                {
                    posts && posts.map(post => <PostCard key={post.id} post={post} />)
                }
            </article>
        </section>
    );
}