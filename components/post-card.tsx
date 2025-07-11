import { IPostWithBlur } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    post: IPostWithBlur,
}

export const PostCard = ({ post }: Props) => {
    const { avatarBlur, cover_image, coverBlur, id, published_at, tag_list, title, user } = post;
    const date = new Date(published_at);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(date);

    return (
        <Link
            href={`/posts/${id}`}
            aria-label={`${title} page`}
            className="p-2 space-y-4 border border-border-color rounded-md hover:bg-container-light-gray"
        >
            <Image
                src={cover_image ?? '/placeholder.jpg'}
                alt="Blog cover"
                width={cover_image ? 1000 : 640}
                height={cover_image ? 420 : 425}
                placeholder="blur"
                blurDataURL={coverBlur}
                className="w-full h-auto object-cover rounded-md"
            />
            <div className="space-y-4 px-1">
                <span className="py-1 px-2 bg-custom-blue/5 text-sm text-custom-blue font-medium capitalize">{tag_list[0]}</span>
                <h3 className="font-semibold text-2xl mt-4">{title}</h3>
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
                    <span className="text-font-light-gray">{formattedDate}</span>
                </div>
            </div>
        </Link>
    );
}