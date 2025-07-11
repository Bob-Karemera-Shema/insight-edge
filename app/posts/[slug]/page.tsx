import { enhancePostWithBLur } from "@/lib/enhancePostsWithBlur";
import { IDetailedPost, IPost } from "@/lib/types";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
    const posts: IPost[] = await fetch('https://dev.to/api/articles').then((res) => res.json());

    return posts.map((post) => ({
        slug: String(post.id)
    }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const post: IDetailedPost = await fetch(`https://dev.to/api/articles/${slug}`).then(
        (res) => res.json()
    );
    const postWithBlur = await enhancePostWithBLur(post);

    return (
        <main>
            <h1>{postWithBlur.title}</h1>
            <p>{post.description}</p>
        </main>
    );
}