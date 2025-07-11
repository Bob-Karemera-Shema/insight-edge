import { IPost } from "@/lib/types"
import { LoadPosts } from "./load-posts";
import { enhancePostsWithBlur } from "@/lib/enhancePostsWithBlur";

export const Posts = async () => {
    const posts: IPost[] = await fetch('https://dev.to/api/articles').then(
        (res) => res.json()
    );

    const postsWithBlur = await enhancePostsWithBlur(posts);

    return (
        <section className="mt-32 md:mt-20 space-y-4">
            <h2 className="font-bold text-2xl">Latest Posts</h2>
            <LoadPosts posts={postsWithBlur} />
        </section>
    );
}