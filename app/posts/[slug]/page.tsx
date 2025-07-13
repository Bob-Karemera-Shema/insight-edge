import { RevalidateButton } from "@/components/revalidate-button";
import { enhancePostWithBLur } from "@/lib/enhancePostsWithBlur";
import { IDetailedPost, IPost } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
    const posts: IPost[] = await fetch('https://dev.to/api/articles').then((res) => res.json());

    return posts.map((post) => ({
        slug: String(post.id)
    }));
}

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const { slug } = await params
    const { title } = await fetch(`https://dev.to/api/articles/${slug}`).then(
        (res) => res.json()
    );
    return {
        title,
        description: `Read our article on ${title}`,
    };
};

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const post: IDetailedPost = await fetch(`https://dev.to/api/articles/${slug}`).then(
        (res) => res.json()
    );

    const buildTime = new Date().toISOString();
    const formattedBuildTime = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }).format(new Date(buildTime));

    const postWithBlur = await enhancePostWithBLur(post);
    const { avatarBlur, body_html, coverBlur, cover_image, published_at, tag_list, title, user } = postWithBlur;
    const date = new Date(published_at);
    const formattedPublishedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(date);

    return (
        <>
            <div className="flex items-center justify-between gap-4">
                <p className="text-font-light-gray">
                    Last generated at: {formattedBuildTime}
                </p>
                <RevalidateButton path={`/posts/${slug}`} />
            </div>
            <span className="py-1 px-2 bg-custom-blue/5 text-sm text-custom-blue font-medium capitalize">{tag_list}</span>
            <h1 className="font-semibold text-4xl mt-4">{title}</h1>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <Image
                        src={user.profile_image}
                        alt={user.name}
                        width={640}
                        height={640}
                        placeholder="blur"
                        blurDataURL={avatarBlur}
                        className="w-9 h-9 rounded-full"
                    />
                    <span className="text-font-light-gray font-medium">{user.name}</span>
                </div>
                <span className="text-font-light-gray">{formattedPublishedDate}</span>
            </div>
            <Image
                src={cover_image ?? '/placeholder.jpg'}
                alt="Blog cover"
                width={cover_image ? 1000 : 640}
                height={cover_image ? 420 : 425}
                placeholder="blur"
                blurDataURL={coverBlur}
                className="w-full h-auto object-cover rounded-lg"
            />
            <article
                className="prose space-y-6"
                dangerouslySetInnerHTML={{ __html: body_html }}
            />
        </>
    );
}