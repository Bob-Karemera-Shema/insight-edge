'use client';

import { IPost, IPostWithBlur } from "@/lib/types"
import { LoadPosts } from "./load-posts";
import { useEffect, useState } from "react";
import { CategoryFilter } from "./category-filter";
import { getFallbackBlurDataURL } from "@/lib/getBlurDataURL";

export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string>("");
    const [postsWithBlur, setPostsWithBlur] = useState<IPostWithBlur[]>([]);

    // Fetch posts and tags once on mount
    useEffect(() => {
        async function fetchData() {
            const postsRes = await fetch('https://dev.to/api/articles');
            const postsData: IPost[] = await postsRes.json();

            const tagsRes = await fetch('https://dev.to/api/tags');
            const tagsData: { name: string }[] = await tagsRes.json();

            setPosts(postsData);
            setFilteredPosts(postsData);
            setTags(tagsData.map(tag => tag.name));
        }
        fetchData();
    }, []);

    // Enhance posts with blur placeholders when filteredPosts changes    
    useEffect(() => {
        async function enhance() {
            const fallbackBlurDataURL = await getFallbackBlurDataURL()
            const enhanced = filteredPosts.map((post) => {
                  return {
                    ...post,
                    coverBlur: fallbackBlurDataURL,
                    avatarBlur: fallbackBlurDataURL,
                  };
                });
            setPostsWithBlur(enhanced);
        }

        if (filteredPosts.length > 0) {
            enhance();
        }
    }, [filteredPosts]);

    // Update filtered posts when selected tag changes
    useEffect(() => {
        if (!selectedTag || selectedTag === 'all') {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(
                posts.filter(post => post.tag_list.includes(selectedTag))
            );
        }
    }, [selectedTag, posts]);

    return (
        <section className="mt-32 md:mt-20 space-y-4">
            <div>
                <h2 className="font-bold text-2xl">Latest Posts</h2>
                <CategoryFilter
                    tags={tags}
                    selectedTag={selectedTag}
                    onChangeAction={setSelectedTag}
                />
            </div>
            <LoadPosts posts={postsWithBlur} />
        </section>
    );
}