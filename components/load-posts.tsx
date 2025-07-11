'use client';

import { IPostWithBlur } from "@/lib/types";
import { useState } from "react";
import { PostCard } from "./post-card";
import { Button } from "./ui/button";

const POST_PER_LOAD = 9;

export const LoadPosts = ({ posts }: { posts: IPostWithBlur[] }) => {
    const [visibleCount, setVisibleCount] = useState(POST_PER_LOAD);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + POST_PER_LOAD);
    }

    const visiblePosts = posts.slice(0, visibleCount);
    const hasMore = visibleCount < posts.length;

    return (
        <>
            <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    visiblePosts.map(post => <PostCard key={post.id} post={post} />)
                }
            </article>
            {
                hasMore && (
                    <div className="text-center mt-8">
                        <Button
                            size="lg"
                            variant="outline"
                            className="cursor-pointer"
                            onClick={handleLoadMore}
                        >
                            Load More
                        </Button>
                    </div>
                )
            }
        </>
    );
}